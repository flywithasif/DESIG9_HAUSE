import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Lenis from "lenis";
import { ArrowUpRight, Sparkles, Ruler, ShieldCheck, Layers } from "lucide-react";
import { services } from "../data/services";
import ServiceCard from "../components/services/ServiceCard";

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
        transitionDuration: "2500ms", // 2.5 Seconds Duration
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

export default function Services() {
  // Initialize Lenis Smooth Scroll
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

  // EXACTLY 4 HIGH-END ARCHITECTURAL IMAGES FOR HERO COLLAGE
  const heroCollageImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85", // 1. Modern Luxury Villa
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85", // 2. Luxury Living Lounge
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85", // 3. Resort Pool Landscape
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=85"  // 4. Glass Structural Façade
  ];

  return (
    <div className="bg-[#fbfaf7] text-[#22221f] min-h-screen selection:bg-[#c51f32] selection:text-white font-sans overflow-x-hidden">
      
      {/* HERO SECTION: Exactly 4 Images Collage & 2.5s Motion */}
      <section className="relative bg-[#22221f] text-[#fbfaf7] pt-28 pb-36 md:pt-36 md:pb-48 overflow-hidden border-b border-[#c51f32]/20">
        
        {/* Technical Blueprint Drafting Grid */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fbfaf7 1px, transparent 1px),
              linear-gradient(to bottom, #fbfaf7 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        ></div>

        <div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #c51f32 0%, transparent 70%)' }}
        ></div>

        <div className="mx-auto w-[min(1320px,calc(100%-38px))] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* HERO TEXT: Left-to-Right 2.5s Motion */}
            <ScrollReveal direction="left" delay={100} className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-12 bg-[#c51f32]"></span>
                <span className="text-[11px] font-bold tracking-[.35em] uppercase text-[#c51f32] font-mono">
                  DESIG9 HAUSE // ARCHITECTURAL PRACTICE
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-serif font-light tracking-tight leading-[1.05]">
                Good ideas, <br />
                <span className="font-serif italic text-[#c51f32] font-normal">made tangible.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base md:text-lg text-stone-300 font-light leading-relaxed">
                A multidisciplinary architectural studio elevating luxury villas, corporate landmarks, and resort estates through precision drafting, spatial innovation, and immaculate execution.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-stone-800/80">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#c51f32] block font-mono">01 // VISUAL</span>
                  <p className="text-sm font-serif mt-1 text-stone-200">8K Renders & CAD</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#c51f32] block font-mono">02 // PLAN</span>
                  <p className="text-sm font-serif mt-1 text-stone-200">Façade & Elevation</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#c51f32] block font-mono">03 // EXEC</span>
                  <p className="text-sm font-serif mt-1 text-stone-200">Turnkey Support</p>
                </div>
              </div>
            </ScrollReveal>

            {/* HERO MEDIA: Exactly 4 Overlapping Images Collage (Right-to-Left 2.5s Motion) */}
            <ScrollReveal direction="right" delay={300} className="lg:col-span-6 relative h-[480px] sm:h-[560px] md:h-[600px] w-full mt-6 lg:mt-0">
              
              {/* Image Card 1: Top Right */}
              <div className="absolute top-0 right-0 w-[55%] h-[52%] rounded-sm overflow-hidden border border-stone-700/60 shadow-2xl transition-transform duration-700 hover:scale-105 z-10 group">
                <img src={heroCollageImages[0]} alt="Luxury Villa" className="w-full h-full object-cover filter brightness-90 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute bottom-2 left-3 bg-[#22221f]/80 backdrop-blur-md px-2 py-0.5 text-[9px] font-mono tracking-widest text-stone-300">
                  REF.01 // VILLA FAÇADE
                </div>
              </div>

              {/* Image Card 2: Top Left */}
              <div className="absolute top-10 left-0 w-[52%] h-[48%] rounded-sm overflow-hidden border border-[#c51f32]/40 shadow-2xl transition-transform duration-700 hover:scale-105 z-20 group">
                <img src={heroCollageImages[1]} alt="Living Lounge" className="w-full h-full object-cover filter brightness-95 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-2 right-2 bg-[#c51f32] text-white px-2 py-0.5 text-[9px] font-mono tracking-widest uppercase">
                  INTERIORS
                </div>
              </div>

              {/* Image Card 3: Center Anchor Card */}
              <div className="absolute top-[32%] left-[20%] w-[60%] h-[50%] rounded-sm overflow-hidden border-2 border-[#fbfaf7] shadow-[-20px_20px_50px_rgba(0,0,0,0.7)] z-30 group">
                <img src={heroCollageImages[2]} alt="Resort Pool" className="w-full h-full object-cover filter brightness-100 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute bottom-3 left-3 bg-[#22221f] text-[#fbfaf7] px-3 py-1 text-[10px] font-serif tracking-widest uppercase border-l-2 border-[#c51f32]">
                  RESORT LANDSCAPE
                </div>
              </div>

              {/* Image Card 4: Bottom Right */}
              <div className="absolute bottom-2 right-[6%] w-[48%] h-[38%] rounded-sm overflow-hidden border border-stone-600 shadow-2xl transition-transform duration-700 hover:scale-105 z-40 group">
                <img src={heroCollageImages[3]} alt="Glass Structural" className="w-full h-full object-cover filter brightness-90 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute bottom-2 right-2 bg-[#22221f]/90 text-stone-300 px-2 py-0.5 text-[9px] font-mono tracking-widest">
                  STRUCTURAL GLASS
                </div>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ALL 8 DIVISIONS GRID SECTION */}
      <section className="py-24 md:py-36 relative">
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #22221f 1px, transparent 1px)`,
            backgroundSize: '100px 100%'
          }}
        ></div>

        <div className="mx-auto w-[min(1320px,calc(100%-38px))] relative z-10">
          
          <div className="mb-20 border-b border-stone-300 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <ScrollReveal direction="left" delay={100}>
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[.3em] text-[#c51f32] uppercase font-mono">
                <Ruler size={14} />
                <span>SPECIFIED ARCHITECTURAL DISCIPLINES</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#22221f] mt-3">
                Curated Services & Divisions
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <p className="max-w-md text-sm md:text-base text-stone-600 font-light leading-relaxed">
                All 8 specialized architectural pillars governing structural clarity, luxurious materiality, and rigorous execution oversight.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {services.map((service, index) => (
              <ScrollReveal 
                key={service.number || index}
                delay={index * 120}
                direction="up"
              >
                <div className="transform transition-all duration-700 hover:-translate-y-2">
                  <ServiceCard service={service} />
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* DARK SECTION WITH UNIQUE ARCHITECTURAL AERO-DIAGRAM BACKGROUND */}
      <section className="bg-[#1c1c19] text-[#fbfaf7] py-28 relative overflow-hidden border-t border-b border-[#c51f32]/40">
        
        {/* Unique Architecture Aero-Diagram Background Grid */}
        <div 
          className="absolute inset-0 opacity-[0.09] pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, #c51f32 0%, transparent 60%),
              linear-gradient(0deg, transparent 24px, rgba(255,255,255,0.12) 25px, rgba(255,255,255,0.12) 26px, transparent 27px),
              linear-gradient(90deg, transparent 24px, rgba(255,255,255,0.12) 25px, rgba(255,255,255,0.12) 26px, transparent 27px)
            `,
            backgroundSize: '100% 100%, 100px 100px, 100px 100px'
          }}
        ></div>

        <div className="absolute right-[-10%] top-[-20%] w-[600px] h-[600px] rounded-full border border-[#c51f32]/20 pointer-events-none flex items-center justify-center">
          <div className="w-[450px] h-[450px] rounded-full border border-dashed border-stone-600/40"></div>
        </div>

        <div className="mx-auto w-[min(1320px,calc(100%-38px))] relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <ScrollReveal direction="left" delay={150} className="lg:col-span-7">
            <span className="text-[10px] font-bold tracking-[.3em] text-[#c51f32] uppercase font-mono">
              AERO-STRUCTURAL PRACTICE & TIMELINE GUARANTEE
            </span>
            <h3 className="text-4xl sm:text-5xl font-serif font-light mt-4 leading-tight">
              Bridging poetic spatial concepts with <span className="italic text-[#c51f32]">rigorous site execution.</span>
            </h3>
            <p className="mt-6 text-stone-400 font-light text-base leading-relaxed max-w-2xl">
              Led by Founder & Architect Sagar Vij and Interior Designer Navya Agarwal, Desig9 Hause ensures that every architectural blueprint undergoes multi-stage structural validation before execution.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-stone-800">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-[#c51f32]/10 border border-[#c51f32]/30 text-[#c51f32]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white">Transparent Execution</h4>
                  <p className="text-xs text-stone-400 font-light mt-1">Full breakdown of structural budgets and material specifications.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 bg-[#c51f32]/10 border border-[#c51f32]/30 text-[#c51f32]">
                  <Layers size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white">Photorealistic Curation</h4>
                  <p className="text-xs text-stone-400 font-light mt-1">Complete clarity on light, texture, and materials prior to construction.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={350} className="lg:col-span-5 bg-[#22221f]/90 backdrop-blur-xl border border-stone-700 p-8 sm:p-10 relative shadow-2xl">
            <div className="absolute top-4 right-4 text-[9px] font-mono text-stone-500 tracking-widest">
              [AERO-SPEC: DL-2026]
            </div>
            <Sparkles className="text-[#c51f32] mb-6" size={36} />
            <h4 className="text-2xl font-serif text-white">Initiate a Private Commission</h4>
            <p className="text-sm text-stone-400 font-light mt-3 leading-relaxed">
              Book a direct consultation with our principal architects to review site blueprints, spatial requirements, and custom timelines.
            </p>
            <Link 
              to="/contact"
              className="mt-8 inline-flex items-center justify-between w-full py-4 px-6 bg-[#c51f32] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-[#a61828]"
            >
              <span>Schedule Architectural Review</span>
              <ArrowUpRight size={16} />
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-[#fbfaf7]">
        <ScrollReveal direction="up" delay={150} className="mx-auto w-[min(1320px,calc(100%-38px))] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-stone-300 pb-16">
          <div>
            <span className="text-[10px] font-bold tracking-[.3em] text-[#c51f32] uppercase font-mono">NEXT STEPS</span>
            <h2 className="mt-3 text-4xl sm:text-6xl font-serif text-[#22221f]">
              Let's craft your <br />
              <em className="font-serif italic text-[#c51f32] font-normal">signature space.</em>
            </h2>
          </div>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-4 bg-[#22221f] text-[#fbfaf7] px-9 py-5 text-xs font-semibold uppercase tracking-[.2em] transition-all duration-300 hover:bg-[#c51f32]"
          >
            Talk to the studio <ArrowUpRight size={18}/>
          </Link>
        </ScrollReveal>
      </section>

    </div>
  );
}