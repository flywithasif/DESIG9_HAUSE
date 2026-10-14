import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Users, FileText, Calendar, Award, Mail, Flame, Snowflake, UserCheck, Activity } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("adminUser") || "{}");
  const isSuperAdmin = user.role === "superadmin";

  const [stats, setStats] = useState({
    totalEnquiries: 0,
    hotEnquiries: 0,
    warmEnquiries: 0,
    coldEnquiries: 0,
    siteVisitsCount: 0,
    newslettersCount: 0,
    totalEmployees: 0,
    userUpdateCount: 0,
    employeeStats: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const token = localStorage.getItem("token");
      const res = await fetch(`${api.replace(/\/$/, "")}/admin/stats`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok) {
        setStats(data);
      }
    } catch (err) {
      console.error("Error fetching dashboard stats:", err);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { 
      title: "Assigned Enquiries", 
      count: stats.totalEnquiries, 
      icon: FileText, 
      color: "text-blue-400", 
      bg: "bg-blue-500/10",
      link: "/admin/contact-leads"
    },
    { 
      title: "Hot Architectural Leads", 
      count: stats.hotEnquiries, 
      icon: Flame, 
      color: "text-emerald-400", 
      bg: "bg-emerald-500/10",
      link: "/admin/contact-leads"
    },
    { 
      title: "Warm Leads", 
      count: stats.warmEnquiries, 
      icon: Users, 
      color: "text-amber-400", 
      bg: "bg-amber-500/10",
      link: "/admin/contact-leads"
    },
    { 
      title: "Cold Leads", 
      count: stats.coldEnquiries, 
      icon: Snowflake, 
      color: "text-rose-400", 
      bg: "bg-rose-500/10",
      link: "/admin/contact-leads"
    },
    { 
      title: "Site Visit Requests", 
      count: stats.siteVisitsCount, 
      icon: Calendar, 
      color: "text-green-400", 
      bg: "bg-green-500/10",
      link: "/admin/site-visits"
    },
  ];

  if (isSuperAdmin) {
    statCards.push(
      { 
        title: "Team / Employees", 
        count: stats.totalEmployees, 
        icon: UserCheck, 
        color: "text-amber-400", 
        bg: "bg-amber-500/10",
        link: "/admin/team"
      },
      { 
        title: "Newsletter Subscribers", 
        count: stats.newslettersCount, 
        icon: Mail, 
        color: "text-purple-400", 
        bg: "bg-purple-500/10",
        link: "/admin/newsletters"
      }
    );
  }

  return (
    <div className="space-y-8 font-sans">
      {/* Header Banner */}
      <div className="bg-[#1a1a17] border border-white/10 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1">
          <h2 className="text-lg font-serif text-white">
            Welcome back, {user.name || (isSuperAdmin ? "Super Administrator" : "Employee")}
          </h2>
          <p className="text-xs text-stone-400">Real-time lead assignment metrics and discussion tracking.</p>
        </div>

        {/* Employee Personal Progress Metric */}
        {!isSuperAdmin && (
          <div className="px-5 py-3 rounded-2xl bg-[#c51f32]/10 border border-[#c51f32]/30 flex items-center gap-3">
            <Activity className="w-5 h-5 text-[#c51f32]" />
            <div>
              <p className="text-[10px] uppercase text-stone-400">Total Leads Updated By You</p>
              <p className="text-lg font-bold text-white">{stats.userUpdateCount} Updates Done</p>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Clickable Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {statCards.map((item, idx) => (
          <div 
            key={idx} 
            onClick={() => navigate(item.link)}
            className="bg-[#1a1a17] border border-white/10 hover:border-[#c51f32]/60 p-5 rounded-3xl flex items-center gap-4 shadow-md cursor-pointer transition-all hover:scale-[1.02] hover:bg-white/[0.03]"
          >
            <div className={`p-3.5 rounded-2xl ${item.bg} ${item.color} border border-white/5 shrink-0`}>
              <item.icon size={22} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">{item.title}</p>
              <h3 className="text-2xl font-serif font-bold text-white mt-0.5">
                {loading ? "..." : item.count}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* SUPER ADMIN EMPLOYEE PERFORMANCE ACTIVITY TRACKER TABLE */}
      {isSuperAdmin && (
        <div className="bg-[#1a1a17] border border-white/10 p-6 rounded-3xl space-y-4 shadow-xl">
          <div className="flex items-center gap-2">
            <Activity size={18} className="text-[#c51f32]" />
            <h3 className="text-sm font-serif uppercase tracking-wider text-stone-200">Employee Activity & Lead Update Metrics</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/10 text-stone-400 uppercase tracking-wider text-[10px]">
                  <th className="p-3">Employee Name</th>
                  <th className="p-3">Email Address</th>
                  <th className="p-3">Total Lead Comments / Updates Done</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {stats.employeeStats && stats.employeeStats.length > 0 ? (
                  stats.employeeStats.map((emp) => (
                    <tr key={emp.id} className="hover:bg-white/[0.02]">
                      <td className="p-3 font-semibold text-white">{emp.name}</td>
                      <td className="p-3 text-stone-400">{emp.email}</td>
                      <td className="p-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#c51f32]/20 text-white border border-[#c51f32]/30">
                          {emp.updatesCount} Updates
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="p-4 text-center text-stone-500">No employees registered or no updates performed yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}