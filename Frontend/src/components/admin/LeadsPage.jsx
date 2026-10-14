import React, { useState, useEffect } from "react";
import { Search, Phone, Edit3, X, Eye, History, AlertTriangle } from "lucide-react";

export default function LeadsPage({ type = "contact" }) {
  const [leads, setLeads] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null); // Edit Modal
  const [viewDetailsLead, setViewDetailsLead] = useState(null); // History View Modal
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
      const endpoint = type === "contact" ? "/enquiries" : "/site-visits";
      const res = await fetch(`${api.replace(/\/$/, "")}${endpoint}`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
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
      const res = await fetch(`${api.replace(/\/$/, "")}/admin/users`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      const data = await res.json();
      setTeamMembers(data.users || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateLead = async (e) => {
    e.preventDefault();
    if (!selectedLead) return;

    try {
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const token = localStorage.getItem("token");
      const endpoint = type === "contact" ? `/enquiries/${selectedLead._id}` : `/site-visits/${selectedLead._id}`;

      const res = await fetch(`${api.replace(/\/$/, "")}${endpoint}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          quality,
          commentTag,
          newComment,
          assignedTo,
          followUpDate: (quality === "COLD" && noFollowUp) ? "" : followUpDate,
          followUpTime: (quality === "COLD" && noFollowUp) ? "" : followUpTime
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Update failed");

      alert("Lead updated successfully!");
      setSelectedLead(null);
      setNewComment("");
      setCommentTag("");
      fetchLeads();
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  const filteredLeads = leads.filter(lead => {
    const name = lead.name || lead.fullName || "";
    const phone = lead.phone || "";
    return (name.toLowerCase().includes(search.toLowerCase()) || phone.includes(search)) &&
           (filterQuality === "ALL" || lead.quality === filterQuality);
  });

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-serif capitalize text-white">{type === "contact" ? "Contact Form Enquiries" : "Free Site Visit Requests"}</h2>
          <p className="text-xs text-stone-400 mt-1">Click on client name to view complete discussion history.</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search by name or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#1a1a17] border border-white/10 rounded-xl px-4 py-2 text-xs outline-none text-white focus:border-[#c51f32]"
          />
          <select
            value={filterQuality}
            onChange={(e) => setFilterQuality(e.target.value)}
            className="bg-[#1a1a17] border border-white/10 rounded-xl px-4 py-2 text-xs outline-none text-white cursor-pointer"
          >
            <option value="ALL">All Qualities</option>
            <option value="HOT">Hot Leads</option>
            <option value="WARM">Warm Leads</option>
            <option value="COLD">Cold Leads</option>
          </select>
        </div>
      </div>

      <div className="bg-[#1a1a17] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-white/10 text-stone-400 uppercase tracking-wider text-[10px]">
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
              <tr key={lead._id} className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-medium text-white">
                  <button
                    onClick={() => setViewDetailsLead(lead)}
                    className="hover:text-[#c51f32] underline text-left flex items-center gap-1.5 cursor-pointer"
                    title="Click to view full lead history"
                  >
                    <Eye size={13} className="text-[#c51f32]" />
                    {lead.name || lead.fullName}
                  </button>
                </td>
                <td className="p-4 text-stone-300">{lead.phone}</td>
                <td className="p-4 text-stone-400 font-semibold">
                  {lead.assignedTo?.name || "Unassigned (Super Admin Only)"}
                </td>
                <td className="p-4 font-bold">
                  {/* Transparent Color Rules */}
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
                    lead.quality === "HOT" ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40" :
                    lead.quality === "COLD" ? "bg-rose-500/20 text-rose-400 border-rose-500/40" : 
                    "bg-amber-500/20 text-amber-400 border-amber-500/40"
                  }`}>
                    {lead.quality || "WARM"}
                  </span>
                  {lead.markedColdBy && (
                    <span className="block text-[9px] text-stone-500 mt-1 font-normal">
                      Cold by: {lead.markedColdBy}
                    </span>
                  )}
                </td>
                <td className="p-4 text-stone-300">{lead.followUpDate ? `${lead.followUpDate} ${lead.followUpTime || ""}` : "Not Scheduled"}</td>
                <td className="p-4 text-right space-x-2">
                  <button
                    onClick={() => {
                      setSelectedLead(lead);
                      setQuality(lead.quality || "WARM");
                      setAssignedTo(lead.assignedTo?._id || "");
                      setFollowUpDate(lead.followUpDate || "");
                      setFollowUpTime(lead.followUpTime || "");
                      setNoFollowUp(false);
                    }}
                    className="p-2 bg-white/5 hover:bg-[#c51f32] rounded-lg text-white transition-colors cursor-pointer"
                    title="Update Lead / Add Comment"
                  >
                    <Edit3 size={14} />
                  </button>
                  <a href={`tel:${lead.phone}`} className="p-2 bg-white/5 hover:bg-green-600 rounded-lg text-white inline-block transition-colors" title="Call">
                    <Phone size={14} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 1. VIEW LEAD DETAILS & FULL HISTORY MODAL */}
      {viewDetailsLead && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a17] border border-white/10 rounded-3xl w-full max-w-2xl p-6 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-serif text-white">{viewDetailsLead.name || viewDetailsLead.fullName}</h3>
                <p className="text-xs text-stone-400">Website Submission Details & Complete Discussion History</p>
              </div>
              <button onClick={() => setViewDetailsLead(null)} className="p-1 rounded-full bg-white/10 text-stone-400 hover:text-white cursor-pointer">
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-[#121210] p-3 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase text-stone-500 block">Phone</span>
                <span className="text-white font-medium">{viewDetailsLead.phone || "N/A"}</span>
              </div>
              <div className="bg-[#121210] p-3 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase text-stone-500 block">Email</span>
                <span className="text-white font-medium">{viewDetailsLead.email || "N/A"}</span>
              </div>
              <div className="bg-[#121210] p-3 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase text-stone-500 block">Project Type</span>
                <span className="text-white font-medium">{viewDetailsLead.projectType || viewDetailsLead.propertyType || "General Enquiry"}</span>
              </div>
            </div>

            <div className="bg-[#121210] p-4 rounded-xl border border-white/5 text-xs space-y-1">
              <span className="text-[10px] uppercase text-[#c51f32] font-bold block">Client Website Message:</span>
              <p className="text-stone-300 leading-relaxed italic">{viewDetailsLead.message || viewDetailsLead.plotDetails || "No message attached."}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300 flex items-center gap-2">
                <History size={14} className="text-[#c51f32]" /> Conversation & Follow-up History Timeline
              </h4>

              <div className="space-y-2.5 max-h-52 overflow-y-auto pr-1">
                {viewDetailsLead.comments && viewDetailsLead.comments.length > 0 ? (
                  viewDetailsLead.comments.map((c, i) => (
                    <div key={i} className="bg-[#121210] p-3 rounded-xl border border-white/10 text-xs space-y-1">
                      <div className="flex justify-between items-center text-[10px] text-stone-400">
                        <span className="font-bold text-stone-200">{c.author || "Employee"}</span>
                        <span>{new Date(c.createdAt).toLocaleString()}</span>
                      </div>
                      {c.tag && <span className="inline-block px-2 py-0.5 rounded bg-[#c51f32]/20 text-[#c51f32] text-[10px] font-semibold">{c.tag}</span>}
                      <p className="text-stone-300">{c.text}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-stone-500 italic p-3 bg-[#121210] rounded-xl border border-white/5">No comments or updates recorded yet.</p>
                )}
              </div>
            </div>

            <button
              onClick={() => setViewDetailsLead(null)}
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </div>
      )}

      {/* 2. UPDATE LEAD MODAL WITH TRANSPARENT BUTTONS & CONDITIONAL CHECKBOX */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a17] border border-white/10 rounded-3xl w-full max-w-lg p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="text-lg font-serif text-white">{selectedLead.name || selectedLead.fullName}</h3>
              <button onClick={() => setSelectedLead(null)} className="p-1 text-stone-400 hover:text-white cursor-pointer"><X size={16} /></button>
            </div>

            <form onSubmit={handleUpdateLead} className="space-y-4 text-xs">
              {isSuperAdmin && (
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-[#c51f32] font-bold tracking-wider">Assign Lead To Employee</label>
                  <select
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                    className="w-full bg-[#121210] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none cursor-pointer"
                  >
                    <option value="">Unassigned (Super Admin Only)</option>
                    {teamMembers.map(m => (
                      <option key={m._id} value={m._id}>{m.name} ({m.email})</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] uppercase text-stone-400 tracking-wider">Add New Discussion Comment</label>
                <select
                  value={commentTag}
                  onChange={(e) => setCommentTag(e.target.value)}
                  className="w-full bg-[#121210] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-stone-200 outline-none cursor-pointer"
                >
                  <option value="">Select Call Outcome Tag</option>
                  <option value="Not able to reach customer">Not able to reach customer</option>
                  <option value="Call Back Requested">Call Back Requested</option>
                  <option value="Budget Discussion Done">Budget Discussion Done</option>
                  <option value="Site Visit Confirmed">Site Visit Confirmed</option>
                </select>

                <textarea
                  rows={3}
                  placeholder="Type discussion details..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full bg-[#121210] border border-white/15 rounded-xl p-3 text-xs text-stone-200 outline-none resize-none focus:border-[#c51f32]"
                />
              </div>

              {/* TRANSPARENT LEAD QUALITY BUTTONS */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] uppercase text-stone-400 tracking-wider">Mark Lead Quality</label>
                  
                  {/* DON'T FOLLOW-UP CHECKBOX (SIRF COLD PAR DIKHEGA) */}
                  {quality === "COLD" && (
                    <label className="text-[10px] text-rose-400 font-medium flex items-center gap-1.5 cursor-pointer bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-lg">
                      <input
                        type="checkbox"
                        checked={noFollowUp}
                        onChange={(e) => setNoFollowUp(e.target.checked)}
                        className="accent-[#c51f32] cursor-pointer"
                      />
                      Don't add follow-up
                    </label>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => { setQuality("HOT"); setNoFollowUp(false); }}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      quality === "HOT"
                        ? "bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-500/10"
                        : "bg-[#121210] border-white/10 text-stone-400 hover:border-emerald-500/40"
                    }`}
                  >
                    HOT
                  </button>

                  <button
                    type="button"
                    onClick={() => { setQuality("WARM"); setNoFollowUp(false); }}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      quality === "WARM"
                        ? "bg-amber-500/20 border-amber-500 text-amber-400 shadow-lg shadow-amber-500/10"
                        : "bg-[#121210] border-white/10 text-stone-400 hover:border-amber-500/40"
                    }`}
                  >
                    WARM
                  </button>

                  <button
                    type="button"
                    onClick={() => setQuality("COLD")}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      quality === "COLD"
                        ? "bg-rose-500/20 border-rose-500 text-rose-400 shadow-lg shadow-rose-500/10"
                        : "bg-[#121210] border-white/10 text-stone-400 hover:border-rose-500/40"
                    }`}
                  >
                    COLD
                  </button>
                </div>

                {quality === "COLD" && !isSuperAdmin && (
                  <p className="text-[10px] text-amber-400 flex items-center gap-1 mt-1">
                    <AlertTriangle size={12} /> Requires at least 2 prior updates. Marking COLD will hand over lead to Super Admin.
                  </p>
                )}
              </div>

              {/* DATE AND TIME INPUTS WITH DARK THEME FORMATTING */}
              {!(quality === "COLD" && noFollowUp) && (
                <div className="space-y-1 pt-1">
                  <label className="text-[10px] uppercase text-stone-400 tracking-wider">Add Next Follow Up</label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="date"
                      value={followUpDate}
                      onChange={(e) => setFollowUpDate(e.target.value)}
                      className="bg-[#121210] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-stone-100 outline-none focus:border-[#c51f32] [color-scheme:dark]"
                    />
                    <input
                      type="time"
                      value={followUpTime}
                      onChange={(e) => setFollowUpTime(e.target.value)}
                      className="bg-[#121210] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-stone-100 outline-none focus:border-[#c51f32] [color-scheme:dark]"
                    />
                  </div>
                </div>
              )}

              <button type="submit" className="w-full py-3.5 rounded-xl bg-[#c51f32] hover:bg-[#a51828] text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-lg cursor-pointer">
                Save & Update Lead
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}