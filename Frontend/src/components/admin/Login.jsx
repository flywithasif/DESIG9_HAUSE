import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ArrowRight, ShieldCheck, Eye, EyeOff, Building, Users, TrendingUp, Sparkles } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${api}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("adminUser", JSON.stringify(data.user));
      navigate("/admin");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-[#FAF9F6] font-sans text-slate-900 selection:bg-[#c51f32] selection:text-white">
      {/* LEFT SIDE: Architectural Studio Hero / Brand Showcase */}
      <div className="hidden lg:flex lg:w-[58%] relative bg-slate-950 items-center justify-center p-12 xl:p-20 overflow-hidden">
        {/* Subtle Architectural Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />

        {/* Ambient Premium Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#c51f32]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Content Showcase */}
        <div className="relative z-10 max-w-xl space-y-10">
          {/* Logo & Badge Header */}
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center">
              <img 
                src="/logo/desig9-hause-logo.png" 
                alt="DESIG9 HAUSE Logo" 
                className="h-10 w-auto object-contain rounded-md"
              />
            </div>
            <div className="h-8 w-[1px] bg-white/20 hidden sm:block" />
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-stone-200 font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#c51f32]" />
              <span>Architecture Lead & Worksuite Portal</span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl xl:text-5xl font-serif leading-[1.15] text-white tracking-tight">
              Crafting Iconic Spaces, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-200 via-stone-400 to-[#c51f32]">
                Managing High-Value Leads.
              </span>
            </h1>
            <p className="text-stone-400 text-sm xl:text-base leading-relaxed font-light max-w-lg">
              Enterprise workspace for DESIG9 HAUSE architects & administration. Track prospective client inquiries, project workflows, and revenue pipelines in real-time.
            </p>
          </div>

          {/* Real-time CRM Floating Feature Cards */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-[#c51f32]/20 text-[#c51f32] flex items-center justify-center mb-3">
                <Users className="w-4 h-4" />
              </div>
              <p className="text-xl font-serif font-bold text-white">Lead HQ</p>
              <p className="text-[11px] text-stone-400 mt-1 uppercase tracking-wider">Inquiries & Clients</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Building className="w-4 h-4" />
              </div>
              <p className="text-xl font-serif font-bold text-white">Projects</p>
              <p className="text-[11px] text-stone-400 mt-1 uppercase tracking-wider">Site Operations</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <TrendingUp className="w-4 h-4" />
              </div>
              <p className="text-xl font-serif font-bold text-white">Analytics</p>
              <p className="text-[11px] text-stone-400 mt-1 uppercase tracking-wider">Conversion Stats</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: High-End White Clean Login Form */}
      <div className="w-full lg:w-[42%] flex flex-col justify-between p-8 sm:p-14 xl:p-16 bg-white z-10 border-l border-slate-200/80 shadow-2xl">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo/desig9-hause-logo.png" 
              alt="DESIG9 HAUSE Logo" 
              className="h-10 w-auto object-contain rounded-md"
            />
            <span className="text-sm font-bold tracking-widest text-slate-900 uppercase">
              DESIG9 HAUSE
            </span>
          </div>
          <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            CRM Portal
          </span>
        </div>

        {/* Form Main Body */}
        <div className="max-w-md w-full mx-auto my-auto py-10 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif font-medium tracking-tight text-slate-900">
              Admin Sign In
            </h2>
            <p className="text-sm text-slate-500">
              Enter your credential details to access your CRM dashboard.
            </p>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-[#c51f32] text-[#c51f32] text-xs font-medium rounded-r-xl shadow-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="w-4 h-4 absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#c51f32] transition-colors" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@desig9hause.com"
                  className="w-full bg-slate-50/80 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 outline-none focus:bg-white focus:border-[#c51f32] focus:ring-4 focus:ring-[#c51f32]/10 transition-all placeholder:text-slate-400 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Password
              </label>
              <div className="relative group">
                <Lock className="w-4 h-4 absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#c51f32] transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-50/80 border border-slate-200 rounded-xl pl-11 pr-11 py-3 text-sm text-slate-900 outline-none focus:bg-white focus:border-[#c51f32] focus:ring-4 focus:ring-[#c51f32]/10 transition-all placeholder:text-slate-400 font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-[#c51f32] hover:bg-[#a51828] active:scale-[0.99] text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#c51f32]/25 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-75 mt-2"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Authenticating Session...
                </span>
              ) : (
                <>
                  Sign In to CRM Portal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-6">
          <p>© {new Date().getFullYear()} DESIG9 HAUSE.</p>
          <div className="flex items-center gap-1.5 text-slate-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Encrypted Studio Access</span>
          </div>
        </div>
      </div>
    </div>
  );
}