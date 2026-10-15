import React, { useState, useEffect, useCallback } from "react";
import { Mail, Download, Users, CalendarDays } from "lucide-react";

export default function NewslettersPage() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);

  const fetchSubscribers = useCallback(async () => {
    setLoading(true);

    try {
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const token = localStorage.getItem("token");

      const res = await fetch(
        `${api.replace(/\/$/, "")}/admin/newsletters`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch subscribers.");
      }

      setSubscribers(
        Array.isArray(data.subscribers)
          ? data.subscribers
          : Array.isArray(data.data)
          ? data.data
          : []
      );
    } catch (err) {
      console.error("Error fetching subscribers:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSubscribers();
  }, [fetchSubscribers]);

  const handleExportCSV = () => {
    if (subscribers.length === 0) {
      alert("No subscribers to export!");
      return;
    }

    setExporting(true);

    try {
      const escapeCSV = (value) => {
        const safeValue = String(value ?? "");

        return `"${safeValue.replace(/"/g, '""')}"`;
      };

      const rows = [
        ["Email", "Subscribed Date"],
        ...subscribers.map((sub) => [
          sub.email || "",
          sub.createdAt
            ? new Date(sub.createdAt).toLocaleString()
            : "",
        ]),
      ];

      const csvContent =
        "\uFEFF" +
        rows.map((row) => row.map(escapeCSV).join(",")).join("\r\n");

      const blob = new Blob([csvContent], {
        type: "text/csv;charset=utf-8;",
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "desig9hause_subscribers.csv";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Error exporting CSV:", err);
      alert("Unable to export subscribers. Please try again.");
    } finally {
      setExporting(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "—";
    }

    return parsedDate.toLocaleString();
  };

  return (
    <section className="w-full min-w-0 space-y-5 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h2 className="font-serif text-xl text-white sm:text-2xl">
            Newsletter Subscribers
          </h2>

          <p className="mt-2 max-w-2xl text-xs leading-5 text-stone-400 sm:text-sm">
            List of users who subscribed to architectural insights & updates.
          </p>
        </div>

        <button
          type="button"
          onClick={handleExportCSV}
          disabled={loading || exporting || subscribers.length === 0}
          className="inline-flex w-full shrink-0 items-center justify-center gap-2
          rounded-xl border border-white/10 bg-white/5 px-4 py-3
          text-xs font-semibold text-white transition-colors duration-200
          hover:bg-white/10
          disabled:cursor-not-allowed disabled:opacity-50
          sm:w-auto sm:py-2.5"
        >
          <Download size={15} aria-hidden="true" />
          {exporting ? "Exporting..." : "Export CSV"}
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-[#1a1a17] p-4 sm:p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c51f32]/10 text-[#c51f32]">
            <Users size={20} aria-hidden="true" />
          </div>

          <div className="min-w-0">
            <p className="text-xs text-stone-400">
              Total Subscribers
            </p>

            <p className="mt-1 text-2xl font-semibold text-white">
              {loading ? "—" : subscribers.length}
            </p>
          </div>
        </div>

        <div className="flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-[#1a1a17] p-4 sm:p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-stone-300">
            <Mail size={20} aria-hidden="true" />
          </div>

          <div className="min-w-0">
            <p className="text-xs text-stone-400">
              Newsletter Status
            </p>

            <p className="mt-1 text-sm font-medium text-white">
              {loading ? "Loading..." : "Subscriber List"}
            </p>
          </div>
        </div>
      </div>

      {/* Subscribers */}
      <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a17]">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-5">
          <h3 className="text-sm font-medium text-white">
            All Subscribers
          </h3>

          <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-stone-300">
            {loading ? "Loading" : `${subscribers.length} total`}
          </span>
        </div>

        {/* Desktop and tablet table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-[10px] uppercase tracking-wider text-stone-400">
                <th scope="col" className="px-5 py-4 font-medium">
                  Subscriber Email
                </th>

                <th scope="col" className="px-5 py-4 font-medium">
                  Subscribed Date
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td
                    colSpan={2}
                    className="px-5 py-12 text-center text-stone-400"
                  >
                    Loading subscribers...
                  </td>
                </tr>
              ) : subscribers.length > 0 ? (
                subscribers.map((sub) => (
                  <tr
                    key={sub._id || sub.email}
                    className="transition-colors duration-200 hover:bg-white/[0.03]"
                  >
                    <td className="px-5 py-4">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#c51f32]/10 text-[#c51f32]">
                          <Mail size={15} aria-hidden="true" />
                        </div>

                        <span className="break-all font-medium text-white">
                          {sub.email || "No email"}
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-stone-400">
                      <div className="flex items-center gap-2">
                        <CalendarDays
                          size={14}
                          className="shrink-0 text-stone-500"
                          aria-hidden="true"
                        />
                        <span>{formatDate(sub.createdAt)}</span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={2}
                    className="px-5 py-12 text-center text-stone-500"
                  >
                    No newsletter subscribers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="space-y-3 p-3 md:hidden">
          {loading ? (
            <div className="px-3 py-10 text-center text-xs text-stone-400">
              Loading subscribers...
            </div>
          ) : subscribers.length > 0 ? (
            subscribers.map((sub) => (
              <article
                key={sub._id || sub.email}
                className="min-w-0 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors duration-200 hover:bg-white/[0.04]"
              >
                <div className="flex min-w-0 items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c51f32]/10 text-[#c51f32]">
                    <Mail size={17} aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-[10px] uppercase tracking-wider text-stone-500">
                      Subscriber Email
                    </p>

                    <p className="break-all text-sm font-medium leading-6 text-white">
                      {sub.email || "No email"}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex min-w-0 items-start gap-3 border-t border-white/5 pt-3">
                  <CalendarDays
                    size={15}
                    className="mt-0.5 shrink-0 text-stone-500"
                    aria-hidden="true"
                  />

                  <div className="min-w-0">
                    <p className="mb-1 text-[10px] uppercase tracking-wider text-stone-500">
                      Subscribed Date
                    </p>

                    <p className="break-words text-xs leading-5 text-stone-400">
                      {formatDate(sub.createdAt)}
                    </p>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="px-3 py-10 text-center text-xs text-stone-500">
              No newsletter subscribers found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
