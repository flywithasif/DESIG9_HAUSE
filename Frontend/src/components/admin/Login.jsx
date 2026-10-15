import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff,
  Building,
  Users,
  TrendingUp,
  Sparkles,
} from "lucide-react";

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
      const api = (
        import.meta.env.VITE_API_URL || "http://localhost:5000"
      ).replace(/\/+$/, "");

      const res = await fetch(`${api}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("adminUser", JSON.stringify(data.user));

      navigate("/admin");
    } catch (err) {
      setError(err.message || "Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#FAF9F6] font-sans text-slate-900 selection:bg-[#c51f32] selection:text-white">
      <div className="flex min-h-screen w-full flex-col lg:flex-row">

        {/* LEFT PANEL: PREMIUM BRAND SHOWCASE */}
        <section className="relative hidden min-w-0 overflow-hidden bg-slate-950 lg:flex lg:w-[54%] lg:items-center lg:justify-center lg:p-8 xl:w-[58%] xl:p-14 2xl:p-20">

          {/* Architectural grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Ambient glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#c51f32]/20 blur-[100px] xl:h-[500px] xl:w-[500px] xl:blur-[140px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px] xl:h-[400px] xl:w-[400px] xl:blur-[120px]"
          />

          <div className="relative z-10 w-full max-w-2xl space-y-8 xl:space-y-10">

            {/* Brand header */}
            <div className="flex flex-wrap items-center gap-3 xl:gap-4">
              <div className="flex shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 p-2 backdrop-blur-md">
                <img
                  src="/logo/desig9-hause-logo.png"
                  alt="DESIG9 HAUSE Logo"
                  className="h-9 w-auto max-w-[150px] rounded-md object-contain xl:h-10"
                />
              </div>

              <div className="hidden h-8 w-px bg-white/20 xl:block" />

              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-medium tracking-wide text-stone-200 backdrop-blur-md xl:px-3.5 xl:text-xs">
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#c51f32]" />

                <span>
                  Architecture Lead &amp; Worksuite Portal
                </span>
              </div>
            </div>

            {/* Hero heading */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl leading-[1.15] tracking-tight text-white xl:text-5xl 2xl:text-6xl">
                Crafting Iconic Spaces,
                <br />

                <span className="bg-gradient-to-r from-stone-200 via-stone-400 to-[#c51f32] bg-clip-text text-transparent">
                  Managing High-Value Leads.
                </span>
              </h1>

              <p className="max-w-lg text-sm font-light leading-relaxed text-stone-400 xl:text-base">
                Enterprise workspace for DESIG9 HAUSE architects
                and administration. Track prospective client
                inquiries, project workflows, and revenue pipelines
                in real time.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6 xl:gap-4 xl:pt-8">

              <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md xl:p-4">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#c51f32]/20 text-[#c51f32]">
                  <Users className="h-4 w-4" />
                </div>

                <p className="break-words font-serif text-lg font-bold text-white xl:text-xl">
                  Lead HQ
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-wider text-stone-400 xl:text-[11px]">
                  Inquiries &amp; Clients
                </p>
              </div>

              <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md xl:p-4">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                  <Building className="h-4 w-4" />
                </div>

                <p className="break-words font-serif text-lg font-bold text-white xl:text-xl">
                  Projects
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-wider text-stone-400 xl:text-[11px]">
                  Site Operations
                </p>
              </div>

              <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md xl:p-4">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                  <TrendingUp className="h-4 w-4" />
                </div>

                <p className="break-words font-serif text-lg font-bold text-white xl:text-xl">
                  Analytics
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-wider text-stone-400 xl:text-[11px]">
                  Conversion Stats
                </p>
              </div>

            </div>

            {/* Brand signature */}
            <p className="text-[10px] tracking-[0.25em] text-stone-500">
              DESIG9 HAUSE — ARCHITECTURE · INTERIORS
            </p>
          </div>
        </section>

        {/* RIGHT PANEL: LOGIN */}
        <section className="relative flex min-h-screen w-full min-w-0 flex-1 flex-col bg-white px-4 py-5 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:min-h-screen lg:w-[46%] lg:flex-none lg:px-7 lg:py-8 xl:w-[42%] xl:px-12 xl:py-10 2xl:px-16">

          {/* Header */}
          <header className="flex w-full items-center justify-between gap-3 border-b border-slate-100 pb-5 sm:pb-6 lg:border-b-0 lg:pb-0">

            <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <img
                src="/logo/desig9-hause-logo.png"
                alt="DESIG9 HAUSE Logo"
                className="h-8 w-auto max-w-[110px] shrink-0 rounded-md object-contain sm:h-10 sm:max-w-[150px]"
              />

              <span className="min-w-0 break-words text-xs font-bold uppercase tracking-wider text-slate-900 sm:text-sm sm:tracking-widest">
                DESIG9 HAUSE
              </span>
            </div>

            <span className="shrink-0 rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-slate-500 sm:px-3 sm:text-[11px]">
              CRM Portal
            </span>
          </header>

          {/* Form wrapper */}
          <div className="my-auto flex w-full flex-1 flex-col justify-center py-9 sm:py-12 lg:flex-none lg:py-8 xl:py-10">

            <div className="mx-auto w-full max-w-md space-y-7 sm:space-y-8">

              {/* Heading */}
              <div className="space-y-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c51f32] sm:text-xs">
                  DESIG9 HAUSE / ADMINISTRATION
                </p>

                <h2 className="font-serif text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
                  Admin Sign In
                </h2>

                <p className="max-w-sm text-sm leading-relaxed text-slate-500 sm:text-base">
                  Enter your credential details to access your
                  CRM dashboard.
                </p>
              </div>

              {/* Error message */}
              {error && (
                <div
                  role="alert"
                  aria-live="polite"
                  className="break-words rounded-r-xl border-l-4 border-[#c51f32] bg-red-50 p-4 text-sm font-medium text-[#c51f32] shadow-sm"
                >
                  {error}
                </div>
              )}

              {/* Login form */}
              <form onSubmit={handleLogin} className="space-y-5">

                {/* Email */}
                <div className="min-w-0">
                  <label
                    htmlFor="admin-email"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
                  >
                    Email Address
                  </label>

                  <div className="group relative">
                    <Mail
                      aria-hidden="true"
                      className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#c51f32]"
                    />

                    <input
                      id="admin-email"
                      name="email"
                      type="email"
                      autoComplete="username"
                      inputMode="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@desig9hause.com"
                      className="w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50/80 py-3.5 pl-11 pr-4 text-base font-medium text-slate-900 outline-none transition-all placeholder:text-sm placeholder:font-normal placeholder:text-slate-400 focus:border-[#c51f32] focus:bg-white focus:ring-4 focus:ring-[#c51f32]/10 sm:text-sm"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="min-w-0">
                  <label
                    htmlFor="admin-password"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
                  >
                    Password
                  </label>

                  <div className="group relative">
                    <Lock
                      aria-hidden="true"
                      className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#c51f32]"
                    />

                    <input
                      id="admin-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50/80 py-3.5 pl-11 pr-12 text-base font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#c51f32] focus:bg-white focus:ring-4 focus:ring-[#c51f32]/10 sm:text-sm"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      aria-pressed={showPassword}
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c51f32]"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#c51f32] px-4 py-3.5 text-center text-xs font-semibold uppercase tracking-widest text-white shadow-lg shadow-[#c51f32]/20 transition-all hover:bg-[#a51828] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#c51f32]/25 disabled:cursor-not-allowed disabled:opacity-75"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />

                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>

                      <span>Authenticating Session...</span>
                    </span>
                  ) : (
                    <>
                      <span>Sign In to CRM Portal</span>

                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

              </form>

              {/* Security note */}
              <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 sm:p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-700">
                    Secure Studio Access
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Authorized access for DESIG9 HAUSE administration.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Footer */}
          <footer className="mt-auto flex w-full flex-col items-start justify-between gap-3 border-t border-slate-100 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:gap-4 sm:pt-6">

            <p>
              © {new Date().getFullYear()} DESIG9 HAUSE.
            </p>

            <div className="flex min-w-0 items-center gap-1.5 text-slate-500">
              <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />

              <span>Encrypted Studio Access</span>
            </div>

          </footer>
        </section>

      </div>
    </main>
  );
}
