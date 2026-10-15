
import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import {
  Compass,
  Building2,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  Mail,
  User,
  Ruler,
  Layers,
  Award,
  HelpCircle,
} from "lucide-react";

// Premium scroll reveal animation
function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const element = domRef.current;

    if (!element) return;

    // Graceful fallback for browsers without IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hiddenTransform = {
    up: "translate-y-10 sm:translate-y-16",
    left: "-translate-x-6 sm:-translate-x-12",
    right: "translate-x-6 sm:translate-x-12",
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: "2500ms",
        transitionDelay: `${delay}ms`,
      }}
      className={`min-w-0 transition-all ease-out transform ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${hiddenTransform[direction] || hiddenTransform.up} scale-[0.98]`
      } ${className}`}
    >
      {children}
    </div>
  );
}

const inputClass =
  "block w-full min-w-0 min-h-[46px] bg-[#fbfaf7] border border-black/15 rounded-xl px-3 sm:px-4 py-3 text-base sm:text-sm text-[#22221f] placeholder:text-stone-400 focus:outline-none focus:border-[#c51f32] focus:ring-2 focus:ring-[#c51f32]/10 transition-colors";

const labelClass =
  "block text-[10px] sm:text-[11px] font-medium text-stone-700 uppercase tracking-wider mb-2";

const iconInputClass =
  "block w-full min-w-0 min-h-[46px] bg-[#fbfaf7] border border-black/15 rounded-xl pl-10 pr-3 sm:pr-4 py-3 text-base sm:text-sm text-[#22221f] placeholder:text-stone-400 focus:outline-none focus:border-[#c51f32] focus:ring-2 focus:ring-[#c51f32]/10 transition-colors";

function IconInput({ icon: Icon, children }) {
  return (
    <div className="relative min-w-0">
      <Icon
        className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

export default function FreeSiteVisit() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    propertyType: "Residential Villa / Bungalow",
    plotArea: "",
    preferredDate: "",
    preferredTime: "Morning (10 AM - 1 PM)",
    projectScope: "Full Architectural Design",
    budgetRange: "₹50L - ₹1 Cr",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Lenis smooth scrolling with proper animation-frame cleanup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const res = await fetch(
        `${api.replace(/\/$/, "")}/site-visits`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        throw new Error("Site visit submission failed.");
      }

      setSubmitted(true);
    } catch (err) {
      alert(
        "Error submitting request. Please try again or call us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    {
      label: "Site Inspection",
      value: "360° Assessment",
      icon: Compass,
    },
    {
      label: "Bespoke Design",
      value: "Tailored Concept",
      icon: Building2,
    },
    {
      label: "Architectural Experts",
      value: "Senior Principals",
      icon: Award,
    },
    {
      label: "Zero Obligation",
      value: "100% Free Consultation",
      icon: ShieldCheck,
    },
  ];

  const inspectionSteps = [
    {
      title: "1. Solar & Orientation Analysis",
      desc: "Evaluating natural light, wind direction, and microclimate to optimize passive cooling and daylighting.",
      icon: Compass,
    },
    {
      title: "2. Zoning & Bye-Law Verification",
      desc: "Reviewing setbacks, FAR (Floor Area Ratio), height limits, and local municipal regulations.",
      icon: Layers,
    },
    {
      title: "3. Topography & Soil Contour Study",
      desc: "Analyzing land slope, levels, and soil stability for structural integrity and foundation planning.",
      icon: Ruler,
    },
    {
      title: "4. Concept & Spatial Layout Blueprint",
      desc: "Discussing client lifestyle needs, room adjacencies, Vastu/architectural flow, and luxury aesthetics.",
      icon: Building2,
    },
  ];

  const faqs = [
    {
      q: "Is the site visit truly free of cost?",
      a: "Yes. For serious residential villas and commercial projects within our service zones, the initial architectural visit and spatial consultation are 100% complimentary.",
    },
    {
      q: "Who from DESIG9 HAUSE will visit the site?",
      a: "A Senior Principal Architect or lead design consultant accompanied by a structural strategist will conduct the visit.",
    },
    {
      q: "What should I keep ready during the visit?",
      a: "Having plot dimensions, key layout maps, municipal papers, and any reference inspiration images helps us maximize the visit's efficiency.",
    },
    {
      q: "How soon can we schedule after booking?",
      a: "We usually schedule visits within 24 to 48 hours of your submission based on architect availability.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-[#fbfaf7] font-sans text-[#22221f] selection:bg-[#c51f32]/20 selection:text-[#c51f32]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate overflow-hidden border-b border-black/[0.08] pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">

        {/* Architectural blueprint background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.2]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#22221f_1px,transparent_1px),linear-gradient(to_bottom,#22221f_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#c51f32_1px,transparent_1px),linear-gradient(to_bottom,#c51f32_1px,transparent_1px)] bg-[size:120px_120px] opacity-40 sm:bg-[size:160px_160px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#fbfaf7_85%)]" />
        </div>

        {/* Ambient glows */}
        <div className="pointer-events-none absolute top-10 left-0 h-48 w-48 rounded-full bg-[#c51f32]/10 blur-[90px] sm:left-10 sm:h-80 sm:w-80 sm:blur-[140px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-56 w-56 rounded-full bg-[#22221f]/5 blur-[100px] sm:right-1/4 sm:h-96 sm:w-96 sm:blur-[160px]" />

        <div className="relative z-10 mx-auto grid w-[calc(100%-32px)] max-w-[1240px] min-w-0 items-center gap-10 sm:w-[calc(100%-48px)] sm:gap-12 lg:grid-cols-12">

          {/* Hero content */}
          <ScrollReveal
            direction="left"
            delay={100}
            className="min-w-0 space-y-5 sm:space-y-6 lg:col-span-7"
          >
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#c51f32]/10 bg-[#c51f32]/5 px-3 py-2 text-[9px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#c51f32] sm:px-3.5 sm:text-xs sm:tracking-[0.2em]">
              <Sparkles className="h-4 w-4 shrink-0" />
              <span>Architecture · Interior · On-Site Inspection</span>
            </div>

            <h1 className="max-w-3xl break-words font-serif text-[clamp(2rem,7.5vw,3rem)] font-light leading-[1.12] tracking-tight text-[#22221f] sm:text-5xl sm:leading-[1.08] lg:text-7xl">
              Book a Complimentary{" "}
              <span className="italic font-normal text-[#c51f32]">
                On-Site Architectural Consultation
              </span>
            </h1>

            <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-relaxed">
              Transforming your raw plot into a bespoke architectural
              masterpiece begins on the ground. Invite our principal
              architects to inspect, analyze, and craft a tailored vision
              for your luxury residence or commercial space.
            </p>

            <div className="flex flex-col items-start gap-3 pt-1 text-[10px] font-semibold uppercase leading-relaxed tracking-wider text-stone-600 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:gap-5 sm:gap-6 sm:text-xs">
              <span className="flex items-center gap-2">
                <Compass className="h-4 w-4 shrink-0 text-[#c51f32]" />
                360° Plot Orientation
              </span>
              <span className="flex items-center gap-2">
                <Ruler className="h-4 w-4 shrink-0 text-[#c51f32]" />
                Contour & Soil Study
              </span>
            </div>

            {/* Valuation card */}
            <div className="mt-4 max-w-md rounded-2xl border border-black/10 bg-white p-4 shadow-xl shadow-black/[0.03] backdrop-blur-md sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-2 font-serif text-2xl font-light text-[#c51f32] sm:text-3xl">
                    ₹0
                    <span className="font-sans text-xs text-stone-400 line-through">
                      ₹25,000
                    </span>
                  </div>
                  <div className="mt-1 text-[9px] uppercase tracking-wider text-stone-500 sm:text-[10px]">
                    Complimentary On-Site Inspection
                  </div>
                </div>

                <span className="rounded-full bg-[#c51f32]/10 px-3 py-1.5 font-mono text-[9px] font-bold text-[#c51f32] sm:text-[10px]">
                  100% WAIVED
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Architectural gallery */}
          <ScrollReveal
            direction="right"
            delay={300}
            className="relative min-w-0 lg:col-span-5"
          >
            <div className="relative h-[340px] w-full min-w-0 min-[420px]:h-[380px] sm:h-[460px] lg:h-[480px]">

              {/* Main image */}
              <div className="group absolute top-7 right-0 h-[255px] w-[88%] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl min-[420px]:h-[285px] sm:top-8 sm:h-[320px] sm:rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                  alt="Architectural Site Inspection"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-3 sm:p-6">
                  <div className="space-y-1 text-white">
                    <span className="inline-block rounded bg-white px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-[#c51f32] sm:text-[10px]">
                      Site Analysis
                    </span>
                    <p className="font-serif text-xs sm:text-sm">
                      On-Site Structural & Spatial Surveying
                    </p>
                  </div>
                </div>
              </div>

              {/* Blueprint image */}
              <div className="group absolute top-0 left-0 z-20 h-[110px] w-[53%] overflow-hidden rounded-xl border-4 border-white bg-white shadow-2xl min-[420px]:h-[130px] sm:h-[150px] sm:w-[58%] sm:rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600"
                  alt="Architectural Blueprint Layout"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 rounded-full bg-black/80 px-2 py-1 font-mono text-[8px] text-white sm:text-[9px]">
                  CAD 1:100
                </div>
              </div>

              {/* Floating studio card */}
              <div className="absolute bottom-0 left-1 z-30 flex max-w-[245px] items-center gap-2.5 rounded-xl border border-black/10 bg-white p-3 shadow-xl min-[420px]:left-3 sm:bottom-2 sm:left-4 sm:max-w-[270px] sm:gap-3 sm:rounded-2xl sm:p-4">
                <div className="shrink-0 rounded-xl bg-[#c51f32]/10 p-2 text-[#c51f32] sm:p-2.5">
                  <Building2 size={20} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[10px] font-bold text-[#22221f] sm:text-xs">
                    DESIG9 HAUSE Practice
                  </h4>
                  <p className="mt-1 text-[9px] leading-relaxed text-stone-500 sm:text-[10px]">
                    Senior Principals On Ground
                  </p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= VALUE STATS ================= */}
      <section className="border-b border-black/[0.08] bg-white/50 py-9 sm:py-12">
        <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1240px] grid-cols-1 gap-5 min-[420px]:grid-cols-2 sm:w-[calc(100%-48px)] sm:gap-8 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <ScrollReveal
              key={stat.label}
              delay={idx * 100}
              className="flex min-w-0 items-center gap-3 sm:items-start sm:gap-4"
            >
              <div className="shrink-0 rounded-xl border border-[#c51f32]/20 bg-[#c51f32]/10 p-2.5 text-[#c51f32] sm:p-3">
                <stat.icon className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <div className="text-[9px] uppercase leading-relaxed tracking-widest text-stone-500 sm:text-xs">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs font-medium leading-relaxed text-[#22221f] sm:text-sm">
                  {stat.value}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ================= FORM & PROCESS ================= */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1240px] min-w-0 gap-10 sm:w-[calc(100%-48px)] sm:gap-12 lg:grid-cols-12">

          {/* Process information */}
          <ScrollReveal
            direction="left"
            delay={200}
            className="min-w-0 space-y-7 sm:space-y-10 lg:col-span-5"
          >
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c51f32] sm:text-xs">
                Why Request a Visit?
              </span>

              <h2 className="mt-2 font-serif text-2xl leading-tight text-[#22221f] sm:text-3xl">
                What Happens During Your Free Site Inspection?
              </h2>

              <p className="mt-3 text-sm leading-7 text-stone-600">
                Our multidisciplinary studio team conducts a multi-point
                spatial and environmental study right at your project
                location.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {inspectionSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-black/10 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#c51f32]/40 sm:p-5"
                >
                  <div className="flex items-start gap-3">
                    <step.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#c51f32]" />
                    <h3 className="text-sm font-medium leading-relaxed text-[#22221f]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-2 pl-7 text-xs leading-6 text-stone-600 sm:text-sm">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact card */}
            <div className="rounded-2xl border border-[#c51f32]/20 bg-gradient-to-br from-[#c51f32]/10 via-white to-transparent p-5 shadow-md sm:p-6">
              <h4 className="text-sm font-semibold text-[#22221f]">
                Prefer a direct conversation?
              </h4>

              <p className="mt-1 text-xs leading-relaxed text-stone-600 sm:text-sm">
                Speak directly with our chief architectural coordinators.
              </p>

              <div className="mt-4 space-y-3">
                <a
                  href="mailto:hello@desig9hause.com"
                  className="flex min-w-0 items-center gap-2 text-xs font-medium text-[#c51f32] hover:underline sm:text-sm"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="break-all">hello@desig9hause.com</span>
                </a>

                <a
                  href="tel:+916386994478"
                  className="flex items-center gap-2 text-xs font-medium text-[#c51f32] hover:underline sm:text-sm"
                >
                  <PhoneCall className="h-4 w-4 shrink-0" />
                  +91 6386994478
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Site visit form */}
          <ScrollReveal
            direction="right"
            delay={300}
            className="min-w-0 lg:col-span-7"
          >
            <div className="relative rounded-2xl border border-black/10 bg-white px-4 pb-5 pt-8 shadow-xl sm:rounded-3xl sm:p-7 md:p-10">

              <div className="absolute top-0 left-1/2 z-10 w-[calc(100%-24px)] max-w-max -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c51f32] px-3 py-2 text-center text-[9px] font-medium uppercase leading-relaxed tracking-wider text-white shadow-lg sm:px-5 sm:text-[11px]">
                Limited Appointments Available
              </div>

              {submitted ? (
                <div className="space-y-4 py-10 text-center sm:py-16">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#c51f32]/30 bg-[#c51f32]/10 text-[#c51f32]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <h3 className="font-serif text-2xl text-[#22221f]">
                    Site Visit Request Received
                  </h3>

                  <p className="mx-auto max-w-md text-sm leading-7 text-stone-600">
                    Thank you,{" "}
                    <span className="font-semibold text-[#c51f32]">
                      {formData.fullName}
                    </span>
                    . Our senior architect will review your site details
                    and contact you shortly to confirm your schedule.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 min-h-[44px] rounded-full border border-black/20 px-6 py-3 text-sm text-[#22221f] transition-colors hover:bg-black hover:text-white"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

                  <div className="border-b border-black/10 pb-4">
                    <h3 className="font-serif text-xl text-[#22221f] sm:text-2xl">
                      Schedule Your Site Visit
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-stone-500 sm:text-sm">
                      Fill in the site particulars for an accurate architectural prep.
                    </p>
                  </div>

                  {/* Name and phone */}
                  <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="min-w-0">
                      <label className={labelClass}>Full Name *</label>
                      <IconInput icon={User}>
                        <input
                          type="text"
                          name="fullName"
                          autoComplete="name"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Ar. Rahul Verma"
                          className={iconInputClass}
                        />
                      </IconInput>
                    </div>

                    <div className="min-w-0">
                      <label className={labelClass}>Phone Number *</label>
                      <IconInput icon={PhoneCall}>
                        <input
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 63869 94478"
                          className={iconInputClass}
                        />
                      </IconInput>
                    </div>
                  </div>

                  {/* Email and location */}
                  <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="min-w-0">
                      <label className={labelClass}>Email Address *</label>
                      <IconInput icon={Mail}>
                        <input
                          type="email"
                          name="email"
                          autoComplete="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="hello@desig9hause.com"
                          className={iconInputClass}
                        />
                      </IconInput>
                    </div>

                    <div className="min-w-0">
                      <label className={labelClass}>Site Location / Address *</label>
                      <IconInput icon={MapPin}>
                        <input
                          type="text"
                          name="location"
                          autoComplete="street-address"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Golf City, Lucknow"
                          className={iconInputClass}
                        />
                      </IconInput>
                    </div>
                  </div>

                  {/* Property and plot area */}
                  <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="min-w-0">
                      <label className={labelClass}>Property Type</label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option>Residential Villa / Bungalow</option>
                        <option>Luxury Villa / Bungalow</option>
                        <option>Penthouse / Apartment</option>
                        <option>Commercial / Corporate Office</option>
                        <option>Hospitality / Resort</option>
                        <option>Farmhouse / Estate</option>
                      </select>
                    </div>

                    <div className="min-w-0">
                      <label className={labelClass}>Plot Size / Built-up Area</label>
                      <input
                        type="text"
                        name="plotArea"
                        value={formData.plotArea}
                        onChange={handleChange}
                        placeholder="e.g. 4,000 sq ft"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Date and time */}
                  <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="min-w-0">
                      <label className={labelClass}>Preferred Date *</label>
                      <IconInput icon={Calendar}>
                        <input
                          type="date"
                          name="preferredDate"
                          required
                          min={new Date().toLocaleDateString("en-CA")}
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className={iconInputClass}
                        />
                      </IconInput>
                    </div>

                    <div className="min-w-0">
                      <label className={labelClass}>Preferred Time Slot</label>
                      <IconInput icon={Clock}>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className={`${iconInputClass} appearance-none`}
                        >
                          <option>Morning (10 AM - 1 PM)</option>
                          <option>Afternoon (1 PM - 4 PM)</option>
                          <option>Evening (4 PM - 7 PM)</option>
                        </select>
                      </IconInput>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="min-w-0">
                    <label className={labelClass}>
                      Specific Architectural Requirements or Notes
                    </label>

                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention any specific preferences (e.g. Double height living room, Vastu orientation, Sustainable materials...)"
                      className={`${inputClass} min-h-[110px] resize-y leading-relaxed`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-[#c51f32] px-4 py-3.5 text-center text-[10px] font-semibold uppercase tracking-[0.1em] text-white shadow-lg transition-all hover:bg-[#a71929] hover:shadow-[#c51f32]/30 disabled:cursor-not-allowed disabled:opacity-50 sm:text-xs sm:tracking-widest"
                  >
                    <span>
                      {loading
                        ? "Submitting..."
                        : "Confirm Free Site Visit Request"}
                    </span>
                    {!loading && (
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    )}
                  </button>

                  <p className="text-center text-[10px] leading-relaxed text-stone-500">
                    🔒 Privacy Assured. Your contact & property information
                    remains strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= STUDIO & MAP ================= */}
      <section className="border-t border-black/[0.08] bg-white py-12 sm:py-16">
        <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1240px] min-w-0 items-center gap-7 sm:w-[calc(100%-48px)] sm:gap-10 md:grid-cols-2">

          <ScrollReveal direction="left" delay={150} className="min-w-0">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c51f32] sm:text-xs">
              Headquarters
            </span>

            <h2 className="mt-2 font-serif text-2xl leading-tight text-[#22221f] sm:text-3xl">
              Visit DESIG9 HAUSE Studio
            </h2>

            <p className="mt-3 text-sm leading-7 text-stone-600">
              If you prefer to meet at our design lab prior to the site visit,
              you are warmly invited for coffee and a preliminary studio presentation.
            </p>

            <div className="mt-6 space-y-4 text-sm text-stone-700">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c51f32]" />
                <span className="min-w-0 leading-6">
                  D / 2/187, Golf City, Bagiamau, Lucknow,
                  Uttar Pradesh 226030
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#c51f32]" />
                <a
                  href="mailto:hello@desig9hause.com"
                  className="break-all hover:text-[#c51f32]"
                >
                  hello@desig9hause.com
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={300}
            className="h-[260px] min-w-0 overflow-hidden rounded-2xl border border-black/10 sm:h-[320px] lg:h-[360px]"
          >
            <iframe
              title="Desig9 Hause Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.5639854942638!2d81.0080837!3d26.790165099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be557bede3173%3A0xfd32ddb56e54dc32!2sDesig9%20Hause!5e0!3m2!1sen!2sin!4v1791815759671!5m2!1sen!2sin"
              className="block h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="border-t border-black/[0.08] py-12 sm:py-16">
        <div className="mx-auto w-[calc(100%-32px)] max-w-[1240px] sm:w-[calc(100%-48px)]">

          <ScrollReveal
            delay={100}
            className="mx-auto mb-8 max-w-xl text-center sm:mb-12"
          >
            <HelpCircle className="mx-auto mb-2 h-6 w-6 text-[#c51f32]" />

            <h2 className="font-serif text-2xl leading-tight text-[#22221f] sm:text-3xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-2 text-xs leading-relaxed text-stone-500 sm:text-sm">
              Everything you need to know about our site visit service.
            </p>
          </ScrollReveal>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 text-sm sm:gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <ScrollReveal
                key={faq.q}
                delay={index * 100}
                className="min-w-0 space-y-2 rounded-2xl border border-black/10 bg-white p-4 shadow-sm sm:p-5"
              >
                <h3 className="text-sm font-semibold leading-relaxed text-[#22221f]">
                  {faq.q}
                </h3>

                <p className="text-xs leading-6 text-stone-600 sm:text-sm">
                  {faq.a}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
