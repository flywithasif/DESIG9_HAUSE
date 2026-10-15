
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Compass,
  Building2,
  ShieldCheck,
  Ruler,
  Crosshair,
  CheckCircle2,
  HardHat,
  Truck,
  FileCheck,
  Check,
} from "lucide-react";

export default function Team() {
  const [activeTab, setActiveTab] = useState(0);

  const teamMembers = [
    {
      name: "Sagar Vij",
      role: "Founder & Principal Architect",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
      bio: "Leading Desig9 Hause with 15+ years of mastery in monolithic forms and structural balance.",
      expertise: [
        "Master Planning",
        "Elevation",
        "Sustainable Design",
      ],
      experience: "15+ Yrs Exp.",
    },
    {
      name: "Navya Agarwal",
      role: "Lead Interior Designer",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      bio: "Crafting spatial sanctuaries with tactile materials, bespoke joinery, and warm ambiance.",
      expertise: [
        "Spatial Styling",
        "Custom Joinery",
        "Lighting Ambiance",
      ],
      experience: "12+ Yrs Exp.",
    },
    {
      name: "Ar. Kabir Mehta",
      role: "Senior Structural Head",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
      bio: "Ensuring structural engineering precision and blueprint execution across luxury landmarks.",
      expertise: [
        "Structural CAD",
        "Blueprinting",
        "Site Execution",
      ],
      experience: "14+ Yrs Exp.",
    },
    {
      name: "Rhea Sen",
      role: "Landscape Architect",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      bio: "Integrating biophilic courtyards, water elements, and exterior landscapes for luxury living.",
      expertise: [
        "Biophilic Design",
        "Hardscape",
        "Outdoor Lighting",
      ],
      experience: "10+ Yrs Exp.",
    },
  ];

  const guaranteeTabs = [
    {
      id: "effortless",
      title: "Buy & Build, Effortlessly",
      badge: "SINGLE POINT OF CONTACT",
      subTitle:
        "Our Project Managers manage everything, as a single point of contact",
    },
    {
      id: "price",
      title: "Best Price Guarantee",
      badge: "BEST PRICE GUARANTEE",
      subTitle:
        "Transparent structural costing with zero hidden markups",
    },
    {
      id: "materials",
      title: "Genuine Materials Only",
      badge: "GENUINE MATERIALS ONLY",
      subTitle:
        "Curated 100% authentic materials directly sourced from luxury brands",
    },
    {
      id: "precision",
      title: "Precision by Trusted Experts",
      badge: "PRECISION BY TRUSTED EXPERTS",
      subTitle:
        "Multi-stage site quality audits by licensed principal architects",
    },
  ];

  const processNodes = [
    {
      title: "Architects",
      sub: "Design that inspires",
      icon: Compass,
    },
    {
      title: "Engineers",
      sub: "Structural excellence",
      icon: Ruler,
    },
    {
      title: "Contractors",
      sub: "Quality execution",
      icon: HardHat,
    },
    {
      title: "Material Suppliers",
      sub: "Curated & genuine",
      icon: Truck,
    },
    {
      title: "Site Supervisors",
      sub: "On-ground assurance",
      icon: FileCheck,
    },
  ];

  const philosophyItems = [
    {
      title: "Contextual Integrity",
      description:
        "Every design originates from site parameters, natural lighting orientation, and client lifestyle preferences.",
      icon: Compass,
    },
    {
      title: "Integrated Practice",
      description:
        "Architecture, interior styling, lighting design, and execution managed seamlessly under one roof.",
      icon: Building2,
    },
    {
      title: "Craft & Detail",
      description:
        "Precision drafting and material curation delivering long-term architectural permanence.",
      icon: Sparkles,
    },
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-[#fbfaf7] font-sans text-[#22221f] selection:bg-[#c51f32]/20 selection:text-[#c51f32]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden border-b border-black/10 py-16 sm:py-20 md:py-24 lg:py-28">

        {/* Architectural Blueprint Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30 sm:opacity-40"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#22221f_1px,transparent_1px),linear-gradient(to_bottom,#22221f_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px] lg:bg-[size:64px_64px]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#c51f32_1px,transparent_1px),linear-gradient(to_bottom,#c51f32_1px,transparent_1px)] bg-[size:160px_160px] opacity-20 sm:bg-[size:240px_240px] lg:bg-[size:320px_320px]" />
        </div>

        {/* CAD Markings */}
        <div className="absolute left-6 top-6 hidden text-[10px] font-mono tracking-widest text-[#22221f]/40 md:block lg:left-12 lg:top-12">
          AXIS_X: 28°41&apos;10&quot;N // CAD_GRID_01
        </div>

        <div className="absolute bottom-6 right-6 hidden text-[10px] font-mono tracking-widest text-[#c51f32]/60 md:block lg:bottom-8 lg:right-12">
          SCALE 1:50 // ARCHITECTURAL DRAFT
        </div>

        {/* Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/4 top-1/4 h-56 w-56 rounded-full bg-[#c51f32]/10 blur-[90px] sm:h-80 sm:w-80 lg:h-[450px] lg:w-[450px] lg:blur-[140px]"
        />

        <div className="relative z-10 mx-auto grid w-[calc(100%-32px)] max-w-[1280px] items-center gap-8 sm:w-[calc(100%-48px)] sm:gap-10 md:gap-12 lg:grid-cols-12 lg:gap-8 lg:w-[min(1280px,calc(100%-48px))]">

          {/* LEFT: Architectural Image Collage */}
          <div className="relative mx-auto h-[300px] w-full max-w-[500px] animate-[slideFromLeft_1.5s_cubic-bezier(0.16,1,0.3,1)_forwards] sm:h-[400px] md:h-[460px] lg:col-span-6 lg:h-[480px] lg:max-w-none">

            <div className="absolute left-0 top-0 z-10 h-[76%] w-[69%] overflow-hidden rounded-xl border border-black/15 shadow-xl sm:rounded-2xl sm:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                alt="Architectural Villa Exterior"
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute bottom-1 right-0 z-20 h-[57%] w-[53%] overflow-hidden rounded-xl border-2 border-[#fbfaf7] shadow-xl sm:bottom-2 sm:right-2 sm:rounded-2xl sm:border-4 sm:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
                alt="Interior Design Masterpiece"
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Architectural Note */}
            <div className="absolute right-0 top-[30%] z-30 max-w-[155px] rounded-lg border border-white/10 bg-[#22221f]/95 p-2.5 text-[#fbfaf7] shadow-xl backdrop-blur-md sm:right-0 sm:max-w-[210px] sm:rounded-xl sm:p-4">
              <div className="mb-1 flex items-center gap-1.5 text-[9px] font-mono text-[#c51f32] sm:gap-2 sm:text-[11px]">
                <Crosshair className="h-3.5 w-3.5 shrink-0 animate-spin-slow sm:h-4 sm:w-4" />
                <span>ARCH_SPEC_04</span>
              </div>

              <p className="font-serif text-[10px] leading-snug text-stone-300 sm:text-[11px]">
                Precision Structural Execution & Spatial Harmony
              </p>
            </div>
          </div>

          {/* RIGHT: Heading & Description */}
          <div className="space-y-5 text-left animate-[slideFromRight_1.5s_cubic-bezier(0.16,1,0.3,1)_forwards] sm:space-y-6 lg:col-span-6 lg:pl-6">

            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#c51f32]/20 bg-[#c51f32]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#c51f32] sm:px-4 sm:text-xs sm:tracking-[0.25em]">
              <Sparkles className="h-4 w-4 shrink-0" />
              <span>Studio Principal Collective</span>
            </div>

            <h1 className="font-serif text-4xl font-light leading-[1.08] tracking-tight text-[#22221f] min-[380px]:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[76px]">
              Architectural
              <br />
              <span className="font-normal italic text-[#c51f32]">
                Visionaries.
              </span>
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base">
              Desig9 Hause is led by a tight-knit principal team of structural
              engineers, interior designers, and architects dedicated to
              crafting iconic built environments.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1 sm:gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-black/5 bg-white px-3 py-2 text-[10px] shadow-sm sm:text-xs">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#c51f32]" />
                <span>Licensed Architects</span>
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-black/5 bg-white px-3 py-2 text-[10px] shadow-sm sm:text-xs">
                <Ruler className="h-4 w-4 shrink-0 text-[#c51f32]" />
                <span>Turnkey Execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM PROFILES ================= */}
      <section className="relative bg-white/60 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-[calc(100%-32px)] max-w-[1280px] sm:w-[calc(100%-48px)]">

          <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-14 lg:mb-16">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c51f32] sm:text-xs">
              Leadership Council
            </span>

            <h2 className="font-serif text-3xl text-[#22221f] sm:text-4xl md:text-5xl">
              Meet The 4 Principals
            </h2>

            <p className="text-xs leading-relaxed text-stone-600 sm:text-sm">
              Direct studio leadership overseeing design, engineering, and
              execution.
            </p>
          </div>

          {/* 1 Column Mobile, 2 Tablet, 4 Desktop */}
          <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6">
            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                className="group flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg shadow-black/[0.02] transition-all duration-500 hover:border-[#c51f32]/50 hover:shadow-xl"
              >
                <div>
                  <div className="relative h-[300px] overflow-hidden bg-stone-100 min-[480px]:h-[260px] sm:h-[320px] lg:h-[300px] xl:h-[340px]">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                    <div className="absolute bottom-4 left-3 right-3 text-left sm:left-4 sm:right-4">
                      <span className="mb-1 inline-block rounded-full bg-[#c51f32] px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-white">
                        {member.experience}
                      </span>

                      <h3 className="break-words font-serif text-xl font-medium leading-snug text-white sm:text-2xl">
                        {member.name}
                      </h3>

                      <p className="mt-1 text-[10px] leading-relaxed text-stone-300 sm:text-xs">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 text-left sm:p-5">
                    <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-stone-600">
                      {member.bio}
                    </p>

                    <div className="space-y-2 border-t border-black/10 pt-4">
                      <span className="block text-[9px] font-semibold uppercase tracking-widest text-stone-400">
                        Core Focus
                      </span>

                      <div className="flex flex-wrap gap-1.5">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="max-w-full break-words rounded-md border border-black/10 bg-[#fbfaf7] px-2 py-1 text-[10px] text-stone-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-black/5 bg-stone-50/50 p-4 sm:p-5 sm:pt-3">
                  <span className="text-[10px] italic text-stone-400 sm:text-[11px]">
                    Desig9 Hause
                  </span>

                  <Link
                    to="/contact"
                    className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-md text-xs font-semibold text-[#c51f32] transition-colors hover:text-[#991524] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c51f32]"
                  >
                    Consult <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GUARANTEES SECTION ================= */}
      <section className="relative overflow-hidden border-t border-black/10 bg-[#fbfaf7] py-14 sm:py-20 lg:py-24">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#22221f_1px,transparent_1px),linear-gradient(to_bottom,#22221f_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 sm:bg-[size:48px_48px] sm:opacity-20"
        />

        <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-[1280px] sm:w-[calc(100%-48px)]">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8">

            {/* LEFT: Interactive Tabs */}
            <div className="space-y-6 text-left sm:space-y-8 lg:col-span-5">
              <div>
                <h2 className="font-serif text-4xl font-light leading-tight text-[#22221f] sm:text-5xl md:text-6xl">
                  Absolutely
                  <br />
                  <span className="font-semibold">Guaranteed</span>
                </h2>

                <p className="mt-4 max-w-md text-xs leading-relaxed text-stone-600 sm:text-sm">
                  Everything you need — handled with precision, transparency,
                  and complete peace of mind.
                </p>
              </div>

              <div
                className="space-y-3"
                role="group"
                aria-label="Project guarantees"
              >
                {guaranteeTabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    type="button"
                    aria-pressed={activeTab === idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex min-h-12 w-full items-center justify-between gap-3 rounded-full border px-4 py-3 text-left text-xs font-medium transition-all duration-300 sm:px-5 sm:py-3.5 sm:text-sm ${
                      activeTab === idx
                        ? "border-[#c51f32] bg-[#c51f32] text-white shadow-lg shadow-[#c51f32]/20 sm:translate-x-1"
                        : "border-transparent bg-stone-200/60 text-stone-700 hover:bg-stone-300/50"
                    }`}
                  >
                    <span className="min-w-0 break-words">{tab.title}</span>

                    <ArrowRight
                      size={16}
                      className={`shrink-0 transition-transform duration-300 ${
                        activeTab === idx
                          ? "translate-x-1"
                          : "opacity-40"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: Dynamic Diagram */}
            <div className="flex min-h-[360px] min-w-0 flex-col items-center justify-center rounded-2xl border border-black/10 bg-white p-4 shadow-xl sm:min-h-[420px] sm:rounded-3xl sm:p-6 md:p-8 lg:col-span-7 lg:p-10 xl:p-12">

              <div className="mb-6 max-w-md text-center sm:mb-8">
                <h3 className="font-serif text-base font-medium leading-relaxed text-[#22221f] sm:text-xl">
                  {guaranteeTabs[activeTab].subTitle}
                </h3>
              </div>

              <div className="w-full min-w-0">

                {/* Active Guarantee Badge */}
                <div className="mb-6 flex justify-center sm:mb-8">
                  <div className="flex max-w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c51f32] to-[#991524] px-3 py-2 text-center text-[9px] font-bold uppercase tracking-wider text-white shadow-md sm:px-5 sm:text-xs">
                    <CheckCircle2 size={15} className="shrink-0" />
                    <span>{guaranteeTabs[activeTab].badge}</span>
                  </div>
                </div>

                {/* TAB 0: Single Point of Contact */}
                {activeTab === 0 && (
                  <div
                    key="effortless"
                    className="space-y-6 animate-[fadeIn_0.5s_ease-in-out] sm:space-y-8"
                  >
                    <div className="flex justify-center">
                      <div className="relative flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-black/10 bg-[#fbfaf7] p-2 text-center shadow-xl sm:h-28 sm:w-28">
                        <div className="font-serif text-xs font-bold text-[#c51f32] sm:text-sm">
                          DESIG9 HAUSE
                        </div>
                        <div className="mt-0.5 font-mono text-[9px] uppercase tracking-widest text-stone-500">
                          ASSIST
                        </div>
                      </div>
                    </div>

                    <div className="relative w-full border-t-2 border-dashed border-stone-300">
                      <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c51f32]" />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-center sm:grid-cols-3 sm:gap-3 xl:grid-cols-5">
                      {processNodes.map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.title}
                            className="flex min-h-[110px] min-w-0 flex-col items-center justify-center rounded-xl border border-black/5 bg-[#fbfaf7] p-2.5 sm:min-h-[125px] sm:p-3"
                          >
                            <Icon className="mb-2 h-5 w-5 shrink-0 text-[#c51f32]" />

                            <div className="break-words text-[11px] font-semibold leading-snug text-[#22221f] sm:text-xs">
                              {item.title}
                            </div>

                            <div className="mt-1 text-[9px] leading-relaxed text-stone-500">
                              {item.sub}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* TAB 1: Best Price Guarantee */}
                {activeTab === 1 && (
                  <div
                    key="price"
                    className="space-y-6 animate-[fadeIn_0.5s_ease-in-out] sm:space-y-8"
                  >
                    <div className="flex justify-center">
                      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-[#c51f32] bg-[#22221f] p-2 text-center text-white shadow-xl sm:h-28 sm:w-28">
                        <div className="font-mono text-xs font-bold text-[#c51f32]">
                          DESIG9
                        </div>
                        <div className="text-[9px] text-stone-300">
                          PRICE LOCK
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-3">
                      <div className="rounded-xl border border-black/5 bg-stone-100 p-3 text-center">
                        <div className="text-xs text-stone-500">
                          Contractor A
                        </div>
                        <div className="mt-1 font-mono text-xs font-bold text-stone-700">
                          ₹3,32,000
                        </div>
                      </div>

                      <div className="rounded-xl border border-[#c51f32]/40 bg-[#c51f32]/10 p-3 text-center shadow-md">
                        <div className="text-xs font-semibold text-[#c51f32]">
                          Desig9 Matched
                        </div>
                        <div className="mt-1 font-mono text-sm font-bold text-[#c51f32]">
                          ₹3,20,000
                        </div>
                      </div>

                      <div className="rounded-xl border border-black/5 bg-stone-100 p-3 text-center">
                        <div className="text-xs text-stone-500">
                          Contractor C
                        </div>
                        <div className="mt-1 font-mono text-xs font-bold text-stone-700">
                          ₹3,28,000
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-center text-xs font-semibold leading-relaxed text-emerald-800">
                      <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span>Matched Best Price Guarantee Secured</span>
                    </div>
                  </div>
                )}

                {/* TAB 2: Genuine Materials */}
                {activeTab === 2 && (
                  <div
                    key="materials"
                    className="space-y-6 animate-[fadeIn_0.5s_ease-in-out] sm:space-y-8"
                  >
                    <div className="flex justify-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#c51f32] bg-[#fbfaf7] text-center shadow-xl sm:h-28 sm:w-28">
                        <span className="font-serif text-xs font-bold text-[#22221f]">
                          AUTHENTIC
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                      {[
                        "HAVELLS",
                        "Jaduar",
                        "SAMSUNG",
                        "asianpaints",
                        "LG",
                      ].map((brand) => (
                        <div
                          key={brand}
                          className="max-w-full break-words rounded-xl border border-black/10 bg-[#fbfaf7] px-3 py-2 text-center font-mono text-[10px] font-bold text-stone-700 shadow-sm sm:px-4 sm:text-xs"
                        >
                          {brand}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 3: Quality Audit */}
                {activeTab === 3 && (
                  <div
                    key="precision"
                    className="space-y-6 animate-[fadeIn_0.5s_ease-in-out] sm:space-y-8"
                  >
                    <div className="flex justify-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#c51f32] bg-[#22221f] text-white shadow-xl sm:h-28 sm:w-28">
                        <ShieldCheck className="h-8 w-8 text-[#c51f32]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
                      {[
                        "CAD Verification",
                        "Load Test",
                        "Finish Check",
                        "Final Handover",
                      ].map((check) => (
                        <div
                          key={check}
                          className="flex min-h-[88px] flex-col items-center justify-center rounded-xl border border-black/10 bg-[#fbfaf7] p-3 text-center"
                        >
                          <CheckCircle2 className="mb-2 h-4 w-4 shrink-0 text-[#c51f32]" />

                          <div className="text-[10px] font-semibold leading-relaxed text-stone-800 sm:text-[11px]">
                            {check}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STUDIO PHILOSOPHY ================= */}
      <section className="border-t border-black/[0.08] bg-white py-12 sm:py-16">
        <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1280px] grid-cols-1 gap-4 sm:w-[calc(100%-48px)] sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-8">
          {philosophyItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="space-y-3 rounded-xl border border-black/5 bg-[#fbfaf7] p-5 text-left transition-colors duration-300 hover:border-[#c51f32]/30 sm:p-6"
              >
                <Icon className="h-5 w-5 text-[#c51f32]" />

                <h4 className="font-serif text-base text-[#22221f] sm:text-lg">
                  {item.title}
                </h4>

                <p className="text-xs leading-relaxed text-stone-600 sm:text-sm">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes slideFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.98);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[slideFromLeft_1\\.5s_cubic-bezier\\(0\\.16\\,1\\,0\\.3\\,1\\)_forwards\\],
          .animate-\\[slideFromRight_1\\.5s_cubic-bezier\\(0\\.16\\,1\\,0\\.3\\,1\\)_forwards\\] {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}
