
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Lenis from "lenis";
import {
  ArrowUpRight,
  Sparkles,
  Ruler,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { services } from "../data/services";
import ServiceCard from "../components/services/ServiceCard";

// Premium 2.5-second scroll reveal
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

    // Respect reduced-motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hiddenTransform = {
    up: "translate-y-8 sm:translate-y-12",
    left: "-translate-x-6 sm:-translate-x-12",
    right: "translate-x-6 sm:translate-x-12",
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: "2500ms",
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
      className={`min-w-0 transition-[opacity,transform] ease-out ${
        isVisible
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : `scale-[0.98] opacity-0 ${
              hiddenTransform[direction] || hiddenTransform.up
            }`
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Services() {
  // Lenis smooth scroll with proper animation-frame cleanup
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.5,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Exactly four architectural hero images
  const heroCollageImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=85",
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-[#fbfaf7] font-sans text-[#22221f] selection:bg-[#c51f32] selection:text-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#c51f32]/20 bg-[#22221f] pb-16 pt-24 text-[#fbfaf7] sm:pb-24 sm:pt-28 md:pb-32 md:pt-32 lg:pb-40 lg:pt-36">

        {/* Blueprint grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fbfaf7 1px, transparent 1px),
              linear-gradient(to bottom, #fbfaf7 1px, transparent 1px)
            `,
            backgroundSize: "clamp(32px, 5vw, 80px) clamp(32px, 5vw, 80px)",
          }}
        />

        {/* Burgundy ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl sm:-right-40 sm:-top-40 sm:h-[600px] sm:w-[600px]"
          style={{
            background:
              "radial-gradient(circle, #c51f32 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-[1320px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">

          <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8">

            {/* HERO CONTENT */}
            <ScrollReveal
              direction="left"
              delay={100}
              className="min-w-0 lg:col-span-6"
            >
              <div className="mb-5 flex flex-wrap items-center gap-2.5 sm:mb-6 sm:gap-3">
                <span className="h-px w-7 shrink-0 bg-[#c51f32] sm:w-12" />

                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#c51f32] sm:text-[10px] sm:tracking-[0.25em] md:text-[11px] md:tracking-[0.3em]">
                  DESIG9 HAUSE // ARCHITECTURAL PRACTICE
                </span>
              </div>

              <h1 className="break-words font-serif text-[clamp(2.65rem,8.5vw,4.5rem)] font-light leading-[1.06] tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
                Good ideas,
                <br />
                <span className="font-serif font-normal italic text-[#c51f32]">
                  made tangible.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm font-light leading-7 text-stone-300 sm:mt-7 sm:text-base sm:leading-8 md:mt-8 md:text-lg">
                A multidisciplinary architectural studio elevating luxury
                villas, corporate landmarks, and resort estates through
                precision drafting, spatial innovation, and immaculate
                execution.
              </p>

              {/* Three service highlights */}
              <div className="mt-7 grid grid-cols-3 gap-2 border-t border-stone-800/80 pt-5 sm:mt-9 sm:gap-4 sm:pt-7 md:mt-10 md:pt-8">
                <div className="min-w-0">
                  <span className="block break-words font-mono text-[9px] uppercase tracking-wider text-[#c51f32] sm:text-[10px] sm:tracking-widest">
                    01 // VISUAL
                  </span>
                  <p className="mt-1 text-xs leading-5 text-stone-200 sm:text-sm">
                    8K Renders & CAD
                  </p>
                </div>

                <div className="min-w-0">
                  <span className="block break-words font-mono text-[9px] uppercase tracking-wider text-[#c51f32] sm:text-[10px] sm:tracking-widest">
                    02 // PLAN
                  </span>
                  <p className="mt-1 text-xs leading-5 text-stone-200 sm:text-sm">
                    Façade & Elevation
                  </p>
                </div>

                <div className="min-w-0">
                  <span className="block break-words font-mono text-[9px] uppercase tracking-wider text-[#c51f32] sm:text-[10px] sm:tracking-widest">
                    03 // EXEC
                  </span>
                  <p className="mt-1 text-xs leading-5 text-stone-200 sm:text-sm">
                    Turnkey Support
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* FOUR-IMAGE COLLAGE */}
            <ScrollReveal
              direction="right"
              delay={250}
              className="relative mx-auto mt-1 h-[340px] w-full max-w-[560px] min-w-0 sm:mt-2 sm:h-[460px] md:h-[540px] lg:col-span-6 lg:mt-0 lg:h-[560px] xl:h-[600px]"
            >
              {/* Image 1 */}
              <div className="group absolute right-0 top-0 z-10 h-[47%] w-[55%] overflow-hidden rounded-sm border border-stone-700/60 shadow-2xl transition-transform duration-700 hover:scale-[1.03] sm:h-[52%]">
                <img
                  src={heroCollageImages[0]}
                  alt="Modern luxury villa architecture"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover brightness-90 transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute bottom-1.5 left-1.5 max-w-[95%] bg-[#22221f]/85 px-1.5 py-1 font-mono text-[7px] tracking-wider text-stone-200 sm:bottom-2 sm:left-3 sm:px-2 sm:text-[9px]">
                  REF.01 // VILLA FAÇADE
                </div>
              </div>

              {/* Image 2 */}
              <div className="group absolute left-0 top-[8%] z-20 h-[43%] w-[52%] overflow-hidden rounded-sm border border-[#c51f32]/40 shadow-2xl transition-transform duration-700 hover:scale-[1.03] sm:top-[7%] sm:h-[48%]">
                <img
                  src={heroCollageImages[1]}
                  alt="Luxury interior living lounge"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover brightness-95 transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute right-1.5 top-1.5 bg-[#c51f32] px-1.5 py-1 text-[7px] uppercase tracking-wider text-white sm:right-2 sm:top-2 sm:px-2 sm:text-[9px]">
                  INTERIORS
                </div>
              </div>

              {/* Image 3: Main anchor */}
              <div className="group absolute left-[20%] top-[31%] z-30 h-[46%] w-[60%] overflow-hidden rounded-sm border-2 border-[#fbfaf7] shadow-2xl sm:top-[32%] sm:h-[50%]">
                <img
                  src={heroCollageImages[2]}
                  alt="Luxury resort pool and landscape design"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute bottom-1.5 left-1.5 max-w-[calc(100%-12px)] border-l-2 border-[#c51f32] bg-[#22221f]/95 px-2 py-1 text-[8px] uppercase tracking-wider text-[#fbfaf7] sm:bottom-3 sm:left-3 sm:px-3 sm:text-[10px] sm:tracking-widest">
                  RESORT LANDSCAPE
                </div>
              </div>

              {/* Image 4 */}
              <div className="group absolute bottom-[3%] right-[5%] z-40 h-[34%] w-[48%] overflow-hidden rounded-sm border border-stone-600 shadow-2xl transition-transform duration-700 hover:scale-[1.03] sm:bottom-[2%] sm:h-[38%]">
                <img
                  src={heroCollageImages[3]}
                  alt="Contemporary glass architectural structure"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover brightness-90 transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute bottom-1.5 right-1.5 max-w-[95%] bg-[#22221f]/90 px-1.5 py-1 font-mono text-[7px] tracking-wider text-stone-200 sm:bottom-2 sm:right-2 sm:px-2 sm:text-[9px]">
                  STRUCTURAL GLASS
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICES & DIVISIONS */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-36">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #22221f 1px, transparent 1px)",
            backgroundSize: "clamp(40px, 6vw, 100px) 100%",
          }}
        />

        <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-[1320px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">

          {/* Section heading */}
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-stone-300 pb-7 sm:mb-14 sm:gap-6 sm:pb-9 md:mb-16 md:flex-row md:items-end lg:mb-20 lg:pb-10">
            <ScrollReveal direction="left" delay={100} className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#c51f32] sm:text-[10px] sm:tracking-[0.25em] md:tracking-[0.3em]">
                <Ruler size={14} className="shrink-0" />
                <span>SPECIFIED ARCHITECTURAL DISCIPLINES</span>
              </div>

              <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight text-[#22221f] sm:text-4xl md:text-5xl lg:text-6xl">
                Curated Services & Divisions
              </h2>
            </ScrollReveal>

            <ScrollReveal
              direction="right"
              delay={200}
              className="min-w-0 md:max-w-sm lg:max-w-md"
            >
              <p className="text-sm font-light leading-7 text-stone-600 sm:text-base">
                All 8 specialized architectural pillars governing structural
                clarity, luxurious materiality, and rigorous execution
                oversight.
              </p>
            </ScrollReveal>
          </div>

          {/* Responsive service grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:gap-x-12 lg:gap-y-16 xl:gap-x-16 xl:gap-y-20">
            {services.map((service, index) => (
              <ScrollReveal
                key={service.number || index}
                delay={index * 120}
                direction="up"
                className="min-w-0"
              >
                <div className="min-w-0 transition-transform duration-700 md:hover:-translate-y-2">
                  <ServiceCard service={service} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL PROCESS & CONSULTATION */}
      <section className="relative overflow-hidden border-y border-[#c51f32]/40 bg-[#1c1c19] py-16 text-[#fbfaf7] sm:py-20 md:py-24 lg:py-28">

        {/* Technical background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, #c51f32 0%, transparent 60%),
              linear-gradient(0deg, transparent 24px, rgba(255,255,255,0.12) 25px, rgba(255,255,255,0.12) 26px, transparent 27px),
              linear-gradient(90deg, transparent 24px, rgba(255,255,255,0.12) 25px, rgba(255,255,255,0.12) 26px, transparent 27px)
            `,
            backgroundSize: "100% 100%, 80px 80px, 80px 80px",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 -top-28 flex h-[350px] w-[350px] items-center justify-center rounded-full border border-[#c51f32]/20 sm:-right-48 sm:h-[500px] sm:w-[500px] lg:right-[-10%] lg:top-[-20%] lg:h-[600px] lg:w-[600px]"
        >
          <div className="h-[75%] w-[75%] rounded-full border border-dashed border-stone-600/40" />
        </div>

        <div className="relative z-10 mx-auto grid w-[calc(100%-32px)] max-w-[1320px] grid-cols-1 items-center gap-10 sm:w-[calc(100%-48px)] sm:gap-12 md:gap-14 lg:w-[calc(100%-64px)] lg:grid-cols-12 lg:gap-10">

          {/* Execution philosophy */}
          <ScrollReveal
            direction="left"
            delay={150}
            className="min-w-0 lg:col-span-7"
          >
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#c51f32] sm:text-[10px] sm:tracking-[0.25em] md:tracking-[0.3em]">
              AERO-STRUCTURAL PRACTICE & TIMELINE GUARANTEE
            </span>

            <h3 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              Bridging poetic spatial concepts with{" "}
              <span className="italic text-[#c51f32]">
                rigorous site execution.
              </span>
            </h3>

            <p className="mt-5 max-w-2xl text-sm font-light leading-7 text-stone-400 sm:mt-6 sm:text-base sm:leading-8">
              Led by Founder & Architect Sagar Vij and Interior Designer
              Navya Agarwal, Desig9 Hause ensures that every architectural
              blueprint undergoes multi-stage structural validation before
              execution.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-6 border-t border-stone-800 pt-6 sm:mt-9 sm:grid-cols-2 sm:gap-5 sm:pt-8 lg:mt-10 lg:gap-6">

              <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                <div className="shrink-0 border border-[#c51f32]/30 bg-[#c51f32]/10 p-2 text-[#c51f32]">
                  <ShieldCheck size={20} />
                </div>

                <div className="min-w-0">
                  <h4 className="font-serif text-lg text-white">
                    Transparent Execution
                  </h4>
                  <p className="mt-1 text-xs font-light leading-6 text-stone-400 sm:text-sm">
                    Full breakdown of structural budgets and material
                    specifications.
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                <div className="shrink-0 border border-[#c51f32]/30 bg-[#c51f32]/10 p-2 text-[#c51f32]">
                  <Layers size={20} />
                </div>

                <div className="min-w-0">
                  <h4 className="font-serif text-lg text-white">
                    Photorealistic Curation
                  </h4>
                  <p className="mt-1 text-xs font-light leading-6 text-stone-400 sm:text-sm">
                    Complete clarity on light, texture, and materials prior
                    to construction.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Consultation card */}
          <ScrollReveal
            direction="right"
            delay={300}
            className="relative min-w-0 border border-stone-700 bg-[#22221f]/95 p-5 shadow-2xl sm:p-8 md:p-10 lg:col-span-5"
          >
            <div className="absolute right-3 top-3 font-mono text-[8px] tracking-wider text-stone-500 sm:right-4 sm:top-4 sm:text-[9px] sm:tracking-widest">
              [AERO-SPEC: DL-2026]
            </div>

            <Sparkles
              className="mb-5 mt-5 text-[#c51f32] sm:mb-6 sm:mt-3"
              size={32}
            />

            <h4 className="font-serif text-2xl text-white sm:text-3xl">
              Initiate a Private Commission
            </h4>

            <p className="mt-3 text-sm font-light leading-7 text-stone-400">
              Book a direct consultation with our principal architects to
              review site blueprints, spatial requirements, and custom
              timelines.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex min-h-14 w-full items-center justify-between gap-3 bg-[#c51f32] px-4 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#a61828] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c51f32] sm:mt-8 sm:px-6 sm:text-xs sm:tracking-widest"
            >
              <span>Schedule Architectural Review</span>
              <ArrowUpRight size={18} className="shrink-0" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-[#fbfaf7] py-16 sm:py-20 md:py-24">
        <ScrollReveal
          direction="up"
          delay={150}
          className="mx-auto flex w-[calc(100%-32px)] max-w-[1320px] flex-col items-start justify-between gap-7 border-b border-stone-300 pb-10 sm:w-[calc(100%-48px)] sm:gap-8 sm:pb-12 md:flex-row md:items-center md:gap-10 lg:w-[calc(100%-64px)] lg:pb-16"
        >
          <div className="min-w-0">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#c51f32] sm:tracking-[0.3em]">
              NEXT STEPS
            </span>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#22221f] sm:text-5xl md:text-5xl lg:text-6xl">
              Let's craft your
              <br />
              <em className="font-serif font-normal italic text-[#c51f32]">
                signature space.
              </em>
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex min-h-14 w-full items-center justify-between gap-5 bg-[#22221f] px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#fbfaf7] transition-colors duration-300 hover:bg-[#c51f32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c51f32] sm:w-auto sm:justify-center sm:px-8 sm:tracking-[0.2em] md:px-9"
          >
            <span>Talk to the studio</span>
            <ArrowUpRight size={18} className="shrink-0" />
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
