import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, FileText, Calendar, LogOut, ShieldAlert } from "lucide-react";

export default function AdminLayout() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("adminUser") || "{}");
  const isSuperAdmin = user.role === "superadmin";

  // Check permissions properly
  const perms = user.permissions || { contactLeads: true, siteVisits: true, newsletters: false };
  const canContact = isSuperAdmin || perms.contactLeads !== false;
  const canVisits = isSuperAdmin || perms.siteVisits !== false;
  const canNewsletters = isSuperAdmin || perms.newsletters === true;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#121210] text-[#fbfaf7] flex font-sans">
      <aside className="w-64 bg-[#1a1a17] border-r border-white/10 flex flex-col justify-between">
        <div>
          <div className="p-6 border-b border-white/10">
            <h2 className="text-sm font-serif uppercase tracking-widest text-[#c51f32]">DESIG9 HAUSE</h2>
            <p className="text-[10px] text-stone-400 mt-0.5">Architecture & Interior CRM</p>
          </div>

          {/* DYNAMIC SIDEBAR LINKS BASED ON PERMISSIONS */}
          <nav className="p-4 space-y-2 text-xs">
            <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-stone-300 hover:text-white transition-colors">
              <LayoutDashboard size={16} /> Dashboard
            </Link>

            {canContact && (
              <Link to="/admin/contact-leads" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-stone-300 hover:text-white transition-colors">
                <FileText size={16} /> Contact Leads
              </Link>
            )}

            {canVisits && (
              <Link to="/admin/site-visits" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-stone-300 hover:text-white transition-colors">
                <Calendar size={16} /> Site Visits
              </Link>
            )}

            {canNewsletters && (
              <Link to="/admin/newsletters" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-stone-300 hover:text-white transition-colors">
                <Users size={16} /> Newsletters
              </Link>
            )}
            
            {isSuperAdmin && (
              <Link to="/admin/team" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-stone-300 hover:text-white transition-colors border-t border-white/5 mt-4">
                <ShieldAlert size={16} className="text-[#c51f32]" /> Manage Team
              </Link>
            )}
          </nav>
        </div>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold">{user.name || "User"}</p>
              <p className="text-[10px] text-stone-500 uppercase">{user.role || "Employee"}</p>
            </div>
            <button onClick={handleLogout} className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-stone-400 hover:text-red-400 transition-colors cursor-pointer" title="Logout">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-16 border-b border-white/10 px-8 flex items-center justify-between bg-[#1a1a17]/50 backdrop-blur">
          <h1 className="text-xs uppercase tracking-widest text-stone-400">Control Center & Lead Management</h1>
          <div className="text-xs text-stone-400 font-mono">
            Logged in as: <span className="text-[#c51f32] uppercase font-bold">{user.role}</span>
          </div>
        </header>
        <div className="p-8 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}