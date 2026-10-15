import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  FileText,
  Calendar,
  Mail,
  Flame,
  Snowflake,
  UserCheck,
  Activity,
} from "lucide-react";

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
    employeeStats: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchDashboardStats = async () => {
      try {
        const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
        const token = localStorage.getItem("token");

        const res = await fetch(
          `${api.replace(/\/$/, "")}/admin/stats`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        if (res.ok && isMounted) {
          setStats((prev) => ({
            ...prev,
            ...data,
            employeeStats: Array.isArray(data.employeeStats)
              ? data.employeeStats
              : [],
          }));
        }
      } catch (err) {
        console.error("Error fetching dashboard stats:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchDashboardStats();

    return () => {
      isMounted = false;
    };
  }, []);

  const statCards = [
    {
      title: "Assigned Enquiries",
      count: stats.totalEnquiries,
      icon: FileText,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      link: "/admin/contact-leads",
    },
    {
      title: "Hot Architectural Leads",
      count: stats.hotEnquiries,
      icon: Flame,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      link: "/admin/contact-leads",
    },
    {
      title: "Warm Leads",
      count: stats.warmEnquiries,
      icon: Users,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      link: "/admin/contact-leads",
    },
    {
      title: "Cold Leads",
      count: stats.coldEnquiries,
      icon: Snowflake,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      link: "/admin/contact-leads",
    },
    {
      title: "Site Visit Requests",
      count: stats.siteVisitsCount,
      icon: Calendar,
      color: "text-green-400",
      bg: "bg-green-500/10",
      link: "/admin/site-visits",
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
        link: "/admin/team",
      },
      {
        title: "Newsletter Subscribers",
        count: stats.newslettersCount,
        icon: Mail,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        link: "/admin/newsletters",
      }
    );
  }

  return (
    <main className="w-full min-w-0 space-y-5 font-sans sm:space-y-6 lg:space-y-8">
      {/* Dashboard Welcome Banner */}
      <section className="flex min-w-0 flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[#1a1a17] p-4 shadow-xl sm:gap-5 sm:rounded-3xl sm:p-5 md:flex-row md:items-center md:p-6">
        <div className="min-w-0 w-full space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c51f32] sm:text-xs">
            DESIG9 HAUSE · ADMINISTRATION
          </p>

          <h2 className="break-words font-serif text-lg leading-snug text-white sm:text-xl lg:text-2xl">
            Welcome back,{" "}
            {user.name ||
              (isSuperAdmin ? "Super Administrator" : "Employee")}
          </h2>

          <p className="max-w-xl text-xs leading-relaxed text-stone-400 sm:text-sm">
            Real-time lead assignment metrics and discussion tracking.
          </p>
        </div>

        {/* Employee Personal Progress */}
        {!isSuperAdmin && (
          <div className="flex w-full min-w-0 items-center gap-3 rounded-xl border border-[#c51f32]/30 bg-[#c51f32]/10 p-3 sm:w-auto sm:min-w-[220px] sm:rounded-2xl sm:px-5 sm:py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c51f32]/10">
              <Activity
                className="h-5 w-5 text-[#c51f32]"
                aria-hidden="true"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-semibold uppercase leading-relaxed tracking-wider text-stone-400 sm:text-[10px]">
                Total Leads Updated By You
              </p>

              <p className="mt-1 break-words text-base font-bold text-white sm:text-lg">
                {loading ? "..." : stats.userUpdateCount} Updates Done
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Responsive Statistics Cards */}
      <section
        aria-label="Dashboard statistics"
        className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {statCards.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              type="button"
              onClick={() => navigate(item.link)}
              className="group flex min-h-[104px] w-full min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-[#1a1a17] p-4 text-left shadow-md transition-colors duration-200 hover:border-[#c51f32]/60 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c51f32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11110f] sm:min-h-[118px] sm:gap-4 sm:rounded-3xl sm:p-5"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/5 sm:h-14 sm:w-14 sm:rounded-2xl ${item.bg} ${item.color}`}
              >
                <Icon
                  size={22}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="sm:h-6 sm:w-6"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="break-words text-[10px] font-semibold uppercase leading-relaxed tracking-wider text-stone-400 sm:text-[11px]">
                  {item.title}
                </p>

                <h3 className="mt-1 break-words font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {loading ? "..." : item.count ?? 0}
                </h3>

                <span className="mt-1 block text-[10px] text-stone-500 transition-colors group-hover:text-stone-300 sm:text-xs">
                  View details
                </span>
              </div>
            </button>
          );
        })}
      </section>

      {/* Super Admin Employee Activity Tracker */}
      {isSuperAdmin && (
        <section className="min-w-0 space-y-4 rounded-2xl border border-white/10 bg-[#1a1a17] p-4 shadow-xl sm:rounded-3xl sm:p-5 lg:p-6">
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#c51f32]/10">
              <Activity
                size={18}
                className="text-[#c51f32]"
                aria-hidden="true"
              />
            </div>

            <div className="min-w-0">
              <h3 className="font-serif text-sm font-semibold uppercase leading-relaxed tracking-wider text-stone-200 sm:text-base">
                Employee Activity & Lead Update Metrics
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-stone-500">
                Monitor team activity and lead updates.
              </p>
            </div>
          </div>

          {/* Desktop and tablet table; horizontally scrollable if necessary */}
          <div className="w-full min-w-0 overflow-x-auto rounded-xl border border-white/5 overscroll-x-contain">
            <table className="w-full min-w-[520px] border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] text-[10px] uppercase tracking-wider text-stone-400">
                  <th scope="col" className="px-4 py-4 font-semibold">
                    Employee Name
                  </th>

                  <th scope="col" className="px-4 py-4 font-semibold">
                    Email Address
                  </th>

                  <th scope="col" className="px-4 py-4 font-semibold">
                    Total Lead Comments / Updates Done
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {loading ? (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-4 py-8 text-center text-stone-400"
                    >
                      Loading employee activity...
                    </td>
                  </tr>
                ) : stats.employeeStats.length > 0 ? (
                  stats.employeeStats.map((emp) => (
                    <tr
                      key={emp.id}
                      className="transition-colors hover:bg-white/[0.02]"
                    >
                      <td className="break-words px-4 py-4 font-semibold text-white">
                        {emp.name}
                      </td>

                      <td className="break-all px-4 py-4 text-stone-400">
                        {emp.email}
                      </td>

                      <td className="px-4 py-4">
                        <span className="inline-flex max-w-full items-center rounded-full border border-[#c51f32]/30 bg-[#c51f32]/20 px-3 py-1.5 text-xs font-bold text-white">
                          {emp.updatesCount ?? 0} Updates
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-4 py-8 text-center leading-relaxed text-stone-500"
                    >
                      No employees registered or no updates performed yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <p className="text-[10px] leading-relaxed text-stone-500 sm:text-xs">
            On smaller screens, swipe horizontally within the table to view
            all columns.
          </p>
        </section>
      )}
    </main>
  );
}
