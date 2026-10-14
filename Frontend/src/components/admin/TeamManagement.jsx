import React, { useState, useEffect } from "react";
import { UserPlus, Users, Trash2, Edit, Mail, Phone, X, Eye } from "lucide-react";

export default function TeamManagement() {
  const [teamList, setTeamList] = useState([]);
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "",
    password: "", 
    role: "employee",
    status: "active",
    permissions: { contactLeads: true, siteVisits: true, newsletters: false }
  });
  const [editingUserId, setEditingUserId] = useState(null);
  const [selectedProfileUser, setSelectedProfileUser] = useState(null);
  const [statusMsg, setStatusMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const token = localStorage.getItem("token");
      const res = await fetch(`${api.replace(/\/$/, "")}/admin/users`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok) setTeamList(data.users || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveEmployee = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    try {
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const token = localStorage.getItem("token");
      
      const endpoint = editingUserId 
        ? `${api.replace(/\/$/, "")}/admin/users/${editingUserId}`
        : `${api.replace(/\/$/, "")}/admin/create-user`;

      const method = editingUserId ? "PUT" : "POST";

      const res = await fetch(endpoint, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });

      const textRes = await res.text();
      let data;
      try {
        data = JSON.parse(textRes);
      } catch (err) {
        throw new Error(`Server returned non-JSON response: ${textRes.slice(0, 100)}`);
      }

      if (!res.ok) throw new Error(data.message || "Operation failed");

      setStatusMsg(editingUserId ? "success:Employee profile updated successfully!" : "success:Employee created successfully!");
      setForm({ 
        name: "", 
        email: "", 
        phone: "",
        password: "", 
        role: "employee",
        status: "active",
        permissions: { contactLeads: true, siteVisits: true, newsletters: false }
      });
      setEditingUserId(null);
      fetchTeamMembers();
    } catch (err) {
      setStatusMsg(`error:${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (u) => {
    setEditingUserId(u._id);
    setForm({
      name: u.name || "",
      email: u.email || "",
      phone: u.phone || "",
      password: "", 
      role: u.role || "employee",
      status: u.status || "active",
      permissions: u.permissions || { contactLeads: true, siteVisits: true, newsletters: false }
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    try {
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const token = localStorage.getItem("token");
      const res = await fetch(`${api.replace(/\/$/, "")}/admin/users/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) fetchTeamMembers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto font-sans text-white">
      <div>
        <h2 className="text-xl font-serif">Super Admin: Team & Profile Management</h2>
        <p className="text-xs text-stone-400 mt-1">Manage employee accounts, active/deactive status, mobile numbers, and reset passwords.</p>
      </div>

      {/* CREATE OR EDIT EMPLOYEE FORM */}
      <div className="bg-[#1a1a17] border border-white/10 p-8 rounded-3xl shadow-xl space-y-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c51f32] flex items-center gap-2">
          <UserPlus size={16} /> {editingUserId ? "Edit Employee Profile & Permissions" : "Create New Team Account"}
        </h3>

        {statusMsg && (
          <div className={`p-3 text-xs rounded-xl ${statusMsg.startsWith("error:") ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-green-500/20 text-green-400 border border-green-500/30"}`}>
            {statusMsg.slice(statusMsg.indexOf(":") + 1)}
          </div>
        )}

        <form onSubmit={handleSaveEmployee} className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1">Full Name *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Rahul Sharma"
              className="w-full bg-[#121210] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#c51f32]"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1">Email Address *</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="employee@desig9hause.com"
              className="w-full bg-[#121210] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#c51f32]"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1">Mobile Number</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+91 9876543210"
              className="w-full bg-[#121210] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#c51f32]"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1">
              {editingUserId ? "Reset Password (Leave blank to keep current)" : "Password *"}
            </label>
            <input
              type="password"
              required={!editingUserId}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              className="w-full bg-[#121210] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#c51f32]"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1">Role *</label>
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full bg-[#121210] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#c51f32] cursor-pointer"
            >
              <option value="employee">Employee / CRM Executive</option>
              <option value="admin">Manager</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1">Account Status *</label>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full bg-[#121210] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#c51f32] cursor-pointer"
            >
              <option value="active">Active (Can Login)</option>
              <option value="deactive">Deactive (Blocked)</option>
            </select>
          </div>

          {/* PERMISSIONS CHECKBOXES */}
          <div className="md:col-span-2 pt-2 border-t border-white/10 space-y-2">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#c51f32]">
              Section Access Permissions:
            </label>
            <div className="grid grid-cols-3 gap-4 text-xs text-stone-300">
              <label className="flex items-center gap-2 cursor-pointer bg-[#121210] p-3 rounded-xl border border-white/10">
                <input
                  type="checkbox"
                  checked={form.permissions.contactLeads}
                  onChange={(e) => setForm({
                    ...form,
                    permissions: { ...form.permissions, contactLeads: e.target.checked }
                  })}
                  className="accent-[#c51f32]"
                />
                Contact Leads
              </label>

              <label className="flex items-center gap-2 cursor-pointer bg-[#121210] p-3 rounded-xl border border-white/10">
                <input
                  type="checkbox"
                  checked={form.permissions.siteVisits}
                  onChange={(e) => setForm({
                    ...form,
                    permissions: { ...form.permissions, siteVisits: e.target.checked }
                  })}
                  className="accent-[#c51f32]"
                />
                Site Visits
              </label>

              <label className="flex items-center gap-2 cursor-pointer bg-[#121210] p-3 rounded-xl border border-white/10">
                <input
                  type="checkbox"
                  checked={form.permissions.newsletters}
                  onChange={(e) => setForm({
                    ...form,
                    permissions: { ...form.permissions, newsletters: e.target.checked }
                  })}
                  className="accent-[#c51f32]"
                />
                Newsletters
              </label>
            </div>
          </div>

          <div className="md:col-span-2 pt-3 flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3.5 rounded-xl bg-[#c51f32] hover:bg-[#a71929] text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-lg cursor-pointer"
            >
              {loading ? "Saving..." : editingUserId ? "Update Employee Profile" : "Create Account & Grant Access"}
            </button>
            {editingUserId && (
              <button
                type="button"
                onClick={() => {
                  setEditingUserId(null);
                  setForm({ 
                    name: "", email: "", phone: "", password: "", role: "employee", status: "active",
                    permissions: { contactLeads: true, siteVisits: true, newsletters: false }
                  });
                }}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase cursor-pointer"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* TEAM MEMBERS LIST TABLE */}
      <div className="bg-[#1a1a17] border border-white/10 rounded-3xl overflow-hidden shadow-xl p-6 space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300 flex items-center gap-2">
          <Users size={16} /> Registered Team Members (Click name to view profile)
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-white/10 text-stone-400 uppercase tracking-wider text-[10px]">
                <th className="p-3">Name</th>
                <th className="p-3">Email & Phone</th>
                <th className="p-3">Role & Status</th>
                <th className="p-3">Access Permissions</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {teamList.map((u) => (
                <tr key={u._id} className="hover:bg-white/[0.02]">
                  <td className="p-3 font-medium text-white">
                    <button
                      onClick={() => setSelectedProfileUser(u)}
                      className="hover:text-[#c51f32] underline font-bold flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <Eye size={13} className="text-[#c51f32]" />
                      {u.name}
                    </button>
                  </td>
                  <td className="p-3 text-stone-300">
                    <div className="text-white">{u.email}</div>
                    <div className="text-[10px] text-stone-400">{u.phone || "No phone added"}</div>
                  </td>
                  <td className="p-3">
                    <div className="uppercase text-[10px] font-bold text-yellow-400">{u.role}</div>
                    <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase mt-1 ${
                      u.status === "deactive" ? "bg-red-500/20 text-red-400" : "bg-emerald-500/20 text-emerald-400"
                    }`}>
                      {u.status || "active"}
                    </span>
                  </td>
                  <td className="p-3 text-[10px] text-stone-400">
                    {u.role === "superadmin" ? "FULL ACCESS" : (
                      <>
                        {u.permissions?.contactLeads && "Contact | "}
                        {u.permissions?.siteVisits && "Visits | "}
                        {u.permissions?.newsletters && "Newsletters"}
                      </>
                    )}
                  </td>
                  <td className="p-3 text-right space-x-2">
                    {u.role !== "superadmin" && (
                      <>
                        <button
                          onClick={() => handleEditClick(u)}
                          className="p-1.5 bg-white/5 hover:bg-amber-500/20 text-stone-400 hover:text-amber-400 rounded-lg cursor-pointer inline-block"
                        >
                          <Edit size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(u._id)}
                          className="p-1.5 bg-white/5 hover:bg-red-500/20 text-stone-400 hover:text-red-400 rounded-lg cursor-pointer inline-block"
                        >
                          <Trash2 size={14} />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PROFILE MODAL */}
      {selectedProfileUser && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a17] border border-white/10 rounded-3xl w-full max-w-md p-6 space-y-6 shadow-2xl">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-serif text-white">{selectedProfileUser.name}</h3>
                <p className="text-xs text-stone-400">Employee Detailed Profile Card</p>
              </div>
              <button onClick={() => setSelectedProfileUser(null)} className="p-1 rounded-full bg-white/10 text-stone-400 hover:text-white cursor-pointer">
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-[#121210] p-3 rounded-xl border border-white/5 flex items-center gap-3">
                <Mail className="text-[#c51f32]" size={16} />
                <div>
                  <span className="text-[10px] uppercase text-stone-500 block">Email Address</span>
                  <span className="text-white font-medium">{selectedProfileUser.email}</span>
                </div>
              </div>

              <div className="bg-[#121210] p-3 rounded-xl border border-white/5 flex items-center gap-3">
                <Phone className="text-emerald-400" size={16} />
                <div>
                  <span className="text-[10px] uppercase text-stone-500 block">Mobile Number</span>
                  <span className="text-white font-medium">{selectedProfileUser.phone || "Not provided"}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedProfileUser(null)}
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase cursor-pointer"
            >
              Close Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}