import React, { useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  Calendar,
  LogOut,
  ShieldAlert,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let user = {};
  try {
    user = JSON.parse(localStorage.getItem("adminUser") || "{}");
  } catch {
    user = {};
  }

  const isSuperAdmin = user.role === "superadmin";

  const perms = user.permissions || {
    contactLeads: true,
    siteVisits: true,
    newsletters: false,
  };

  const canContact = isSuperAdmin || perms.contactLeads !== false;
  const canVisits = isSuperAdmin || perms.siteVisits !== false;
  const canNewsletters = isSuperAdmin || perms.newsletters === true;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin/login");
  };

  const closeSidebar = () => setSidebarOpen(false);

  const navLinkClass = (path) => {
    const isActive =
      path === "/admin"
        ? location.pathname === "/admin"
        : location.pathname === path ||
          location.pathname.startsWith(`${path}/`);

    return `flex items-center gap-3 px-4 py-3 rounded-xl text-xs transition-all duration-200 ${
      isActive
        ? "bg-[#c51f32]/15 text-white border border-[#c51f32]/30"
        : "text-stone-300 hover:bg-white/5 hover:text-white border border-transparent"
    }`;
  };

  const sidebarContent = (
    <>
      <div>
        <div className="p-5 sm:p-6 border-b border-white/10">
          <Link
            to="/admin"
            onClick={closeSidebar}
            className="inline-block"
          >
            <h2 className="text-sm font-serif uppercase tracking-widest text-[#c51f32]">
              DESIG9 HAUSE
            </h2>
            <p className="text-[10px] text-stone-400 mt-1">
              Architecture & Interior CRM
            </p>
          </Link>
        </div>

        <nav className="p-3 sm:p-4 space-y-2">
          <Link
            to="/admin"
            onClick={closeSidebar}
            className={navLinkClass("/admin")}
          >
            <LayoutDashboard size={17} className="shrink-0" />
            <span>Dashboard</span>
          </Link>

          {canContact && (
            <Link
              to="/admin/contact-leads"
              onClick={closeSidebar}
              className={navLinkClass("/admin/contact-leads")}
            >
              <FileText size={17} className="shrink-0" />
              <span>Contact Leads</span>
            </Link>
          )}

          {canVisits && (
            <Link
              to="/admin/site-visits"
              onClick={closeSidebar}
              className={navLinkClass("/admin/site-visits")}
            >
              <Calendar size={17} className="shrink-0" />
              <span>Site Visits</span>
            </Link>
          )}

          {canNewsletters && (
            <Link
              to="/admin/newsletters"
              onClick={closeSidebar}
              className={navLinkClass("/admin/newsletters")}
            >
              <Users size={17} className="shrink-0" />
              <span>Newsletters</span>
            </Link>
          )}

          {isSuperAdmin && (
            <Link
              to="/admin/team"
              onClick={closeSidebar}
              className={`${navLinkClass("/admin/team")} mt-4 border-t border-white/10 pt-4`}
            >
              <ShieldAlert
                size={17}
                className="shrink-0 text-[#c51f32]"
              />
              <span>Manage Team</span>
            </Link>
          )}
        </nav>
      </div>

      <div className="p-4 border-t border-white/10 bg-black/10">
        <div className="flex items-center gap-3 min-w-0">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-white truncate">
              {user.name || "User"}
            </p>
            <p className="text-[10px] text-stone-500 uppercase mt-1 truncate">
              {user.role || "Employee"}
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="shrink-0 p-2.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-stone-400 hover:text-red-400 transition-colors cursor-pointer"
            title="Logout"
            aria-label="Logout"
          >
            <LogOut size={17} />
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#121210] text-[#fbfaf7] flex font-sans">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 xl:w-72 shrink-0 bg-[#1a1a17] border-r border-white/10 flex-col justify-between min-h-screen">
        {sidebarContent}
      </aside>

      {/* Mobile / tablet backdrop */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile / tablet sidebar */}
      <aside
        id="admin-mobile-sidebar"
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(82vw,320px)] flex-col justify-between overflow-y-auto border-r border-white/10 bg-[#1a1a17] transition-transform duration-300 ease-in-out lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Admin navigation"
        aria-hidden={!sidebarOpen}
      >
        <div>{sidebarContent}</div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 min-h-screen flex flex-col">
        <header className="sticky top-0 z-30 min-h-16 border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3 bg-[#1a1a17]/95 backdrop-blur-md">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => setSidebarOpen((open) => !open)}
              className="lg:hidden shrink-0 p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label={sidebarOpen ? "Close menu" : "Open menu"}
              aria-expanded={sidebarOpen}
              aria-controls="admin-mobile-sidebar"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="min-w-0">
              <h1 className="text-[10px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-widest text-stone-300 leading-relaxed">
                <span className="hidden sm:inline">
                  Control Center & Lead Management
                </span>
                <span className="sm:hidden">Admin Control Center</span>
              </h1>
              <p className="lg:hidden text-[10px] text-stone-500 mt-1 truncate">
                DESIG9 HAUSE
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-stone-400 shrink-0">
            <span>Logged in as:</span>
            <span className="text-[#c51f32] uppercase font-bold">
              {user.role || "Employee"}
            </span>
          </div>

          <div className="sm:hidden flex items-center gap-1 text-[10px] text-[#c51f32] uppercase font-bold shrink-0">
            <span className="max-w-20 truncate">
              {user.role || "Employee"}
            </span>
            <ChevronRight size={13} />
          </div>
        </header>

        <div className="flex-1 min-w-0 p-3 sm:p-5 md:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
