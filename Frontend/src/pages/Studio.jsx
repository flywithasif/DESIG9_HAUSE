import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Lenis from "lenis";
import { ArrowUpRight, Sparkles, Compass, ShieldCheck, Ruler, Layers, Award, Building, CheckCircle2, Shield, Eye } from "lucide-react";

// Premium 2.5 Seconds (2500ms) Scroll Reveal Wrapper Component
function ScrollReveal({ children, className = "", delay = 0, direction = "up" }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  let transformHidden = "translate-y-20 scale-95";
  if (direction === "left") transformHidden = "-translate-x-16 scale-95";
  if (direction === "right") transformHidden = "translate-x-16 scale-95";

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: "2500ms", // Exactly 2.5 Seconds Motion Duration
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out transform ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${transformHidden} pointer-events-none`
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Studio() {
  // Initialize Lenis Smooth Scroll & Page Reset
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#fbfaf7] text-[#22221f] min-h-screen selection:bg-[#c51f32] selection:text-white font-sans overflow-x-hidden">
      
      {/* ================= HERO SECTION WITH OVERLAPPING HOVER-ZOOM IMAGES ================= */}
      <section className="relative bg-[#1c1c19] text-[#fbfaf7] pt-36 pb-32 md:pt-48 md:pb-44 border-b border-[#c51f32]/30 overflow-hidden">
        {/* Ambient Luxury Glows */}
        <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-[#c51f32]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto w-[min(1320px,calc(100%-38px))] relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT HERO TEXT */}
          <ScrollReveal direction="left" delay={100} className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-12 bg-[#c51f32]"></span>
              <span className="text-[11px] font-bold tracking-[.35em] uppercase text-[#c51f32] font-mono">
                DESIG9 HAUSE STUDIO
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light tracking-tight leading-[1.04]">
              Design with <br />
              <em className="font-serif italic text-[#c51f32] font-normal">intention.</em>
            </h1>

            <p className="text-base md:text-lg text-stone-300 font-light leading-relaxed max-w-xl">
              We believe the best spaces feel considered, work beautifully and belong to their surroundings[cite: 1]. Every line we draw is rooted in contextual clarity and uncompromising materiality.
            </p>

            {/* TWO DISTINCT BUTTONS WITH DIFFERENT LINKS */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-[#c51f32] text-white px-8 py-4 text-xs font-semibold uppercase tracking-[.25em] transition-all hover:bg-[#a61828]"
              >
                <span>Private Commission</span>
                <ArrowUpRight size={16} />
              </Link>

              <Link 
                to="/free-site-visit" 
                className="inline-flex items-center gap-3 bg-transparent border border-white/30 text-white px-8 py-4 text-xs font-semibold uppercase tracking-[.25em] transition-all hover:bg-white hover:text-[#22221f]"
              >
                <span>Book Free Site Visit</span>
                <Compass size={16} />
              </Link>
            </div>
          </ScrollReveal>

          {/* RIGHT HERO OVERLAPPING LUXURY IMAGES WITH HOVER ZOOM */}
          <ScrollReveal direction="right" delay={300} className="lg:col-span-6 relative h-[480px] sm:h-[560px] w-full">
            
            {/* Image 1: Primary Back/Left Overlapping Image */}
            <div className="absolute top-0 left-0 w-[65%] h-[75%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-700 hover:scale-105 hover:z-30 group cursor-pointer bg-stone-900">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Villa Architecture" 
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-110 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 text-white text-[10px] font-mono tracking-widest uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded">
                RESIDENTIAL FACADE
              </div>
            </div>

            {/* Image 2: Secondary Front/Right Overlapping Image with Hover Zoom */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[70%] rounded-2xl overflow-hidden shadow-[-20px_20px_60px_rgba(0,0,0,0.8)] border-4 border-[#1c1c19] transition-all duration-700 hover:scale-105 hover:z-40 group cursor-pointer bg-stone-900 z-20">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" 
                alt="Minimalist Living Lounge" 
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-110 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 text-white text-[10px] font-mono tracking-widest uppercase bg-[#c51f32] px-3 py-1 rounded">
                TACTILE INTERIORS
              </div>
            </div>

          </ScrollReveal>

        </div>
      </section>

      {/* ================= STUDIO STATS COUNTER BAR ================= */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="mx-auto w-[min(1320px,calc(100%-38px))] grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-200">
          {[
            { label: "Practice Experience", value: "14+ Years" },
            { label: "Completed Projects", value: "1,800+" },
            { label: "Active Cities", value: "15+ Cities" },
            { label: "Design Standards", value: "100% Custom" }
          ].map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} direction="up" className="text-center pt-4 md:pt-0">
              <div className="text-3xl md:text-4xl font-serif text-[#c51f32]">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-stone-500 mt-1 font-mono">{stat.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ================= DESIGN PHILOSOPHY EDITORIAL SECTION ================= */}
      <section className="py-28 md:py-40 relative">
        <div className="mx-auto w-[min(1320px,calc(100%-38px))] grid lg:grid-cols-12 gap-16 items-center">
          
          <ScrollReveal direction="left" delay={150} className="lg:col-span-5 aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl relative group bg-stone-200">
            <img 
              className="size-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-1000" 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
              alt="Design Philosophy Practice" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c51f32] bg-white px-2 py-0.5 rounded font-bold">LUCKNOW PRACTICE</span>
              <p className="text-sm font-serif">Spatial Purity & Contextual Harmony</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={300} className="lg:col-span-7 space-y-8">
            <span className="text-[10px] font-bold tracking-[.3em] text-[#c51f32] uppercase font-mono">DESIGN PHILOSOPHY</span>
            
            <h2 className="text-4xl sm:text-6xl font-serif font-light leading-[1.1] text-[#22221f]">
              Less noise. <br />
              More <em className="font-serif italic text-[#c51f32] font-normal">meaning.</em>
            </h2>

            <div className="space-y-4 text-base md:text-lg text-stone-600 font-light leading-relaxed">
              <p>
                DESIG9 HAUSE is a design studio focused on architecture, interiors and landscape concepts. Every project deserves a fresh perspective rather than a ready-made answer[cite: 1].
              </p>
              <p>
                We listen carefully, explore possibilities and bring clarity to complex decisions. The goal is to shape places that make sense for the people who use them[cite: 1].
              </p>
            </div>

            {/* 3 Core Pillars Minimalist Row */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-stone-300">
              {[
                { n: "01", t: "Listen first", p: "Understand people, needs and context[cite: 1]." },
                { n: "02", t: "Design clearly", p: "Let thoughtful planning and honest materials guide decisions[cite: 1]." },
                { n: "03", t: "Care about details", p: "Small decisions add up to coherent, considered spaces[cite: 1]." }
              ].map(v => (
                <div key={v.n} className="space-y-2">
                  <span className="text-xs font-mono text-[#c51f32] font-bold">DIV // {v.n}</span>
                  <h4 className="font-serif text-xl text-[#22221f]">{v.t}</h4>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">{v.p}</p>
                </div>
              ))}
            </div>

          </ScrollReveal>

        </div>
      </section>

      {/* ================= MATERIAL AUTHENTICITY & SUSTAINABILITY (FIXED BLANK RIGHT SIDE) ================= */}
      <section className="bg-[#eeeee7] py-24 md:py-32 border-t border-b border-stone-300">
        <div className="mx-auto w-[min(1320px,calc(100%-38px))] space-y-16">
          
          {/* HEADER ROW WITH VISUAL CARD ON THE RIGHT TO FILL BLANK SPACE */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <ScrollReveal direction="left" delay={100} className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-bold tracking-[.3em] text-[#c51f32] uppercase font-mono">MATERIAL INTEGRITY</span>
              <h2 className="text-4xl sm:text-6xl font-serif text-[#22221f] leading-tight">Uncompromising Craftsmanship</h2>
              <p className="text-base text-stone-600 font-light leading-relaxed max-w-xl">
                We source directly from global and national tier-one partners (such as Kohler, Häfele, and Saint-Gobain) to ensure everlasting structural performance.
              </p>
            </ScrollReveal>

            {/* RIGHT SIDE ADDITION FOR MATERIAL SECTION */}
            <ScrollReveal direction="right" delay={250} className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-white border border-stone-300 shadow-xl space-y-4 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                  <span className="text-xs font-mono font-bold text-[#c51f32]">SPECIFIED SPECIMENS</span>
                  <span className="text-[10px] font-mono text-stone-400">GLOBAL PARTNERS</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-[#fbfaf7] rounded-xl border border-stone-200">
                    <span className="text-[10px] font-mono text-stone-400 uppercase block">Glazing</span>
                    <strong className="text-xs text-[#22221f] font-serif">Saint-Gobain Acoustic</strong>
                  </div>
                  <div className="p-3 bg-[#fbfaf7] rounded-xl border border-stone-200">
                    <span className="text-[10px] font-mono text-stone-400 uppercase block">Fittings</span>
                    <strong className="text-xs text-[#22221f] font-serif">Häfele Soft-Close</strong>
                  </div>
                  <div className="p-3 bg-[#fbfaf7] rounded-xl border border-stone-200">
                    <span className="text-[10px] font-mono text-stone-400 uppercase block">Sanitary</span>
                    <strong className="text-xs text-[#22221f] font-serif">Kohler Signature</strong>
                  </div>
                  <div className="p-3 bg-[#fbfaf7] rounded-xl border border-stone-200">
                    <span className="text-[10px] font-mono text-stone-400 uppercase block">Surface</span>
                    <strong className="text-xs text-[#22221f] font-serif">Italian Travertine</strong>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* 3 CARDS ROW */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Honest Material Palettes",
                desc: "Using unmasked concrete, warm timbers, natural stones, and structural glazing that age gracefully over decades.",
                icon: Layers
              },
              {
                title: "Climate Responsive Planning",
                desc: "Optimizing cross-ventilation, thermal massing, and natural daylighting tailored to North Indian weather conditions.",
                icon: Compass
              },
              {
                title: "Rigorous Quality Audits",
                desc: "Multi-stage site checkups during foundation casting, brickwork, waterproofing, and final interior finishing.",
                icon: ShieldCheck
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150} direction="up" className="p-8 bg-white border border-stone-300 rounded-2xl shadow-sm hover:border-[#c51f32] transition-colors">
                <div className="p-3 rounded-xl bg-[#c51f32]/10 text-[#c51f32] w-fit mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="font-serif text-2xl text-[#22221f]">{item.title}</h3>
                <p className="text-xs md:text-sm text-stone-600 font-light mt-3 leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ================= UNIQUE STUDIO ARCHITECTURE PROCESS (FIXED BLANK RIGHT SIDE) ================= */}
      <section className="bg-[#1c1c19] text-[#fbfaf7] py-32 relative overflow-hidden border-b border-[#c51f32]/40">
        <div className="mx-auto w-[min(1320px,calc(100%-38px))] relative z-10 space-y-16">
          
          {/* HEADER ROW WITH CAD SPECIFICATION BADGE ON THE RIGHT TO FILL BLANK SPACE */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <ScrollReveal direction="left" delay={100} className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-bold tracking-[.3em] text-[#c51f32] uppercase font-mono">
                METHODOLOGY - RIGOROUS BLUEPRINT LIFECYCLE
              </span>
              <h2 className="text-4xl sm:text-6xl font-serif font-light leading-tight">
                Studio Architecture Process
              </h2>
              <p className="text-stone-400 font-light text-base leading-relaxed max-w-xl">
                To achieve absolute luxury, intuition must be backed by engineering precision. Our 4-stage proprietary workflow eliminates guesswork.
              </p>
            </ScrollReveal>

            {/* RIGHT SIDE ADDITION FOR PROCESS SECTION */}
            <ScrollReveal direction="right" delay={250} className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-white">
                    <Ruler className="text-[#c51f32]" size={16} />
                    <span>LUCKNOW STUDIO CAD</span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-[#c51f32] text-white rounded-full">SCALE 1:50</span>
                </div>
                
                <div className="text-xs text-stone-400 space-y-2 font-mono">
                  <div className="flex justify-between"><span>STRUCTURAL VERIFICATION:</span> <span className="text-white">STAGE-4 APPROVED</span></div>
                  <div className="flex justify-between"><span>ZONING COMPLIANCE:</span> <span className="text-white">100% CLEAR</span></div>
                  <div className="flex justify-between"><span>TIMELINE GUARANTEE:</span> <span className="text-white">ON SCHEDULE</span></div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* 4 PROCESS STAGES GRID */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: "01",
                title: "Topographical Scoping",
                desc: "Comprehensive on-site microclimate, soil stability, sun path, and municipal zoning analysis."
              },
              {
                phase: "02",
                title: "Volumetric Massing & CAD",
                desc: "Sculpting spatial flow, room adjacencies, and structural grids with high-precision 3D CAD modeling."
              },
              {
                phase: "03",
                title: "Materiality & Luminaire Curation",
                desc: "Hand-picking tactile natural stones, bespoke metalwork, acoustic panels, and lighting fixtures."
              },
              {
                phase: "04",
                title: "Turnkey Site Execution",
                desc: "Direct principal supervision on ground in Lucknow to ensure flawless translation from paper to reality."
              }
            ].map((step, idx) => (
              <ScrollReveal key={step.phase} delay={idx * 150} direction="up" className="p-8 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-[#c51f32] transition-colors group">
                <span className="text-xs font-mono text-[#c51f32] font-bold tracking-widest">STAGE // {step.phase}</span>
                <h3 className="font-serif text-2xl text-white mt-4 group-hover:text-[#c51f32] transition-colors">{step.title}</h3>
                <p className="text-xs text-stone-400 font-light mt-3 leading-relaxed">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CALL TO ACTION SECTION (WITH TWO SEPARATE LINKS) ================= */}
      <section className="py-28 bg-[#fbfaf7]">
        <ScrollReveal direction="up" delay={150} className="mx-auto w-[min(1320px,calc(100%-38px))] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border-b border-stone-300 pb-16">
          <div>
            <span className="text-[10px] font-bold tracking-[.3em] text-[#c51f32] uppercase font-mono">PRIVATE COMMISSION</span>
            <h2 className="mt-3 text-4xl sm:text-6xl font-serif text-[#22221f]">
              Ready to construct your <br />
              <em className="font-serif italic text-[#c51f32] font-normal">legacy landmark?</em>
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-[#22221f] text-[#fbfaf7] px-8 py-4 text-xs font-semibold uppercase tracking-[.2em] transition-all duration-300 hover:bg-[#c51f32]"
            >
              <span>Consult Studio</span>
              <ArrowUpRight size={16}/>
            </Link>

            <Link 
              to="/free-site-visit" 
              className="inline-flex items-center gap-3 bg-[#c51f32] text-white px-8 py-4 text-xs font-semibold uppercase tracking-[.2em] transition-all duration-300 hover:bg-[#a71929]"
            >
              <span>Book Free Site Visit</span>
              <Compass size={16}/>
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}