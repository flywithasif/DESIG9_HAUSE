
import React, { useState, useEffect } from "react";
import {
  Search,
  Phone,
  Edit3,
  X,
  Eye,
  History,
  AlertTriangle,
} from "lucide-react";

export default function LeadsPage({ type = "contact" }) {
  const [leads, setLeads] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [viewDetailsLead, setViewDetailsLead] = useState(null);
  const [search, setSearch] = useState("");
  const [filterQuality, setFilterQuality] = useState("ALL");

  const user = JSON.parse(localStorage.getItem("adminUser") || "{}");
  const isSuperAdmin = user.role === "superadmin";

  const [commentTag, setCommentTag] = useState("");
  const [newComment, setNewComment] = useState("");
  const [quality, setQuality] = useState("WARM");
  const [assignedTo, setAssignedTo] = useState("");
  const [followUpDate, setFollowUpDate] = useState("");
  const [followUpTime, setFollowUpTime] = useState("");
  const [noFollowUp, setNoFollowUp] = useState(false);

  useEffect(() => {
    fetchLeads();
    if (isSuperAdmin) fetchTeam();
  }, [type]);

  const fetchLeads = async () => {
    try {
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const token = localStorage.getItem("token");
      const endpoint =
        type === "contact" ? "/enquiries" : "/site-visits";

      const res = await fetch(
        `${api.replace(/\/$/, "")}${endpoint}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      setLeads(data.leads || data.visits || []);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchTeam = async () => {
    try {
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const token = localStorage.getItem("token");

      const res = await fetch(
        `${api.replace(/\/$/, "")}/admin/users`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      setTeamMembers(data.users || []);
    } catch (err) {
      console.error(err);
    }
  };

  const openEditModal = (lead) => {
    setSelectedLead(lead);
    setQuality(lead.quality || "WARM");
    setAssignedTo(lead.assignedTo?._id || "");
    setFollowUpDate(lead.followUpDate || "");
    setFollowUpTime(lead.followUpTime || "");
    setNoFollowUp(false);
    setCommentTag("");
    setNewComment("");
  };

  const handleUpdateLead = async (e) => {
    e.preventDefault();
    if (!selectedLead) return;

    try {
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const token = localStorage.getItem("token");

      const endpoint =
        type === "contact"
          ? `/enquiries/${selectedLead._id}`
          : `/site-visits/${selectedLead._id}`;

      const res = await fetch(
        `${api.replace(/\/$/, "")}${endpoint}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            quality,
            commentTag,
            newComment,
            assignedTo,
            followUpDate:
              quality === "COLD" && noFollowUp ? "" : followUpDate,
            followUpTime:
              quality === "COLD" && noFollowUp ? "" : followUpTime,
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Update failed");
      }

      alert("Lead updated successfully!");
      setSelectedLead(null);
      setNewComment("");
      setCommentTag("");
      fetchLeads();
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const name = lead.name || lead.fullName || "";
    const phone = lead.phone || "";

    return (
      (name.toLowerCase().includes(search.toLowerCase()) ||
        phone.includes(search)) &&
      (filterQuality === "ALL" || lead.quality === filterQuality)
    );
  });

  const inputClass =
    "w-full min-w-0 rounded-xl border border-white/10 bg-[#121210] px-3 py-3 text-sm text-white outline-none transition-colors focus:border-[#c51f32]";

  const selectClass =
    "w-full min-w-0 cursor-pointer rounded-xl border border-white/10 bg-[#121210] px-3 py-3 text-sm text-white outline-none focus:border-[#c51f32]";

  const qualityClass = (value) =>
    value === "HOT"
      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
      : value === "COLD"
        ? "border-rose-500/40 bg-rose-500/10 text-rose-400"
        : "border-amber-500/40 bg-amber-500/10 text-amber-400";

  const actionButton =
    "inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-[#c51f32]/50 hover:bg-[#c51f32]";

  const LeadActions = ({ lead }) => (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => openEditModal(lead)}
        className={actionButton}
        title="Update lead / Add comment"
        aria-label={`Edit ${lead.name || lead.fullName || "lead"}`}
      >
        <Edit3 size={15} />
      </button>

      <a
        href={lead.phone ? `tel:${lead.phone}` : undefined}
        onClick={(e) => {
          if (!lead.phone) e.preventDefault();
        }}
        className={`${actionButton} hover:border-emerald-600 hover:bg-emerald-600`}
        title="Call"
        aria-label={`Call ${lead.name || lead.fullName || "lead"}`}
      >
        <Phone size={15} />
      </a>
    </div>
  );

  const LeadQuality = ({ lead }) => (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-bold ${qualityClass(
          lead.quality
        )}`}
      >
        {lead.quality || "WARM"}
      </span>

      {lead.markedColdBy && (
        <span className="text-[10px] text-stone-500">
          Cold by: {lead.markedColdBy}
        </span>
      )}
    </div>
  );

  const ModalShell = ({ children, onClose, maxWidth = "max-w-2xl" }) => (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-3 backdrop-blur-md sm:p-5"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className={`my-auto w-full ${maxWidth} max-h-[92dvh] overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-[#1a1a17] p-4 shadow-2xl sm:rounded-3xl sm:p-6`}
      >
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-w-0 space-y-5 font-sans text-white sm:space-y-6">
      {/* HEADER AND RESPONSIVE FILTERS */}
      <div className="flex min-w-0 flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div className="min-w-0">
          <h2 className="break-words font-serif text-xl text-white sm:text-2xl">
            {type === "contact"
              ? "Contact Form Enquiries"
              : "Free Site Visit Requests"}
          </h2>

          <p className="mt-1.5 text-xs leading-relaxed text-stone-400 sm:text-sm">
            Click on a client name to view complete discussion history.
          </p>
        </div>

        <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_170px] xl:max-w-2xl">
          <div className="relative min-w-0">
            <Search
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone-500"
            />

            <input
              type="search"
              placeholder="Search by name or phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`${inputClass} pl-9`}
              aria-label="Search leads by name or phone"
            />
          </div>

          <select
            value={filterQuality}
            onChange={(e) => setFilterQuality(e.target.value)}
            className={selectClass}
            aria-label="Filter leads by quality"
          >
            <option value="ALL">All Qualities</option>
            <option value="HOT">Hot Leads</option>
            <option value="WARM">Warm Leads</option>
            <option value="COLD">Cold Leads</option>
          </select>
        </div>
      </div>

      {/* RESULTS COUNT */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-400">
        <span>
          {filteredLeads.length}{" "}
          {filteredLeads.length === 1 ? "lead" : "leads"} found
        </span>

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="rounded-lg px-2 py-1 text-[#e45b69] hover:bg-white/5"
          >
            Clear search
          </button>
        )}
      </div>

      {/* DESKTOP TABLE: TABLET AND MOBILE USE CARDS BELOW */}
      <div className="hidden overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a17] shadow-xl lg:block">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-[10px] uppercase tracking-wider text-stone-400">
                <th className="p-4">Client Name</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Assigned Employee</th>
                <th className="p-4">Quality</th>
                <th className="p-4">Follow-Up</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/5">
              {filteredLeads.map((lead) => (
                <tr
                  key={lead._id}
                  className="transition-colors hover:bg-white/[0.02]"
                >
                  <td className="p-4 font-medium text-white">
                    <button
                      type="button"
                      onClick={() => setViewDetailsLead(lead)}
                      className="flex items-center gap-2 text-left underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#e45b69]"
                      title="View full lead history"
                    >
                      <Eye size={14} className="shrink-0 text-[#c51f32]" />
                      <span className="break-words">
                        {lead.name || lead.fullName || "Unnamed Client"}
                      </span>
                    </button>
                  </td>

                  <td className="p-4 text-stone-300">
                    {lead.phone || "N/A"}
                  </td>

                  <td className="p-4 text-stone-400">
                    {lead.assignedTo?.name ||
                      "Unassigned (Super Admin Only)"}
                  </td>

                  <td className="p-4">
                    <LeadQuality lead={lead} />
                  </td>

                  <td className="p-4 text-stone-300">
                    {lead.followUpDate
                      ? `${lead.followUpDate} ${lead.followUpTime || ""}`
                      : "Not Scheduled"}
                  </td>

                  <td className="p-4">
                    <div className="flex justify-end">
                      <LeadActions lead={lead} />
                    </div>
                  </td>
                </tr>
              ))}

              {filteredLeads.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="p-10 text-center text-sm text-stone-500"
                  >
                    No leads found. Try changing your search or filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* TABLET AND MOBILE RESPONSIVE LEAD CARDS */}
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:gap-4 lg:hidden">
        {filteredLeads.map((lead) => (
          <article
            key={lead._id}
            className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a17] p-4 shadow-lg transition-colors hover:border-white/20 sm:p-5"
          >
            <div className="flex min-w-0 items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <button
                  type="button"
                  onClick={() => setViewDetailsLead(lead)}
                  className="flex max-w-full items-start gap-2 text-left font-medium leading-relaxed text-white underline decoration-white/20 underline-offset-4 hover:text-[#e45b69]"
                >
                  <Eye
                    size={15}
                    className="mt-1 shrink-0 text-[#c51f32]"
                  />
                  <span className="break-words">
                    {lead.name || lead.fullName || "Unnamed Client"}
                  </span>
                </button>

                <p className="mt-2 break-all text-sm text-stone-400">
                  {lead.phone || "Phone not available"}
                </p>
              </div>

              <LeadQuality lead={lead} />
            </div>

            <div className="my-4 border-t border-white/10" />

            <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="min-w-0">
                <p className="mb-1.5 text-[10px] uppercase tracking-wider text-stone-500">
                  Assigned Employee
                </p>
                <p className="break-words text-sm text-stone-300">
                  {lead.assignedTo?.name ||
                    "Unassigned (Super Admin Only)"}
                </p>
              </div>

              <div className="min-w-0">
                <p className="mb-1.5 text-[10px] uppercase tracking-wider text-stone-500">
                  Next Follow-Up
                </p>
                <p className="break-words text-sm text-stone-300">
                  {lead.followUpDate
                    ? `${lead.followUpDate} ${lead.followUpTime || ""}`
                    : "Not Scheduled"}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={() => setViewDetailsLead(lead)}
                className="inline-flex min-h-10 items-center gap-2 rounded-xl px-3 text-xs font-medium text-stone-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                <History size={15} />
                View History
              </button>

              <LeadActions lead={lead} />
            </div>
          </article>
        ))}

        {filteredLeads.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-[#1a1a17] px-4 py-12 text-center">
            <Search
              size={24}
              className="mx-auto mb-3 text-stone-500"
            />
            <p className="text-sm font-medium text-stone-300">
              No leads found
            </p>
            <p className="mt-1 text-xs text-stone-500">
              Try changing your search or quality filter.
            </p>
          </div>
        )}
      </div>

      {/* VIEW DETAILS AND DISCUSSION HISTORY MODAL */}
      {viewDetailsLead && (
        <ModalShell
          onClose={() => setViewDetailsLead(null)}
          maxWidth="max-w-2xl"
        >
          <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
            <div className="min-w-0">
              <h3 className="break-words font-serif text-xl text-white sm:text-2xl">
                {viewDetailsLead.name ||
                  viewDetailsLead.fullName ||
                  "Unnamed Client"}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-stone-400">
                Website Submission Details & Complete Discussion History
              </p>
            </div>

            <button
              type="button"
              onClick={() => setViewDetailsLead(null)}
              className={actionButton}
              aria-label="Close lead details"
            >
              <X size={17} />
            </button>
          </div>

          <div className="mt-5 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Phone", viewDetailsLead.phone || "N/A"],
              ["Email", viewDetailsLead.email || "N/A"],
              [
                "Project Type",
                viewDetailsLead.projectType ||
                  viewDetailsLead.propertyType ||
                  "General Enquiry",
              ],
            ].map(([label, value]) => (
              <div
                key={label}
                className="min-w-0 rounded-xl border border-white/5 bg-[#121210] p-3"
              >
                <span className="mb-1 block text-[10px] uppercase tracking-wider text-stone-500">
                  {label}
                </span>
                <span className="break-words text-sm font-medium text-white">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-white/5 bg-[#121210] p-4">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-[#e45b69]">
              Client Website Message
            </span>
            <p className="break-words text-sm leading-relaxed text-stone-300">
              {viewDetailsLead.message ||
                viewDetailsLead.plotDetails ||
                "No message attached."}
            </p>
          </div>

          <div className="mt-5 space-y-3">
            <h4 className="flex items-start gap-2 text-xs font-bold uppercase leading-relaxed tracking-wider text-stone-300">
              <History
                size={16}
                className="mt-0.5 shrink-0 text-[#c51f32]"
              />
              Conversation & Follow-Up History
            </h4>

            <div className="max-h-64 space-y-3 overflow-y-auto overscroll-contain pr-1">
              {viewDetailsLead.comments?.length > 0 ? (
                viewDetailsLead.comments.map((comment, index) => (
                  <div
                    key={comment._id || index}
                    className="space-y-2 rounded-xl border border-white/10 bg-[#121210] p-3"
                  >
                    <div className="flex flex-col gap-1 text-[10px] text-stone-400 sm:flex-row sm:items-start sm:justify-between">
                      <span className="font-bold text-stone-200">
                        {comment.author || "Employee"}
                      </span>
                      <span className="break-words">
                        {comment.createdAt
                          ? new Date(comment.createdAt).toLocaleString()
                          : ""}
                      </span>
                    </div>

                    {comment.tag && (
                      <span className="inline-block max-w-full break-words rounded-md bg-[#c51f32]/15 px-2 py-1 text-[10px] font-semibold text-[#e45b69]">
                        {comment.tag}
                      </span>
                    )}

                    <p className="whitespace-pre-wrap break-words text-sm leading-relaxed text-stone-300">
                      {comment.text}
                    </p>
                  </div>
                ))
              ) : (
                <p className="rounded-xl border border-white/5 bg-[#121210] p-4 text-sm text-stone-500">
                  No comments or updates recorded yet.
                </p>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setViewDetailsLead(null)}
            className="mt-5 min-h-12 w-full rounded-xl bg-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/20"
          >
            Close Details
          </button>
        </ModalShell>
      )}

      {/* UPDATE LEAD AND ADD COMMENT MODAL */}
      {selectedLead && (
        <ModalShell
          onClose={() => setSelectedLead(null)}
          maxWidth="max-w-lg"
        >
          <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
            <div className="min-w-0">
              <p className="mb-1 text-[10px] uppercase tracking-wider text-[#e45b69]">
                Manage Lead
              </p>
              <h3 className="break-words font-serif text-xl text-white">
                {selectedLead.name ||
                  selectedLead.fullName ||
                  "Unnamed Client"}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setSelectedLead(null)}
              className={actionButton}
              aria-label="Close edit lead form"
            >
              <X size={16} />
            </button>
          </div>

          <form
            onSubmit={handleUpdateLead}
            className="mt-5 space-y-5 text-sm"
          >
            {isSuperAdmin && (
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#e45b69]">
                  Assign Lead To Employee
                </label>

                <select
                  value={assignedTo}
                  onChange={(e) => setAssignedTo(e.target.value)}
                  className={selectClass}
                >
                  <option value="">
                    Unassigned (Super Admin Only)
                  </option>
                  {teamMembers.map((member) => (
                    <option key={member._id} value={member._id}>
                      {member.name} ({member.email})
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="space-y-3">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">
                Add New Discussion Comment
              </label>

              <select
                value={commentTag}
                onChange={(e) => setCommentTag(e.target.value)}
                className={selectClass}
              >
                <option value="">Select Call Outcome Tag</option>
                <option value="Not able to reach customer">
                  Not able to reach customer
                </option>
                <option value="Call Back Requested">
                  Call Back Requested
                </option>
                <option value="Budget Discussion Done">
                  Budget Discussion Done
                </option>
                <option value="Site Visit Confirmed">
                  Site Visit Confirmed
                </option>
              </select>

              <textarea
                rows={4}
                placeholder="Type discussion details..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className={`${inputClass} resize-y`}
              />
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  Mark Lead Quality
                </label>

                {quality === "COLD" && (
                  <label className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-lg border border-rose-500/20 bg-rose-500/10 px-3 py-2 text-xs text-rose-400">
                    <input
                      type="checkbox"
                      checked={noFollowUp}
                      onChange={(e) =>
                        setNoFollowUp(e.target.checked)
                      }
                      className="h-4 w-4 accent-[#c51f32]"
                    />
                    Don't add follow-up
                  </label>
                )}
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {["HOT", "WARM", "COLD"].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setQuality(value);
                      if (value !== "COLD") setNoFollowUp(false);
                    }}
                    aria-pressed={quality === value}
                    className={`min-h-12 rounded-xl border px-2 py-3 text-xs font-bold transition-colors ${
                      quality === value
                        ? value === "HOT"
                          ? "border-emerald-500 bg-emerald-500/15 text-emerald-400"
                          : value === "WARM"
                            ? "border-amber-500 bg-amber-500/15 text-amber-400"
                            : "border-rose-500 bg-rose-500/15 text-rose-400"
                        : "border-white/10 bg-[#121210] text-stone-400 hover:border-white/25"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>

              {quality === "COLD" && !isSuperAdmin && (
                <p className="flex items-start gap-2 text-xs leading-relaxed text-amber-400">
                  <AlertTriangle
                    size={15}
                    className="mt-0.5 shrink-0"
                  />
                  Requires at least 2 prior updates. Marking COLD will
                  hand over lead to Super Admin.
                </p>
              )}
            </div>

            {!(quality === "COLD" && noFollowUp) && (
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  Add Next Follow-Up
                </label>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="min-w-0 space-y-1">
                    <label
                      htmlFor="lead-follow-up-date"
                      className="text-xs text-stone-500"
                    >
                      Date
                    </label>
                    <input
                      id="lead-follow-up-date"
                      type="date"
                      value={followUpDate}
                      onChange={(e) => setFollowUpDate(e.target.value)}
                      className={`${inputClass} [color-scheme:dark]`}
                    />
                  </div>

                  <div className="min-w-0 space-y-1">
                    <label
                      htmlFor="lead-follow-up-time"
                      className="text-xs text-stone-500"
                    >
                      Time
                    </label>
                    <input
                      id="lead-follow-up-time"
                      type="time"
                      value={followUpTime}
                      onChange={(e) => setFollowUpTime(e.target.value)}
                      className={`${inputClass} [color-scheme:dark]`}
                    />
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="min-h-12 w-full rounded-xl bg-[#c51f32] px-4 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-[#a51828] focus:outline-none focus:ring-2 focus:ring-[#c51f32]/60"
            >
              Save & Update Lead
            </button>
          </form>
        </ModalShell>
      )}
    </div>
  );
}
