import React, { useState, useEffect } from "react";
import { Mail, Download } from "lucide-react";

export default function NewslettersPage() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const token = localStorage.getItem("token");
      const res = await fetch(`${api.replace(/\/$/, "")}/admin/newsletters`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok) {
        setSubscribers(data.subscribers || data.data || []);
      }
    } catch (err) {
      console.error("Error fetching subscribers:", err);
    }
  };

  const handleExportCSV = () => {
    if (subscribers.length === 0) {
      alert("No subscribers to export!");
      return;
    }
    const csvContent = "data:text/csv;charset=utf-8," + ["Email,Subscribed Date", ...subscribers.map(s => `${s.email},${s.createdAt}`)].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "desig9hause_subscribers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-serif">Newsletter Subscribers</h2>
          <p className="text-xs text-stone-400 mt-1">List of users who subscribed to architectural insights & updates.</p>
        </div>
        <button
          onClick={handleExportCSV}
          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold flex items-center gap-2 border border-white/10 transition-colors cursor-pointer text-white"
        >
          <Download size={14} /> Export CSV
        </button>
      </div>

      <div className="bg-[#1a1a17] border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-white/10 text-stone-400 uppercase tracking-wider text-[10px]">
              <th className="p-4">Subscriber Email</th>
              <th className="p-4">Subscribed Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {subscribers.length > 0 ? (
              subscribers.map((sub) => (
                <tr key={sub._id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-medium text-white flex items-center gap-2">
                    <Mail size={14} className="text-[#c51f32]" /> {sub.email}
                  </td>
                  <td className="p-4 text-stone-400">{new Date(sub.createdAt).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="p-8 text-center text-stone-500">No newsletter subscribers found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}