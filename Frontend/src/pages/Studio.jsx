
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Lenis from "lenis";
import {
  ArrowUpRight,
  Compass,
  ShieldCheck,
  Ruler,
  Layers,
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

    // Respect users who prefer reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

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
        threshold: 0.05,
        rootMargin: "0px 0px 40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hiddenTransform = {
    up: "translate-y-10 sm:translate-y-20",
    left: "-translate-x-8 sm:-translate-x-16",
    right: "translate-x-8 sm:translate-x-16",
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: "2500ms",
        transitionDelay: `${delay}ms`,
      }}
      className={`min-w-0 transition-[opacity,transform] ease-out ${
        isVisible
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : `scale-[0.97] opacity-0 ${
              hiddenTransform[direction] || hiddenTransform.up
            }`
      } ${className}`}
    >
      {children}
    </div>
  );
}

const stats = [
  { label: "Practice Experience", value: "14+ Years" },
  { label: "Completed Projects", value: "1,800+" },
  { label: "Active Cities", value: "15+ Cities" },
  { label: "Design Standards", value: "100% Custom" },
];

const pillars = [
  {
    n: "01",
    title: "Listen first",
    description: "Understand people, needs and context.",
  },
  {
    n: "02",
    title: "Design clearly",
    description:
      "Let thoughtful planning and honest materials guide decisions.",
  },
  {
    n: "03",
    title: "Care about details",
    description:
      "Small decisions add up to coherent, considered spaces.",
  },
];

const materialCards = [
  {
    title: "Honest Material Palettes",
    description:
      "Using unmasked concrete, warm timbers, natural stones, and structural glazing that age gracefully over decades.",
    icon: Layers,
  },
  {
    title: "Climate Responsive Planning",
    description:
      "Optimizing cross-ventilation, thermal massing, and natural daylighting tailored to North Indian weather conditions.",
    icon: Compass,
  },
  {
    title: "Rigorous Quality Audits",
    description:
      "Multi-stage site checkups during foundation casting, brickwork, waterproofing, and final interior finishing.",
    icon: ShieldCheck,
  },
];

const processSteps = [
  {
    phase: "01",
    title: "Topographical Scoping",
    description:
      "Comprehensive on-site microclimate, soil stability, sun path, and municipal zoning analysis.",
  },
  {
    phase: "02",
    title: "Volumetric Massing & CAD",
    description:
      "Sculpting spatial flow, room adjacencies, and structural grids with high-precision 3D CAD modeling.",
  },
  {
    phase: "03",
    title: "Materiality & Luminaire Curation",
    description:
      "Hand-picking tactile natural stones, bespoke metalwork, acoustic panels, and lighting fixtures.",
  },
  {
    phase: "04",
    title: "Turnkey Site Execution",
    description:
      "Direct principal supervision on ground in Lucknow to ensure flawless translation from paper to reality.",
  },
];

const container =
  "mx-auto w-[calc(100%-32px)] max-w-[1320px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]";

const primaryButton =
  "inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#c51f32] px-5 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#a61828] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c51f32] sm:w-auto sm:px-7 sm:text-xs sm:tracking-[0.2em] lg:px-8";

const secondaryButton =
  "inline-flex min-h-12 w-full items-center justify-center gap-3 border border-white/30 bg-transparent px-5 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-white hover:text-[#22221f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:px-7 sm:text-xs sm:tracking-[0.2em] lg:px-8";

function SectionLabel({ children }) {
  return (
    <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#c51f32] [overflow-wrap:anywhere] sm:text-[11px] sm:tracking-[0.3em]">
      {children}
    </span>
  );
}

