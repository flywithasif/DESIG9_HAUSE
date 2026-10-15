
import React, { useState, useEffect } from "react";
import {
  UserPlus,
  Users,
  Trash2,
  Edit,
  Mail,
  Phone,
  X,
  Eye,
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  password: "",
  role: "employee",
  status: "active",
  permissions: {
    contactLeads: true,
    siteVisits: true,
    newsletters: false,
  },
};

const getApiUrl = () =>
  (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

const getToken = () => localStorage.getItem("token");

const getPermissions = (permissions = {}) => ({
  contactLeads: permissions.contactLeads ?? true,
  siteVisits: permissions.siteVisits ?? true,
  newsletters: permissions.newsletters ?? false,
});

export default function TeamManagement() {
  const [teamList, setTeamList] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingUserId, setEditingUserId] = useState(null);
  const [selectedProfileUser, setSelectedProfileUser] = useState(null);
  const [statusMsg, setStatusMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const res = await fetch(`${getApiUrl()}/admin/users`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        setTeamList(data.users || []);
      } else {
        setStatusMsg(`error:${data.message || "Unable to load team members."}`);
      }
    } catch (err) {
      console.error(err);
      setStatusMsg("error:Unable to connect to the server.");
    }
  };

  const handleSaveEmployee = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    try {
      const endpoint = editingUserId
        ? `${getApiUrl()}/admin/users/${editingUserId}`
        : `${getApiUrl()}/admin/create-user`;

      const res = await fetch(endpoint, {
        method: editingUserId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(form),
      });

      const textRes = await res.text();
      let data;

      try {
        data = JSON.parse(textRes);
      } catch {
        throw new Error(
          `Server returned a non-JSON response: ${textRes.slice(0, 100)}`
        );
      }

      if (!res.ok) {
        throw new Error(data.message || "Operation failed.");
      }

      setStatusMsg(
        editingUserId
          ? "success:Employee profile updated successfully!"
          : "success:Employee created successfully!"
      );

      setForm({ ...initialForm, permissions: { ...initialForm.permissions } });
      setEditingUserId(null);

      await fetchTeamMembers();
    } catch (err) {
      setStatusMsg(`error:${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (user) => {
    setEditingUserId(user._id);

    setForm({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      password: "",
      role: user.role || "employee",
      status: user.status || "active",
      permissions: getPermissions(user.permissions),
    });

    setStatusMsg("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
    setForm({ ...initialForm, permissions: { ...initialForm.permissions } });
    setStatusMsg("");
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) {
      return;
    }

    try {
      const res = await fetch(`${getApiUrl()}/admin/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || "Unable to delete employee.");
      }

      if (selectedProfileUser?._id === id) {
        setSelectedProfileUser(null);
      }

      setStatusMsg("success:Employee deleted successfully!");
      await fetchTeamMembers();
    } catch (err) {
      console.error(err);
      setStatusMsg(`error:${err.message}`);
    }
  };

  const updatePermission = (permission, checked) => {
    setForm((current) => ({
      ...current,
      permissions: {
        ...current.permissions,
        [permission]: checked,
      },
    }));
  };

  const getPermissionLabels = (user) => {
    if (user.role === "superadmin") return "FULL ACCESS";

    const permissions = [];

    if (user.permissions?.contactLeads) permissions.push("Contact");
    if (user.permissions?.siteVisits) permissions.push("Visits");
    if (user.permissions?.newsletters) permissions.push("Newsletters");

    return permissions.length ? permissions.join(" | ") : "No permissions";
  };

  const renderActions = (user) => (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => setSelectedProfileUser(user)}
        aria-label={`View ${user.name}'s profile`}
        title="View profile"
        className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-stone-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c51f32]"
      >
        <Eye size={16} />
      </button>

      {user.role !== "superadmin" && (
        <>
          <button
            type="button"
            onClick={() => handleEditClick(user)}
            aria-label={`Edit ${user.name}`}
            title="Edit employee"
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-stone-300 transition-colors hover:bg-amber-500/20 hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <Edit size={16} />
          </button>

          <button
            type="button"
            onClick={() => handleDeleteUser(user._id)}
            aria-label={`Delete ${user.name}`}
            title="Delete employee"
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-stone-300 transition-colors hover:bg-red-500/20 hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            <Trash2 size={16} />
          </button>
        </>
      )}
    </div>
  );

  return (
    <div className="mx-auto w-full min-w-0 max-w-7xl space-y-6 overflow-x-clip font-sans text-white sm:space-y-8">
      {/* PAGE HEADER */}
      <div className="min-w-0">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#c51f32]/30 bg-[#c51f32]/10 text-[#e34b5c]">
            <Users size={21} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c51f32] sm:text-xs">
              Administration
            </p>

            <h2 className="font-serif text-xl leading-tight text-white sm:text-2xl lg:text-3xl">
              Team & Profile Management
            </h2>

            <p className="mt-2 max-w-2xl text-xs leading-5 text-stone-400 sm:text-sm sm:leading-6">
              Manage employee accounts, permissions, account status and profile
              information from one place.
            </p>
          </div>
        </div>
      </div>

      {/* CREATE / EDIT FORM */}
      <section className="min-w-0 rounded-2xl border border-white/10 bg-[#1a1a17] p-4 shadow-xl sm:rounded-3xl sm:p-6 lg:p-8">
        <div className="mb-6 flex items-start gap-3 border-b border-white/10 pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c51f32]/10 text-[#e34b5c]">
            <UserPlus size={19} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white sm:text-sm">
              {editingUserId
                ? "Edit Employee Profile & Permissions"
                : "Create New Team Account"}
            </h3>

            <p className="mt-1 text-xs leading-5 text-stone-400">
              {editingUserId
                ? "Update employee details and section access."
                : "Add a new team member and configure their access."}
            </p>
          </div>
        </div>

        {statusMsg && (
          <div
            role="status"
            aria-live="polite"
            className={`mb-5 break-words rounded-xl border p-3 text-xs leading-5 ${
              statusMsg.startsWith("error:")
                ? "border-red-500/30 bg-red-500/10 text-red-400"
                : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
            }`}
          >
            {statusMsg.slice(statusMsg.indexOf(":") + 1)}
          </div>
        )}

        <form onSubmit={handleSaveEmployee} className="space-y-6">
          {/* FORM FIELDS */}
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="min-w-0">
              <label
                htmlFor="team-name"
                className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-stone-400 sm:text-xs"
              >
                Full Name *
              </label>

              <input
                id="team-name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Rahul Sharma"
                className="w-full min-w-0 rounded-xl border border-white/15 bg-[#121210] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-stone-600 focus:border-[#c51f32] focus:ring-1 focus:ring-[#c51f32]/30"
              />
            </div>

            <div className="min-w-0">
              <label
                htmlFor="team-email"
                className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-stone-400 sm:text-xs"
              >
                Email Address *
              </label>

              <input
                id="team-email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="employee@desig9hause.com"
                className="w-full min-w-0 rounded-xl border border-white/15 bg-[#121210] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-stone-600 focus:border-[#c51f32] focus:ring-1 focus:ring-[#c51f32]/30"
              />
            </div>

            <div className="min-w-0">
              <label
                htmlFor="team-phone"
                className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-stone-400 sm:text-xs"
              >
                Mobile Number
              </label>

              <input
                id="team-phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                placeholder="+91 9876543210"
                className="w-full min-w-0 rounded-xl border border-white/15 bg-[#121210] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-stone-600 focus:border-[#c51f32] focus:ring-1 focus:ring-[#c51f32]/30"
              />
            </div>

            <div className="min-w-0">
              <label
                htmlFor="team-password"
                className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-stone-400 sm:text-xs"
              >
                {editingUserId
                  ? "Reset Password (Optional)"
                  : "Password *"}
              </label>

              <input
                id="team-password"
                type="password"
                required={!editingUserId}
                autoComplete={
                  editingUserId ? "new-password" : "new-password"
                }
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                placeholder={
                  editingUserId
                    ? "Leave blank to keep current"
                    : "Enter password"
                }
                className="w-full min-w-0 rounded-xl border border-white/15 bg-[#121210] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-stone-600 focus:border-[#c51f32] focus:ring-1 focus:ring-[#c51f32]/30"
              />
            </div>

            <div className="min-w-0">
              <label
                htmlFor="team-role"
                className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-stone-400 sm:text-xs"
              >
                Role *
              </label>

              <select
                id="team-role"
                value={form.role}
                onChange={(e) =>
                  setForm({ ...form, role: e.target.value })
                }
                className="w-full min-w-0 cursor-pointer rounded-xl border border-white/15 bg-[#121210] px-4 py-3 text-sm text-white outline-none focus:border-[#c51f32] focus:ring-1 focus:ring-[#c51f32]/30"
              >
                <option value="employee">Employee / CRM Executive</option>
                <option value="admin">Manager</option>
              </select>
            </div>

            <div className="min-w-0">
              <label
                htmlFor="team-status"
                className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-stone-400 sm:text-xs"
              >
                Account Status *
              </label>

              <select
                id="team-status"
                value={form.status}
                onChange={(e) =>
                  setForm({ ...form, status: e.target.value })
                }
                className="w-full min-w-0 cursor-pointer rounded-xl border border-white/15 bg-[#121210] px-4 py-3 text-sm text-white outline-none focus:border-[#c51f32] focus:ring-1 focus:ring-[#c51f32]/30"
              >
                <option value="active">Active (Can Login)</option>
                <option value="deactive">Deactive (Blocked)</option>
              </select>
            </div>
          </div>

          {/* PERMISSIONS */}
          <div className="min-w-0 space-y-3 border-t border-white/10 pt-5">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#e34b5c]">
                Section Access Permissions
              </h4>

              <p className="mt-1 text-xs leading-5 text-stone-500">
                Choose which sections this team member can access.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  key: "contactLeads",
                  title: "Contact Leads",
                  description: "Manage enquiries",
                },
                {
                  key: "siteVisits",
                  title: "Site Visits",
                  description: "Manage site visits",
                },
                {
                  key: "newsletters",
                  title: "Newsletters",
                  description: "Access newsletters",
                },
              ].map((permission) => (
                <label
                  key={permission.key}
                  className="flex min-w-0 cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#121210] p-3 transition-colors hover:border-white/20 sm:p-4"
                >
                  <input
                    type="checkbox"
                    checked={Boolean(form.permissions[permission.key])}
                    onChange={(e) =>
                      updatePermission(permission.key, e.target.checked)
                    }
                    className="h-4 w-4 shrink-0 cursor-pointer accent-[#c51f32]"
                  />

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium text-stone-200">
                      {permission.title}
                    </span>
                    <span className="mt-1 block text-[10px] leading-4 text-stone-500">
                      {permission.description}
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* FORM ACTIONS */}
          <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex min-h-12 w-full flex-1 items-center justify-center rounded-xl bg-[#c51f32] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-lg transition-colors hover:bg-[#a71929] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e34b5c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a17] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {loading
                ? "Saving..."
                : editingUserId
                  ? "Update Employee Profile"
                  : "Create Account & Grant Access"}
            </button>

            {editingUserId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                disabled={loading}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-stone-300 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-50 sm:w-auto"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      {/* REGISTERED TEAM MEMBERS */}
      <section className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a17] p-4 shadow-xl sm:rounded-3xl sm:p-6 lg:p-8">
        <div className="mb-5 flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-stone-300">
            <Users size={19} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white sm:text-sm">
              Registered Team Members
            </h3>

            <p className="mt-1 text-xs leading-5 text-stone-400">
              View profiles, edit accounts and manage team access.
            </p>
          </div>

          <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-stone-300">
            {teamList.length} members
          </span>
        </div>

        {teamList.length === 0 ? (
          <div className="rounded-xl border border-dashed border-white/10 px-4 py-10 text-center">
            <Users size={28} className="mx-auto mb-3 text-stone-600" />
            <p className="text-sm text-stone-300">No team members found.</p>
            <p className="mt-1 text-xs text-stone-500">
              Create a team account using the form above.
            </p>
          </div>
        ) : (
          <>
            {/* MOBILE AND TABLET CARDS */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:hidden">
              {teamList.map((user) => (
                <article
                  key={user._id}
                  className="min-w-0 rounded-2xl border border-white/10 bg-[#121210] p-4 transition-colors hover:border-white/20"
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c51f32]/30 bg-[#c51f32]/10 font-serif text-lg text-[#e34b5c]">
                      {(user.name || "?").charAt(0).toUpperCase()}
                    </div>

                    <div className="min-w-0 flex-1">
                      <button
                        type="button"
                        onClick={() => setSelectedProfileUser(user)}
                        className="break-words text-left text-sm font-semibold text-white transition-colors hover:text-[#e34b5c] focus-visible:outline-none focus-visible:underline"
                      >
                        {user.name || "Unnamed user"}
                      </button>

                      <p className="mt-1 break-all text-xs leading-5 text-stone-400">
                        {user.email}
                      </p>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-bold uppercase ${
                        user.status === "deactive"
                          ? "bg-red-500/10 text-red-400"
                          : "bg-emerald-500/10 text-emerald-400"
                      }`}
                    >
                      {user.status || "active"}
                    </span>
                  </div>

                  <div className="my-4 grid grid-cols-1 gap-3 border-y border-white/5 py-3 sm:grid-cols-2">
                    <div className="min-w-0">
                      <span className="mb-1 block text-[10px] uppercase tracking-wider text-stone-500">
                        Phone
                      </span>

                      <p className="break-words text-xs text-stone-300">
                        {user.phone || "No phone added"}
                      </p>
                    </div>

                    <div className="min-w-0">
                      <span className="mb-1 block text-[10px] uppercase tracking-wider text-stone-500">
                        Role
                      </span>

                      <p className="break-words text-xs font-semibold uppercase text-amber-400">
                        {user.role || "employee"}
                      </p>
                    </div>

                    <div className="min-w-0 sm:col-span-2">
                      <span className="mb-1 block text-[10px] uppercase tracking-wider text-stone-500">
                        Access Permissions
                      </span>

                      <p className="break-words text-xs leading-5 text-stone-300">
                        {getPermissionLabels(user)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] uppercase tracking-wider text-stone-500">
                      Account Actions
                    </span>

                    {renderActions(user)}
                  </div>
                </article>
              ))}
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden overflow-x-auto rounded-xl border border-white/10 lg:block">
              <table className="w-full min-w-[850px] border-collapse text-left text-xs">
                <thead className="bg-[#121210]">
                  <tr className="border-b border-white/10 text-[10px] uppercase tracking-wider text-stone-400">
                    <th scope="col" className="px-4 py-4 font-semibold">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-4 font-semibold">
                      Email & Phone
                    </th>
                    <th scope="col" className="px-4 py-4 font-semibold">
                      Role & Status
                    </th>
                    <th scope="col" className="px-4 py-4 font-semibold">
                      Access Permissions
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-4 text-right font-semibold"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/5">
                  {teamList.map((user) => (
                    <tr
                      key={user._id}
                      className="transition-colors hover:bg-white/[0.025]"
                    >
                      <td className="px-4 py-4 font-medium text-white">
                        <button
                          type="button"
                          onClick={() => setSelectedProfileUser(user)}
                          className="flex items-center gap-2 text-left transition-colors hover:text-[#e34b5c]"
                        >
                          <Eye
                            size={14}
                            className="shrink-0 text-[#c51f32]"
                          />
                          <span className="break-words">{user.name}</span>
                        </button>
                      </td>

                      <td className="max-w-[250px] px-4 py-4">
                        <p className="break-all text-white">{user.email}</p>
                        <p className="mt-1 break-words text-[10px] text-stone-400">
                          {user.phone || "No phone added"}
                        </p>
                      </td>

                      <td className="px-4 py-4">
                        <p className="mb-2 break-words text-[10px] font-bold uppercase text-amber-400">
                          {user.role}
                        </p>

                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-[9px] font-bold uppercase ${
                            user.status === "deactive"
                              ? "bg-red-500/10 text-red-400"
                              : "bg-emerald-500/10 text-emerald-400"
                          }`}
                        >
                          {user.status || "active"}
                        </span>
                      </td>

                      <td className="max-w-[200px] px-4 py-4 text-[10px] leading-5 text-stone-400">
                        <span className="break-words">
                          {getPermissionLabels(user)}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex justify-end">
                          {renderActions(user)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>

      {/* PROFILE MODAL */}
      {selectedProfileUser && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProfileUser(null);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-profile-title"
            className="my-auto w-full min-w-0 max-w-md space-y-5 rounded-t-3xl border border-white/10 bg-[#1a1a17] p-5 shadow-2xl sm:rounded-3xl sm:p-6"
          >
            <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
              <div className="min-w-0 flex-1">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e34b5c]">
                  Team Member Profile
                </p>

                <h3
                  id="team-profile-title"
                  className="break-words font-serif text-xl text-white sm:text-2xl"
                >
                  {selectedProfileUser.name}
                </h3>

                <p className="mt-1 text-xs text-stone-400">
                  Employee Detailed Profile
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProfileUser(null)}
                aria-label="Close profile"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-stone-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c51f32]"
              >
                <X size={19} />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex min-w-0 items-start gap-3 rounded-xl border border-white/5 bg-[#121210] p-3 sm:p-4">
                <Mail size={18} className="mt-0.5 shrink-0 text-[#e34b5c]" />

                <div className="min-w-0 flex-1">
                  <span className="mb-1 block text-[10px] uppercase tracking-wider text-stone-500">
                    Email Address
                  </span>

                  <p className="break-all text-sm leading-5 text-white">
                    {selectedProfileUser.email}
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-start gap-3 rounded-xl border border-white/5 bg-[#121210] p-3 sm:p-4">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />

                <div className="min-w-0 flex-1">
                  <span className="mb-1 block text-[10px] uppercase tracking-wider text-stone-500">
                    Mobile Number
                  </span>

                  <p className="break-words text-sm leading-5 text-white">
                    {selectedProfileUser.phone || "Not provided"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="min-w-0 rounded-xl border border-white/5 bg-[#121210] p-3">
                  <span className="mb-1 block text-[10px] uppercase tracking-wider text-stone-500">
                    Role
                  </span>

                  <p className="break-words text-xs font-semibold uppercase text-amber-400">
                    {selectedProfileUser.role || "employee"}
                  </p>
                </div>

                <div className="min-w-0 rounded-xl border border-white/5 bg-[#121210] p-3">
                  <span className="mb-1 block text-[10px] uppercase tracking-wider text-stone-500">
                    Status
                  </span>

                  <p
                    className={`break-words text-xs font-semibold uppercase ${
                      selectedProfileUser.status === "deactive"
                        ? "text-red-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {selectedProfileUser.status || "active"}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#121210] p-3 sm:p-4">
                <span className="mb-2 block text-[10px] uppercase tracking-wider text-stone-500">
                  Access Permissions
                </span>

                <p className="break-words text-xs leading-5 text-stone-300">
                  {getPermissionLabels(selectedProfileUser)}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedProfileUser(null)}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c51f32]"
            >
              Close Profile
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
