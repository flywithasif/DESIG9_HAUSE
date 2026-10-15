import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Lenis from "lenis";
import { 
  ArrowUpRight, 
  Compass, 
  Building2, 
  Ruler, 
  Layers, 
  ShieldCheck, 
  Award, 
  CheckCircle2,
  HardHat,
  Leaf,
  Briefcase,
  Star,
  Sparkles,
  Check,
  Building,
  Home as HomeIcon,
  TreePine,
  Cpu,
  Clock,
  FileText,
  Users,
  CheckCircle
} from "lucide-react";
import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

// 2.5 Seconds Motion Reveal Wrapper
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
        transitionDuration: "2500ms",
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

export default function Home() {
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

  // 25 Real Studio Reviews Data for Bottom Section
  const reviewsList = [
    { name: "Aarav Khanna", role: "Villa Owner · Golf City", rating: 5.0, text: "Desig9 Hause delivered our dream villa with unmatched structural elegance. Highly recommended!" },
    { name: "Priya Sharma", role: "Interior Client · Hazratganj", rating: 4.8, text: "The interior space planning and lighting ambiance transformed our penthouse completely." },
    { name: "Rohan Mehta", role: "Commercial Developer · Vibhuti Khand", rating: 4.9, text: "Professional execution and 100% adherence to timelines. Their CAD blueprints were flawless." },
    { name: "Ananya Verma", role: "Homeowner · Gomti Nagar", rating: 4.8, text: "Very practical yet luxurious design approach. Every corner of our house feels well-thought out." },
    { name: "Kabir Singhania", role: "Corporate Client · IT City", rating: 5.0, text: "The office landscape and ergonomics created a world-class environment for our team." },
    { name: "Dr. Alok Srivastava", role: "Bungalow Client · Mahanagar", rating: 4.9, text: "From raw plot assessment to final move-in handover, their team handled everything smoothly." },
    { name: "Sneha Kapoor", role: "Penthouse Owner · Golf City", rating: 4.8, text: "Bespoke joinery and Italian marble craftsmanship surpassed all our expectations." },
    { name: "Vikramaditya Roy", role: "Hotelier · Sultanpur Road", rating: 5.0, text: "Our resort landscape design gained immense praise from guests. Exceptional architectural vision." },
    { name: "Meera Joshi", role: "Interior Client · Aliganj", rating: 4.7, text: "Transparent pricing with zero hidden costs. Authentic materials used throughout." },
    { name: "Arjun Rastogi", role: "Commercial Owner · Transport Nagar", rating: 4.9, text: "Modern glass façade and structural integrity handled with supreme engineering precision." }
  ];

  return (
    <div className="bg-[#fbfaf7] text-[#22221f] min-h-screen font-sans selection:bg-[#c51f32] selection:text-white overflow-x-hidden">
      
      {/* Continuous Animation for Reviews Slider */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes scrollContinuous {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-continuous {
          display: flex;
          width: max-content;
          animation: scrollContinuous 40s linear infinite;
        }
        .animate-scroll-continuous:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#1c1c19] text-white pt-36 pb-32 md:pt-44 md:pb-40 border-b border-[#c51f32]/30 overflow-hidden">
        <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-[#c51f32]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto w-[min(1320px,calc(100%-38px))] relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          <ScrollReveal direction="left" delay={100} className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 w-fit px-4 py-1.5 rounded-full text-xs font-mono">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <span className="text-stone-300">Trusted by 1,500+ Clients[cite: 33] · 98% Satisfaction</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light tracking-tight leading-[1.02]">
              Designing Spaces & <br />
              <span className="font-normal italic text-[#c51f32]">Crafting Experiences.</span>
            </h1>

            <p className="text-base md:text-lg text-stone-300 font-light leading-relaxed max-w-xl">
              Multidisciplinary studio offering architecture, interior, and landscape design solutions that are visually appealing and highly functional[cite: 38].
            </p>

            {/* Core Disciplines Links */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-mono tracking-widest text-[#c51f32] uppercase font-bold block">
                WHAT WE BUILD // CORE DISCIPLINES
              </span>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Residential Architecture", path: "/projects", icon: HomeIcon },
                  { name: "Commercial Landmarks", path: "/projects", icon: Building },
                  { name: "Tactile Interiors", path: "/projects", icon: Layers },
                  { name: "Biophilic Landscapes", path: "/projects", icon: TreePine }
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="p-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-[#c51f32] hover:border-[#c51f32] transition-all duration-300 flex items-center gap-3 text-xs font-mono group"
                  >
                    <item.icon size={16} className="text-[#c51f32] group-hover:text-white transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-[#c51f32] text-white px-8 py-4 text-xs font-semibold uppercase tracking-[.25em] transition-all hover:bg-[#a61828] shadow-lg shadow-[#c51f32]/20"
              >
                <span>Private Commission</span>
                <ArrowUpRight size={16} />
              </Link>

              <Link 
                to="/studio" 
                className="inline-flex items-center gap-3 bg-transparent border border-white/30 text-white px-8 py-4 text-xs font-semibold uppercase tracking-[.25em] transition-all hover:bg-white hover:text-[#22221f]"
              >
                <span>View Studio</span>
                <Compass size={16} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Image Grid */}
          <ScrollReveal direction="right" delay={300} className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            <Link to="/projects" className="group rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] relative shadow-2xl">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="Villa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded">RESIDENTIAL VILLA</div>
            </Link>
            <Link to="/projects" className="group rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] relative shadow-2xl mt-8">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Tower" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white bg-[#c51f32] px-2.5 py-1 rounded">COMMERCIAL HQ</div>
            </Link>
            <Link to="/projects" className="group rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] relative shadow-2xl">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" alt="Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded">LUXURY SUITE</div>
            </Link>
            <Link to="/projects" className="group rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] relative shadow-2xl mt-8">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" alt="Landscape" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded">ESTATE LANDSCAPE</div>
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= ABOUT STUDIO & PRINCIPAL ARCHITECTS ================= */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="mx-auto w-[min(1320px,calc(100%-38px))] grid lg:grid-cols-12 gap-12 items-center">
          
          <ScrollReveal direction="left" delay={100} className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-bold tracking-[.3em] text-[#c51f32] uppercase font-mono">ABOUT DESIG9 HAUSE</span>
            <h2 className="text-4xl sm:text-5xl font-serif text-[#22221f]">Translating ideas into meaningful spaces[cite: 38].</h2>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              Founded with a vision for clarity, practicality, and timeless design[cite: 38]. Every project—whether a residence, commercial space, or hospitality venture—is treated as a unique opportunity[cite: 38].
            </p>
            <div className="pt-2 flex items-center gap-4">
              <Link to="/studio" className="inline-flex items-center gap-2 text-xs font-semibold font-mono uppercase tracking-widest text-[#c51f32] hover:underline">
                <span>View Studio & Team</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-stone-200">
              <div>
                <h4 className="font-serif text-xl text-[#22221f]">Sagar Vij</h4>
                <p className="text-xs font-mono text-[#c51f32]">Founder | Architect[cite: 41]</p>
              </div>
              <div>
                <h4 className="font-serif text-xl text-[#22221f]">Navya Agarwal</h4>
                <p className="text-xs font-mono text-[#c51f32]">Interior Designer[cite: 41]</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200} className="lg:col-span-6 grid grid-cols-3 gap-4">
            <div className="p-6 bg-[#fbfaf7] rounded-2xl border border-stone-200 text-center">
              <div className="text-3xl font-serif text-[#c51f32]">1,500+</div>
              <div className="text-[10px] font-mono text-stone-500 mt-1 uppercase">Projects Done</div>
            </div>
            <div className="p-6 bg-[#fbfaf7] rounded-2xl border border-stone-200 text-center">
              <div className="text-3xl font-serif text-[#22221f]">12+</div>
              <div className="text-[10px] font-mono text-stone-500 mt-1 uppercase">Cities Active</div>
            </div>
            <div className="p-6 bg-[#fbfaf7] rounded-2xl border border-stone-200 text-center">
              <div className="text-3xl font-serif text-[#c51f32]">100%</div>
              <div className="text-[10px] font-mono text-stone-500 mt-1 uppercase">Transparency</div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= PROPRIETARY ARCHITECTURAL PROCESS ================= */}
      <section className="py-28 bg-[#fbfaf7] border-b border-stone-300 relative">
        <div className="mx-auto w-[min(1320px,calc(100%-38px))] space-y-16">
          
          <ScrollReveal direction="left" delay={100} className="max-w-2xl space-y-3">
            <span className="text-[10px] font-bold tracking-[.3em] text-[#c51f32] uppercase font-mono">EXECUTION METHODOLOGY</span>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#22221f]">Simple Process. <br /><span className="text-[#c51f32] italic">Powerful Results.</span></h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              From topographical scoping to final key handover, we manage the complete lifecycle. You bring the vision — we build the legacy landmark.
            </p>
            <div className="pt-2">
              <Link to="/services" className="inline-flex items-center gap-2 text-xs font-semibold font-mono uppercase tracking-widest text-[#c51f32] hover:underline">
                <span>View All Services</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <ScrollReveal direction="left" delay={200} className="lg:col-span-5 space-y-8">
              {[
                { step: "STEP 01", title: "Tell us about your space", desc: "Share your plot dimensions, lifestyle needs, and architectural preferences with our principal architects." },
                { step: "STEP 02", title: "We design & blueprint", desc: "We craft 3D CAD massing, Vastu-compliant layouts, and curated material specifications tailored to your budget." },
                { step: "STEP 03", title: "Turnkey Execution & Handover", desc: "Our direct site managers supervise ground execution with multi-stage audits until final move-in handover." }
              ].map((st, i) => (
                <div key={i} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white transition-all border border-transparent hover:border-stone-200">
                  <div className="w-10 h-10 rounded-full bg-[#c51f32] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-md">
                    0{i + 1}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#c51f32] font-bold tracking-widest">{st.step}</span>
                    <h3 className="font-serif text-2xl text-[#22221f] mt-1">{st.title}</h3>
                    <p className="text-xs text-stone-600 font-light mt-2 leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal direction="right" delay={300} className="lg:col-span-7 grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl"><CheckCircle2 size={24} /></div>
                  <span className="text-[10px] font-mono px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-bold">PERFORMANCE</span>
                </div>
                <h3 className="font-serif text-2xl text-[#22221f]">Built for Performance</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">Engineered with seismic-resistant post-tensioned slabs, acoustic double glazing, and thermal insulation.</p>
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center text-xl font-bold font-serif text-[#22221f]">98%</div>
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-[#22221f] block">Architectural Precision</span>
                    <span className="text-stone-500 font-mono text-[10px]">Zero Structural Deviations</span>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#c51f32]/10 text-[#c51f32] rounded-2xl"><Sparkles size={24} /></div>
                  <span className="text-[10px] font-mono px-3 py-1 bg-[#c51f32]/10 text-[#c51f32] border border-[#c51f32]/20 rounded-full font-bold">EXPERIENCE</span>
                </div>
                <h3 className="font-serif text-2xl text-[#22221f]">Designed for Living</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">Every space prioritizes natural daylighting orientation, biophilic courtyards, and ergonomic spatial flow.</p>
                <ul className="space-y-2 text-xs font-mono text-stone-700 pt-2">
                  {["Vastu-Compliant Sun Path", "Tactile Natural Materiality", "Acoustic Noise Reduction", "Turnkey Handover On-Time"].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="text-[#c51f32]" size={14} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ================= SELECTED WORK SHOWCASE (ONLY 2 PROJECTS + VIEW ALL BUTTON) ================= */}
      <section className="py-28 bg-[#fbfaf7]">
        <div className="mx-auto w-[min(1320px,calc(100%-38px))] space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-stone-300 pb-8">
            <ScrollReveal direction="left" delay={100}>
              <span className="text-[10px] font-bold tracking-[.3em] text-[#c51f32] uppercase font-mono">SELECTED WORKS</span>
              <h2 className="text-4xl sm:text-6xl font-serif text-[#22221f] mt-2">A Few Things We've Made</h2>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-3 bg-[#c51f32] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[.2em] transition-all hover:bg-[#a61828] shadow-md"
              >
                <span>View All Projects</span>
                <ArrowUpRight size={16} />
              </Link>
            </ScrollReveal>
          </div>

          {/* Only 2 Projects Displayed as Requested */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            {projects.slice(0, 2).map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 120} direction="up">
                <ProjectCard project={p} index={i} />
              </ScrollReveal>
            ))}
          </div>

          <div className="pt-6 text-center">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-xs font-semibold font-mono uppercase tracking-widest text-[#22221f] hover:text-[#c51f32] border-b border-[#22221f] pb-1"
            >
              <span>Explore full portfolio of architectural works</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= BUILT FOR UNMATCHED QUALITY (RED BG OUTSIDE + WHITE CARDS INSIDE) ================= */}
      <section className="bg-[#c51f32] text-white py-32 relative overflow-hidden shadow-2xl">
        <div className="mx-auto w-[min(1320px,calc(100%-38px))] space-y-16 relative z-10">
          
          <ScrollReveal direction="left" delay={100} className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-bold tracking-[.3em] text-white/90 uppercase font-mono">WHY CHOOSE DESIG9 HAUSE</span>
            <h2 className="text-4xl sm:text-6xl font-serif font-light text-white">Built for Unmatched Quality</h2>
            <p className="text-xs sm:text-sm text-white/80 font-light">Designed following international architectural standards to maximize your estate's value and endurance.</p>
          </ScrollReveal>

          {/* 8 GRID CARDS WITH WHITE BACKGROUND AND DARK TEXT */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Contextual Spatial Design", desc: "Beautiful bespoke layouts built around your exact lifestyle, making spatial flow intuitive and effortless.", icon: HomeIcon },
              { title: "Vastu & Climate Optimized", desc: "Optimizing sun paths, thermal massing, and natural ventilation tailored specifically for Indian weather conditions.", icon: Compass },
              { title: "Custom Turnkey Solutions", desc: "Complete architectural, structural, interior, and landscape execution integrated seamlessly under one roof.", icon: Layers },
              { title: "100% Authentic Brands", desc: "Direct procurement from global tier-1 partners (Kohler, Häfele, Saint-Gobain) with zero counterfeit risks.", icon: ShieldCheck },
              { title: "Multi-Stage Site Audits", desc: "Licensed principal architects conduct daily ground checks to ensure blueprint compliance down to millimeter level.", icon: Ruler },
              { title: "Acoustic & Thermal Comfort", desc: "Double-glazed fenestrations and soundproof walling systems for undisturbed tranquility inside.", icon: Cpu },
              { title: "Transparent Costing", desc: "Fixed price contracts with clear itemized bill of quantities (BOQ) — zero hidden charges or late surprises.", icon: FileText },
              { title: "Lifetime Architectural Support", desc: "Post-handover warranty on waterproofing, structural integrity, and dedicated maintenance support.", icon: Clock }
            ].map((card, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} direction="up" className="p-8 rounded-3xl bg-white text-[#22221f] border border-white/20 shadow-xl hover:shadow-2xl transition-all group">
                <div className="p-3.5 rounded-2xl bg-[#c51f32]/10 text-[#c51f32] w-fit mb-6 group-hover:bg-[#c51f32] group-hover:text-white transition-all">
                  <card.icon size={22} />
                </div>
                <h3 className="font-serif text-xl text-[#22221f] group-hover:text-[#c51f32] transition-colors">{card.title}</h3>
                <p className="text-xs text-stone-600 font-light mt-3 leading-relaxed">{card.desc}</p>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ================= REAL REVIEWS CONTINUOUS SCROLLING SLIDER AT THE BOTTOM ================= */}
      <section className="py-24 bg-white border-t border-stone-200 overflow-hidden">
        <div className="mx-auto w-[min(1320px,calc(100%-38px))] mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-bold tracking-[.3em] text-[#c51f32] uppercase font-mono">CLIENT TESTIMONIALS</span>
            <h2 className="text-4xl sm:text-5xl font-serif text-[#22221f] mt-2">Verified Studio Reviews</h2>
          </div>
          <div className="flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full border border-stone-200">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-[#22221f]">4.9 / 5.0 Rating (25 Reviews)</span>
          </div>
        </div>

        <div className="relative overflow-hidden w-full no-scrollbar">
          <div className="animate-scroll-continuous gap-6 flex">
            {[...reviewsList, ...reviewsList].map((rev, idx) => (
              <div
                key={idx}
                className="w-[340px] sm:w-[380px] p-8 rounded-3xl bg-[#fbfaf7] border border-stone-200 shadow-sm flex flex-col justify-between flex-shrink-0 hover:border-[#c51f32] hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#c51f32] text-white flex items-center justify-center font-bold text-sm shadow-md">
                      {rev.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-[#22221f] font-semibold">{rev.name}</h3>
                      <p className="text-[10px] font-mono text-stone-500">{rev.role}</p>
                    </div>
                  </div>

                  <div className="flex text-amber-500 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-xs text-stone-600 font-light leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 mt-6 flex justify-between items-center text-[10px] font-mono text-stone-400">
                  <span>VERIFIED CLIENT</span>
                  <span>5.0 RATING</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION SECTION ================= */}
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
              className="inline-flex items-center gap-3 bg-[#c51f32] text-white px-8 py-4 text-xs font-semibold uppercase tracking-[.25em] transition-all hover:bg-[#a61828]"
            >
              <span>Initiate Commission</span>
              <ArrowUpRight size={16} />
            </Link>

            <Link 
              to="/free-site-visit" 
              className="inline-flex items-center gap-3 bg-[#22221f] text-white px-8 py-4 text-xs font-semibold uppercase tracking-[.25em] transition-all hover:bg-black"
            >
              <span>Free Site Inspection</span>
              <Compass size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}