function StudioImage({
  src,
  alt,
  className = "",
  caption,
  primary = false,
}) {
  return (
    <div
      className={`group absolute overflow-hidden rounded-xl border border-white/10 bg-stone-900 shadow-2xl transition-transform duration-700 hover:scale-[1.025] ${
        primary ? "z-10" : "z-20 border-4 border-[#1c1c19]"
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover brightness-90 transition-[transform,filter] duration-1000 group-hover:scale-105 group-hover:brightness-100"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />

      <div
        className={`absolute bottom-3 left-3 max-w-[calc(100%-24px)] rounded px-2 py-1 text-[9px] font-mono uppercase tracking-[0.12em] text-white sm:bottom-4 sm:left-4 sm:px-3 sm:text-[10px] sm:tracking-widest ${
          primary ? "bg-black/60 backdrop-blur-md" : "bg-[#c51f32]"
        }`}
      >
        {caption}
      </div>
    </div>
  );
}

export default function Studio() {
  // Lenis smooth scroll with proper animation-frame cleanup
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    let animationFrameId;

    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#fbfaf7] font-sans text-[#22221f] selection:bg-[#c51f32] selection:text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden border-b border-[#c51f32]/30 bg-[#1c1c19] pb-16 pt-28 text-[#fbfaf7] sm:pb-20 sm:pt-36 md:pb-28 md:pt-40 lg:pb-40 lg:pt-48">
        <div className="pointer-events-none absolute right-[-100px] top-1/4 h-[280px] w-[280px] rounded-full bg-[#c51f32]/10 blur-[100px] sm:right-[-50px] sm:h-[450px] sm:w-[450px] sm:blur-[140px] lg:right-10 lg:h-[600px] lg:w-[600px] lg:blur-[160px]" />

        <div className="pointer-events-none absolute bottom-0 left-[-80px] h-[240px] w-[240px] rounded-full bg-white/5 blur-[90px] sm:left-10 sm:h-[350px] sm:w-[350px] sm:blur-[120px]" />

        <div
          className={`${container} relative z-10 grid min-w-0 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16`}
        >
          {/* Hero text */}
          <ScrollReveal
            direction="left"
            delay={100}
            className="min-w-0 space-y-6 sm:space-y-8 lg:col-span-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-[#c51f32] sm:w-12" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c51f32] sm:text-[11px] sm:tracking-[0.3em] md:tracking-[0.35em]">
                DESIG9 HAUSE STUDIO
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2.6rem,9vw,4rem)] font-light leading-[1.04] tracking-tight sm:text-7xl lg:text-7xl xl:text-8xl">
              Design with
              <br />
              <em className="font-serif font-normal italic text-[#c51f32]">
                intention.
              </em>
            </h1>

            <p className="max-w-xl text-sm font-light leading-7 text-stone-300 sm:text-base sm:leading-relaxed md:text-lg">
              We believe the best spaces feel considered, work beautifully
              and belong to their surroundings. Every line we draw is rooted
              in contextual clarity and uncompromising materiality.
            </p>

            <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:pt-4">
              <Link to="/contact" className={primaryButton}>
                <span>Private Commission</span>
                <ArrowUpRight size={16} className="shrink-0" />
              </Link>

              <Link to="/free-site-visit" className={secondaryButton}>
                <span>Book Free Site Visit</span>
                <Compass size={16} className="shrink-0" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Overlapping hero images */}
          <ScrollReveal
            direction="right"
            delay={300}
            className="relative mx-auto h-[340px] w-full min-w-0 max-w-[560px] sm:h-[460px] md:h-[520px] lg:col-span-6 lg:h-[470px] xl:h-[560px]"
          >
            <StudioImage
              primary
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury villa architecture"
              caption="Residential Facade"
              className="left-0 top-0 h-[72%] w-[68%] sm:h-[75%] sm:w-[65%]"
            />

            <StudioImage
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
              alt="Minimalist luxury living lounge"
              caption="Tactile Interiors"
              className="bottom-0 right-0 h-[66%] w-[66%] sm:h-[70%] sm:w-[60%]"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ================= STUDIO STATISTICS ================= */}
      <section className="border-b border-stone-200 bg-white py-8 sm:py-12">
        <div
          className={`${container} grid grid-cols-2 gap-x-3 gap-y-0 divide-y divide-stone-200 sm:gap-x-6 md:grid-cols-4 md:divide-x md:divide-y-0`}
        >
          {stats.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              delay={index * 100}
              className="flex min-w-0 flex-col items-center justify-center px-1 py-5 text-center sm:px-3 md:py-0 md:first:pl-0 md:last:pr-0"
            >
              <div className="font-serif text-2xl text-[#c51f32] sm:text-3xl md:text-4xl">
                {stat.value}
              </div>

              <div className="mt-2 text-[9px] font-mono uppercase leading-relaxed tracking-[0.1em] text-stone-500 sm:text-[10px] sm:tracking-widest md:text-xs">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ================= DESIGN PHILOSOPHY ================= */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-40">
        <div
          className={`${container} grid min-w-0 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16`}
        >
          <ScrollReveal
            direction="left"
            delay={150}
            className="group relative aspect-[4/5] min-w-0 overflow-hidden rounded-xl bg-stone-200 shadow-2xl sm:rounded-2xl lg:col-span-5"
          >
            <img
              className="h-full w-full object-cover brightness-95 transition-transform duration-1000 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"
              alt="Architecture and design philosophy"
              loading="lazy"
              decoding="async"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 space-y-2 text-white sm:bottom-6 sm:left-6 sm:right-6">
              <span className="inline-block rounded bg-white px-2 py-1 text-[9px] font-mono font-bold uppercase tracking-wider text-[#c51f32] sm:text-[10px] sm:tracking-widest">
                LUCKNOW PRACTICE
              </span>

              <p className="font-serif text-base sm:text-lg">
                Spatial Purity &amp; Contextual Harmony
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={300}
            className="min-w-0 space-y-6 sm:space-y-8 lg:col-span-7"
          >
            <SectionLabel>DESIGN PHILOSOPHY</SectionLabel>

            <h2 className="font-serif text-4xl font-light leading-[1.1] text-[#22221f] sm:text-5xl md:text-6xl">
              Less noise.
              <br />
              More{" "}
              <em className="font-normal italic text-[#c51f32]">
                meaning.
              </em>
            </h2>

            <div className="space-y-4 text-sm font-light leading-7 text-stone-600 sm:text-base sm:leading-relaxed md:text-lg">
              <p>
                DESIG9 HAUSE is a design studio focused on architecture,
                interiors and landscape concepts. Every project deserves a
                fresh perspective rather than a ready-made answer.
              </p>

              <p>
                We listen carefully, explore possibilities and bring clarity
                to complex decisions. The goal is to shape places that make
                sense for the people who use them.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 border-t border-stone-300 pt-6 sm:grid-cols-3 sm:gap-5 sm:pt-7">
              {pillars.map((pillar) => (
                <div key={pillar.n} className="min-w-0 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#c51f32]">
                    DIV // {pillar.n}
                  </span>

                  <h3 className="font-serif text-xl text-[#22221f]">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-light leading-relaxed text-stone-500 sm:text-[13px]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= MATERIAL INTEGRITY ================= */}
      <section className="border-y border-stone-300 bg-[#eeeee7] py-16 sm:py-20 md:py-28 lg:py-32">
        <div className={`${container} space-y-10 sm:space-y-14 lg:space-y-16`}>
          <div className="grid min-w-0 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <ScrollReveal
              direction="left"
              delay={100}
              className="min-w-0 space-y-4 lg:col-span-7"
            >
              <SectionLabel>MATERIAL INTEGRITY</SectionLabel>

              <h2 className="font-serif text-3xl leading-tight text-[#22221f] sm:text-5xl md:text-6xl">
                Uncompromising Craftsmanship
              </h2>

              <p className="max-w-xl text-sm font-light leading-7 text-stone-600 sm:text-base sm:leading-relaxed">
                We source directly from global and national tier-one partners
                (such as Kohler, Häfele, and Saint-Gobain) to ensure
                everlasting structural performance.
              </p>
            </ScrollReveal>

            <ScrollReveal
              direction="right"
              delay={250}
              className="min-w-0 lg:col-span-5"
            >
              <div className="relative space-y-4 overflow-hidden rounded-xl border border-stone-300 bg-white p-4 shadow-xl sm:rounded-2xl sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                  <span className="text-[10px] font-mono font-bold text-[#c51f32] sm:text-xs">
                    SPECIFIED SPECIMENS
                  </span>

                  <span className="text-[9px] font-mono text-stone-400 sm:text-[10px]">
                    GLOBAL PARTNERS
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2">
                  {[
                    { label: "Glazing", value: "Saint-Gobain Acoustic" },
                    { label: "Fittings", value: "Häfele Soft-Close" },
                    { label: "Sanitary", value: "Kohler Signature" },
                    { label: "Surface", value: "Italian Travertine" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="min-w-0 rounded-lg border border-stone-200 bg-[#fbfaf7] p-3 sm:rounded-xl sm:p-4"
                    >
                      <span className="mb-1 block text-[10px] font-mono uppercase text-stone-400">
                        {item.label}
                      </span>

                      <strong className="block break-words font-serif text-xs font-normal leading-relaxed text-[#22221f] sm:text-sm">
                        {item.value}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {materialCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.title}
                  delay={index * 150}
                  className="h-full min-w-0"
                >
                  <article className="h-full rounded-xl border border-stone-300 bg-white p-5 shadow-sm transition-colors duration-300 hover:border-[#c51f32] sm:rounded-2xl sm:p-7 lg:p-8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c51f32]/10 text-[#c51f32] sm:mb-6">
                      <Icon size={24} />
                    </div>

                    <h3 className="font-serif text-xl leading-snug text-[#22221f] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-light leading-6 text-stone-600 sm:text-[13px] sm:leading-relaxed md:text-sm">
                      {item.description}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= ARCHITECTURE PROCESS ================= */}
      <section className="relative overflow-hidden border-b border-[#c51f32]/40 bg-[#1c1c19] py-16 text-[#fbfaf7] sm:py-24 md:py-28 lg:py-32">
        <div className={`${container} relative z-10 space-y-10 sm:space-y-14 lg:space-y-16`}>
          <div className="grid min-w-0 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <ScrollReveal
              direction="left"
              delay={100}
              className="min-w-0 space-y-4 lg:col-span-7"
            >
              <SectionLabel>
                METHODOLOGY — RIGOROUS BLUEPRINT LIFECYCLE
              </SectionLabel>

              <h2 className="font-serif text-3xl font-light leading-tight sm:text-5xl md:text-6xl">
                Studio Architecture Process
              </h2>

              <p className="max-w-xl text-sm font-light leading-7 text-stone-400 sm:text-base sm:leading-relaxed">
                To achieve absolute luxury, intuition must be backed by
                engineering precision. Our 4-stage proprietary workflow
                eliminates guesswork.
              </p>
            </ScrollReveal>

            <ScrollReveal
              direction="right"
              delay={250}
              className="min-w-0 lg:col-span-5"
            >
              <div className="space-y-4 rounded-xl border border-stone-800 bg-stone-900 p-4 shadow-2xl sm:rounded-2xl sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-3">
                  <div className="flex min-w-0 items-center gap-2 text-xs font-mono text-white">
                    <Ruler className="shrink-0 text-[#c51f32]" size={16} />
                    <span>LUCKNOW STUDIO CAD</span>
                  </div>

                  <span className="shrink-0 rounded-full bg-[#c51f32] px-2.5 py-1 text-[10px] font-mono text-white">
                    SCALE 1:50
                  </span>
                </div>

                <div className="space-y-3 text-xs font-mono text-stone-400">
                  {[
                    ["STRUCTURAL VERIFICATION:", "STAGE-4 APPROVED"],
                    ["ZONING COMPLIANCE:", "100% CLEAR"],
                    ["TIMELINE GUARANTEE:", "ON SCHEDULE"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="grid min-w-0 grid-cols-1 gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-3"
                    >
                      <span className="break-words leading-relaxed">
                        {label}
                      </span>

                      <span className="break-words leading-relaxed text-white sm:text-right">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, index) => (
              <ScrollReveal
                key={step.phase}
                delay={index * 150}
                className="h-full min-w-0"
              >
                <article className="group h-full rounded-xl border border-stone-800 bg-stone-900/80 p-5 transition-colors duration-300 hover:border-[#c51f32] sm:rounded-2xl sm:p-6 lg:p-7">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#c51f32]">
                    STAGE // {step.phase}
                  </span>

                  <h3 className="mt-4 font-serif text-xl leading-snug text-white transition-colors group-hover:text-[#c51f32] sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm font-light leading-6 text-stone-400 sm:text-xs sm:leading-relaxed lg:text-[13px]">
                    {step.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION ================= */}
      <section className="bg-[#fbfaf7] py-16 sm:py-20 md:py-24 lg:py-28">
        <ScrollReveal
          direction="up"
          delay={150}
          className={`${container} flex min-w-0 flex-col items-start justify-between gap-8 border-b border-stone-300 pb-10 sm:pb-14 lg:flex-row lg:items-center lg:gap-10 lg:pb-16`}
        >
          <div className="min-w-0">
            <SectionLabel>PRIVATE COMMISSION</SectionLabel>

            <h2 className="mt-3 font-serif text-3xl leading-[1.15] text-[#22221f] sm:text-5xl md:text-6xl">
              Ready to construct your
              <br className="hidden sm:block" />
              <span className="block sm:inline"> </span>
              <em className="font-normal italic text-[#c51f32]">
                legacy landmark?
              </em>
            </h2>
          </div>

          <div className="flex w-full min-w-0 flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:w-auto lg:shrink-0">
            <Link
              to="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#22221f] px-5 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[#fbfaf7] transition-colors duration-300 hover:bg-[#c51f32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c51f32] sm:w-auto sm:px-7 sm:text-xs sm:tracking-[0.2em] lg:px-8"
            >
              <span>Consult Studio</span>
              <ArrowUpRight size={16} className="shrink-0" />
            </Link>

            <Link
              to="/free-site-visit"
              className={primaryButton}
            >
              <span>Book Free Site Visit</span>
              <Compass size={16} className="shrink-0" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
