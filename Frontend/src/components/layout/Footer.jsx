
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Loader2,
} from "lucide-react";

const emailAddress = "hello@desig9hause.com";
const fullAddress =
  "D / 2/187, Golf City, Bagiamau, Lucknow, Uttar Pradesh 226030";
const whatsappNumber = "916386994478";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    color: "#E1306C",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    color: "#1877F2",
    path: "M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z",
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${whatsappNumber}?text=Hi%20Desig9%20Hause,%20I%20would%20like%20to%20discuss%20an%20architectural%20project.`,
    color: "#25D366",
    path: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    color: "#FF0000",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    color: "#0A66C2",
    path: "M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3zm-1.5-12.268a1.764 1.764 0 1 1 0-3.528 1.764 1.764 0 0 1 0 3.528zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476z",
  },
];

const quickLinks = [
  { label: "Projects", to: "/projects" },
  { label: "Studio", to: "/studio" },
  { label: "Our Team", to: "/team" },
  { label: "Services", to: "/services" },
  { label: "Journal", to: "/journal" },
  { label: "Free Site Visit", to: "/free-site-visit" },
];

const footerHeadingClass =
  "text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-400";

const footerLinkClass =
  "inline-flex min-h-8 items-center text-xs text-stone-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c51f32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0e0e]";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim() || status.loading) return;

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    try {
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const response = await fetch(
        `${api.replace(/\/$/, "")}/newsletters`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmittedEmail(email.trim());
        setEmail("");

        setStatus({
          loading: false,
          success: true,
          error: "",
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error:
            data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Subscription error:", error);

      setStatus({
        loading: false,
        success: false,
        error:
          "Unable to connect. Please check your connection or backend server.",
      });
    }
  };

  return (
    <footer
      id="site-footer"
      className="overflow-hidden border-t border-white/10 bg-[#0e0e0e] pb-6 pt-12 text-stone-100 sm:pb-8 sm:pt-14 md:pt-16"
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-white/15 pb-10 sm:grid-cols-2 sm:gap-y-12 sm:pb-12 lg:grid-cols-[1.3fr_0.7fr_1fr_1.2fr] lg:gap-x-8 lg:gap-y-8 lg:pb-14">
          {/* Brand */}
          <div className="flex min-w-0 flex-col items-start lg:pr-4">
            <Link
              to="/"
              aria-label="DESIG9 HAUSE home"
              className="group inline-flex max-w-full items-center gap-2.5 sm:gap-3"
            >
              <img
                src="/logo/desig9-hause-logo.png"
                alt="DESIG9 HAUSE Logo"
                className="h-9 w-auto max-w-[76px] shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:max-w-[90px]"
              />

              <span className="flex min-w-0 flex-col gap-1">
                <strong className="text-xs font-semibold tracking-[0.13em] text-white sm:text-sm sm:tracking-[0.18em]">
                  DESIG9 HAUSE
                </strong>

                <small className="text-[7px] font-medium tracking-[0.12em] text-stone-400 sm:text-[8px] sm:tracking-[0.16em]">
                  ARCHITECTURE · INTERIORS
                </small>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-xs font-light leading-6 text-stone-300 sm:text-[13px]">
              Thoughtful spaces. Timeless forms. Design shaped around the
              way people live, work, and connect.
            </p>
          </div>

          {/* Explore */}
          <nav
            aria-label="Footer navigation"
            className="flex min-w-0 flex-col items-start gap-1.5"
          >
            <h3 className={`${footerHeadingClass} mb-2`}>
              Explore
            </h3>

            {quickLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={footerLinkClass}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex min-w-0 flex-col items-start gap-4">
            <h3 className={footerHeadingClass}>Get in touch</h3>

            <a
              className="group flex min-h-8 w-full min-w-0 items-start gap-2.5 text-xs text-stone-300 transition-colors hover:text-white"
              href={`mailto:${emailAddress}`}
            >
              <Mail
                size={15}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-[#c51f32] transition-transform group-hover:scale-110"
              />
              <span className="min-w-0 break-all leading-5">
                {emailAddress}
              </span>
            </a>

            <a
              className="group flex min-h-8 items-start gap-2.5 text-xs text-stone-300 transition-colors hover:text-white"
              href="tel:+916386994478"
            >
              <Phone
                size={15}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-[#c51f32] transition-transform group-hover:scale-110"
              />
              <span className="leading-5">+91 63869 94478</span>
            </a>

            <div className="flex items-start gap-2.5 text-xs leading-6 text-stone-300">
              <MapPin
                size={15}
                aria-hidden="true"
                className="mt-1 shrink-0 text-[#c51f32]"
              />
              <span className="min-w-0 break-words">
                {fullAddress}
              </span>
            </div>
          </div>

          {/* Social Links and Newsletter */}
          <div className="flex min-w-0 flex-col items-start gap-5">
            <h3 className={footerHeadingClass}>Connect With Us</h3>

            <div className="flex w-full flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit us on ${social.name}`}
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-[11px] text-stone-300 transition-all duration-200 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c51f32]"
                  style={{
                    "--social-color": social.color,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 fill-current"
                    style={{ color: social.color }}
                  >
                    <path d={social.path} />
                  </svg>

                  <span>{social.name}</span>
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-1 w-full min-w-0 border-t border-white/10 pt-5">
              <p className="mb-3 text-xs font-medium leading-5 text-white">
                Subscribe for design insights &amp; updates
              </p>

              {status.success ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex flex-col gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3.5"
                >
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                    <CheckCircle2
                      size={16}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                    <span>Successfully Subscribed!</span>
                  </div>

                  <p className="break-words text-[11px] leading-5 text-stone-300">
                    A confirmation email has been sent to{" "}
                    <span className="break-all font-medium text-white underline decoration-emerald-500/50">
                      {submittedEmail}
                    </span>
                    .
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setStatus({
                        loading: false,
                        success: false,
                        error: "",
                      })
                    }
                    className="mt-1 min-h-9 self-start text-left text-xs text-stone-400 underline transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c51f32]"
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex w-full min-w-0 flex-col gap-2"
                >
                  <div className="relative flex min-w-0 items-center">
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      aria-label="Email address for newsletter"
                      aria-invalid={Boolean(status.error)}
                      aria-describedby={
                        status.error ? "newsletter-error" : undefined
                      }
                      required
                      className="h-12 w-full min-w-0 rounded-xl border border-white/15 bg-white/[0.04] py-3 pl-3.5 pr-14 text-base text-stone-100 shadow-inner transition-colors placeholder:text-xs placeholder:text-stone-500 focus:border-[#c51f32] focus:bg-white/[0.07] focus:outline-none sm:text-sm"
                    />

                    <button
                      type="submit"
                      disabled={status.loading}
                      aria-label={
                        status.loading
                          ? "Subscribing..."
                          : "Subscribe to newsletter"
                      }
                      title="Subscribe"
                      className="absolute right-1.5 flex h-9 w-10 items-center justify-center rounded-lg bg-[#c51f32] text-white transition-colors hover:bg-[#a8192a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {status.loading ? (
                        <Loader2
                          size={16}
                          className="animate-spin"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowRight
                          size={16}
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </div>

                  {status.error && (
                    <p
                      id="newsletter-error"
                      role="alert"
                      className="break-words text-xs leading-5 text-red-400"
                    >
                      {status.error}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 pt-6 text-[10px] leading-5 text-stone-400 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6">
          <span>
            © {new Date().getFullYear()} DESIG9 HAUSE. All rights reserved.
          </span>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              to="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>

          <a
            href="#top"
            className="inline-flex min-h-9 items-center gap-1 self-start transition-colors hover:text-white sm:self-auto"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
