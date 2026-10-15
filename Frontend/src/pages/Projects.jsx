import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Lenis from "lenis";
import { 
  ArrowUpRight, 
  Sparkles, 
  Ruler, 
  Compass, 
  Layers, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  HardHat,
  Truck,
  FileCheck,
  Check
} from "lucide-react";
import { projects, projectCategories } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

// 2.5 Seconds Cinematic Scroll Reveal Component
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

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [activeTab, setActiveTab] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState({ cardIndex: null, itemIndex: null });

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

  const filtered = useMemo(
    () => (category === "All" ? projects : projects.filter((p) => p.category === category)),
    [category]
  );

  // 25 Real Client Reviews Data
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
    { name: "Arjun Rastogi", role: "Commercial Owner · Transport Nagar", rating: 4.9, text: "Modern glass façade and structural integrity handled with supreme engineering precision." },
    { name: "Nikhil Tandon", role: "Villa Client · Nirala Nagar", rating: 4.8, text: "Vastu compliant sun-path planning gave our villa abundant daylighting and natural cooling." },
    { name: "Ritu Agrawal", role: "Apartment Owner · Hazratganj", rating: 5.0, text: "Top-tier bathroom fixtures and acoustic ceiling design. Truly a 5-star experience." },
    { name: "Siddharth Malhotra", role: "Workspace Client · Extension", rating: 4.9, text: "Acoustic pods and custom conference tables added immense value to our office branding." },
    { name: "Pooja Trivedi", role: "Villa Client · Sushant Golf City", rating: 4.8, text: "Their site supervisors were on ground daily. Zero stress for us during construction!" },
    { name: "Gaurav Saxena", role: "Commercial Client · Chowk", rating: 4.9, text: "Timely delivery and innovative space optimization. Desig9 Hause is Lucknow's best." },
    { name: "Divya Mishra", role: "Interior Client · Indira Nagar", rating: 4.8, text: "Warm ambient lights, textured wallpapers, and plush seating created a cozy luxury lounge." },
    { name: "Karan Malhotra", role: "Farmhouse Owner · Raebareli Road", rating: 5.0, text: "Bio-climatic pergolas and outdoor fire-pits made our farmhouse weekend getaway perfect." },
    { name: "Tarun Bhalla", role: "Corporate Client · Gomti Nagar", rating: 4.9, text: "Sleek glass partitions and ergonomic Miller chairs transformed our corporate office." },
    { name: "Shalini Gupta", role: "Villa Client · Jankipuram", rating: 4.8, text: "Attention to detail in custom wardrobes and kitchen joinery is commendable." },
    { name: "Deepak Yadav", role: "Commercial Complex Owner", rating: 4.9, text: "The double-height entryway and elevation lighting gave our building an iconic look." },
    { name: "Neha Dwivedi", role: "Landscape Client · Gomti Nagar", rating: 4.7, text: "Beautiful garden pathways and soothing water fountains. Exceptional landscape work." },
    { name: "Aakash Pandey", role: "Apartment Client · Hazratganj", rating: 4.9, text: "Smart switches, safety doors, and invisible grills installed with absolute neatness." },
    { name: "Vandana Seth", role: "Bungalow Owner · Golf City", rating: 5.0, text: "Principal architects Sagar Vij and Navya Agarwal gave personal attention to our project." },
    { name: "Manish Tripathi", role: "Workspace Client · IT City", rating: 4.8, text: "Great energy efficiency and modern spatial flow. Delivered right on schedule." },
    { name: "Rajnish Shukla", role: "Estate Owner · Sultanpur Road", rating: 4.9, text: "Uncompromising quality and seamless execution. The best architectural investment." }
  ];

  // Guarantee Tabs Configuration
  const guaranteeTabs = [
    {
      id: "effortless",
      title: "Buy & Build, Effortlessly",
      badge: "SINGLE POINT OF CONTACT",
      subTitle: "Our Project Managers manage everything, as a single point of contact"
    },
    {
      id: "price",
      title: "Best Price Guarantee",
      badge: "BEST PRICE GUARANTEE",
      subTitle: "Transparent structural costing with zero hidden markups"
    },
    {
      id: "materials",
      title: "Genuine Materials Only",
      badge: "GENUINE MATERIALS ONLY",
      subTitle: "Curated 100% authentic materials directly sourced from luxury brands"
    },
    {
      id: "precision",
      title: "Precision by Trusted Experts",
      badge: "PRECISION BY TRUSTED EXPERTS",
      subTitle: "Multi-stage site quality audits by licensed principal architects"
    }
  ];

  const addonsList = [
    {
      category: "Furnitures add-ons",
      items: ["Bespoke Sofa Sets", "Custom Beds & Headboards", "Dining Sets & Console Tables"],
      poweredBy: "DURIAN · GODREJ INTERIO · NILKAMAL"
    },
    {
      category: "Appliances add-ons",
      items: ["Ducted Air Conditioning", "Built-in Refrigerator Units", "Acoustic Washing Systems"],
      poweredBy: "LG · SAMSUNG · BOSCH"
    },
    {
      category: "Fixtures add-ons",
      items: ["Premium Bathroom Fittings", "Designer Thermostatic Faucets", "Rainfall Shower Systems"],
      poweredBy: "JAQUAR · KOHLER · HINDWARE"
    },
    {
      category: "Electrical add-ons",
      items: ["Smart Switches & Sockets", "Architectural Magnetic Tracks", "Silent BLDC Ceiling Fans"],
      poweredBy: "HAVELLS · SCHNEIDER · LEGRAND"
    },
    {
      category: "Services add-ons",
      items: ["Textured & Metallic Paintings", "Seamless Gypsum False Ceilings", "Imported Textile Wallpapers"],
      poweredBy: "ASIAN PAINTS · BERGER · NEROLAC"
    },
    {
      category: "Outdoor add-ons",
      items: ["Glass Porta Cabins", "Bio-climatic Pergolas", "Landscape Garden Pathways"],
      poweredBy: "DESIG9 HAUSE OUTDOOR LAB"
    }
  ];

  return (
    <div className="bg-[#fbfaf7] text-[#22221f] min-h-screen font-sans selection:bg-[#c51f32] selection:text-white overflow-x-hidden">
      
      {/* Hide Scrollbars & Define Continuous Animation */}
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
          animation: scrollContinuous 45s linear infinite;
        }
        .animate-scroll-continuous:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ================= HERO SECTION WITH APEX CORPORATE HUB IMAGE ================= */}
      <section className="relative pt-36 pb-28 md:pt-44 md:pb-36 border-b border-stone-200 overflow-hidden bg-white">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#c51f32]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="mx-auto w-[min(1320px,calc(100%-38px))] relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          <ScrollReveal direction="left" delay={100} className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-12 bg-[#c51f32]"></span>
              <span className="text-[11px] font-bold tracking-[.35em] uppercase text-[#c51f32] font-mono">
                DESIG9 HAUSE // ARCHITECTURAL PORTFOLIO[cite: 7, 8]
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light tracking-tight leading-[1.04]">
              Raw To <span className="italic text-[#c51f32] font-normal">Ready.</span>
            </h1>

            <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed max-w-xl">
              Turnkey spatial transformation studio shaping luxury residential estates, commercial landmarks, and resort landscapes across India.[cite: 8, 14]
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/free-site-visit"
                className="inline-flex items-center gap-3 bg-[#22221f] text-white px-7 py-4 text-xs font-semibold uppercase tracking-[.2em] transition-all hover:bg-[#c51f32]"
              >
                <span>Book Free Site Visit</span>
                <Compass size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-stone-100 border border-stone-300 text-[#22221f] px-7 py-4 text-xs font-semibold uppercase tracking-[.2em] transition-all hover:border-[#c51f32] hover:text-[#c51f32]"
              >
                <span>Plan Your Space</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-stone-200">
              <div>
                <div className="text-3xl font-serif text-[#22221f]">12+</div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-stone-500 mt-1">Cities Covered</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-[#c51f32]">1,500+</div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-stone-500 mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-[#22221f]">175+</div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-stone-500 mt-1">Brand Partners</div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT OVERLAPPING CARDS WITH APEX CORPORATE HUB PROFESSIONAL ARCHITECTURE IMAGE */}
          <ScrollReveal direction="right" delay={300} className="lg:col-span-6 relative h-[480px] sm:h-[540px] w-full">
            <div className="absolute top-0 right-0 w-[80%] h-[78%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                alt="Apex Corporate Hub"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase bg-[#c51f32] px-2.5 py-1 rounded">COMMERCIAL LANDMARK</span>
                <h3 className="text-xl font-serif">Apex Corporate Hub · Vibhuti Khand</h3>
              </div>
            </div>

            <div className="absolute top-6 left-0 w-[48%] h-[160px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white z-20 group">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
                alt="Corporate Interior Workspace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[9px] text-white font-mono uppercase">
                Executive Workspace
              </div>
            </div>

            <div className="absolute bottom-2 left-8 w-[52%] h-[160px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white z-30 group">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600"
                alt="Innovation Hub"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[9px] text-white font-mono uppercase">
                Collaboration Suite
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= PROJECT FILTER & GRID SECTION ================= */}
      <section className="py-24">
        <div className="mx-auto w-[min(1320px,calc(100%-38px))]">
          
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-stone-300 pb-8">
            <ScrollReveal direction="left" delay={100}>
              <span className="text-[10px] font-bold tracking-[.3em] text-[#c51f32] uppercase font-mono">CURATED COMMISSIONS</span>
              <h2 className="text-4xl sm:text-6xl font-serif text-[#22221f] mt-2">Selected Architectural Works</h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200} className="flex flex-wrap gap-2">
              {projectCategories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`px-4 py-2 text-[11px] font-mono uppercase tracking-widest transition-all rounded-full border ${
                    category === item
                      ? "bg-[#c51f32] border-[#c51f32] text-white shadow-md"
                      : "bg-white border-stone-300 text-stone-700 hover:border-[#c51f32]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 120} direction="up">
                <ProjectCard project={p} index={i} />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ================= RAW TO MOVE-IN READY (RED BG OUTER + WHITE CARD BG) ================= */}
      <section className="bg-[#c51f32] text-white py-28 relative overflow-hidden shadow-2xl">
        <div className="mx-auto w-[min(1320px,calc(100%-38px))] space-y-16 relative z-10">
          
          <ScrollReveal direction="left" delay={100} className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-bold tracking-[.3em] text-white/90 uppercase font-mono">COMPLETE SPECIFICATION HUB</span>
            <h2 className="text-4xl sm:text-6xl font-serif font-light text-white">Raw To Move-In Ready</h2>
            <p className="text-xs sm:text-sm text-white/80 font-light">A flat becomes move-in ready when you have these custom structural & interior add-ons.</p>
          </ScrollReveal>

          {/* SLIDER WITHOUT SCROLLBAR (WHITE CARDS) */}
          <div className="overflow-x-auto pb-6 pt-4 no-scrollbar flex gap-6 scroll-smooth">
            {addonsList.map((addon, cardIdx) => (
              <div
                key={cardIdx}
                className="min-w-[320px] sm:min-w-[360px] p-8 rounded-3xl bg-white text-[#22221f] border border-white/20 flex-shrink-0 shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                  <h3 className="font-serif text-xl text-[#22221f] font-semibold">{addon.category}</h3>
                  <span className="text-[9px] font-mono text-white bg-[#c51f32] px-2.5 py-0.5 rounded tracking-widest font-bold">ADD-ON</span>
                </div>

                {/* ITEM LEVEL BLUR EFFECT IN WHITE CARD THEME */}
                <div className="space-y-3 my-6">
                  {addon.items.map((item, itemIdx) => {
                    const isCardActive = activeItemIndex.cardIndex === cardIdx;
                    const isItemActive = isCardActive && activeItemIndex.itemIndex === itemIdx;
                    const isAnyActiveInCard = isCardActive && activeItemIndex.itemIndex !== null;

                    return (
                      <div
                        key={itemIdx}
                        onMouseEnter={() => setActiveItemIndex({ cardIndex: cardIdx, itemIndex: itemIdx })}
                        onMouseLeave={() => setActiveItemIndex({ cardIndex: null, itemIndex: null })}
                        className={`p-3.5 rounded-xl text-xs transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                          isItemActive
                            ? "bg-[#c51f32] text-white border-[#c51f32] shadow-lg scale-[1.02] z-10 font-medium"
                            : isAnyActiveInCard
                            ? "bg-stone-100 text-stone-400 border-transparent filter blur-[1.5px] opacity-40"
                            : "bg-stone-100 text-stone-700 border-stone-200 hover:border-[#c51f32]/40"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${isItemActive ? "bg-white" : "bg-[#c51f32]"}`} />
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <span className="text-[9px] font-mono text-stone-500 uppercase block">Powered by:</span>
                  <span className="text-[11px] font-mono font-bold text-[#c51f32] tracking-wider mt-1 block">{addon.poweredBy}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= ABSOLUTELY GUARANTEED SECTION ================= */}
      <section className="py-24 bg-[#fbfaf7] border-t border-black/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#22221f_1px,transparent_1px),linear-gradient(to_bottom,#22221f_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="mx-auto w-[min(1280px,calc(100%-38px))] relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-5 text-left space-y-8">
              <div>
                <h2 className="text-4xl sm:text-6xl font-serif font-light text-[#22221f] leading-tight">
                  Absolutely <br />
                  <span className="font-semibold text-[#22221f]">Guaranteed</span>
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-md">
                  Everything you need — handled with precision, transparency, and complete peace of mind.
                </p>
              </div>

              <div className="space-y-3">
                {guaranteeTabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left px-5 py-3.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-between border ${
                      activeTab === idx
                        ? "bg-[#c51f32] text-white border-[#c51f32] shadow-lg shadow-[#c51f32]/20 translate-x-1"
                        : "bg-stone-200/60 text-stone-700 border-transparent hover:bg-stone-300/50"
                    }`}
                  >
                    <span>{tab.title}</span>
                    <ArrowRight size={16} className={`transition-transform duration-300 ${activeTab === idx ? "translate-x-1" : "opacity-40"}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-black/10 shadow-2xl relative min-h-[460px] flex flex-col items-center justify-center">
              <div className="text-center mb-8 max-w-md">
                <h3 className="text-lg sm:text-xl font-serif text-[#22221f] font-medium">
                  {guaranteeTabs[activeTab].subTitle}
                </h3>
              </div>

              <div className="w-full relative transition-all duration-700 ease-in-out">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#c51f32] text-white px-5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase shadow-md flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    {guaranteeTabs[activeTab].badge}
                  </div>
                </div>

                {activeTab === 0 && (
                  <div className="space-y-8 animate-fadeIn">
                    <div className="flex justify-center">
                      <div className="w-28 h-28 rounded-full bg-[#fbfaf7] border-2 border-black/10 shadow-xl flex flex-col items-center justify-center text-center p-2">
                        <div className="text-[#c51f32] font-serif font-bold text-sm">DESIG9 HAUSE</div>
                        <div className="text-[9px] font-mono text-stone-500 uppercase tracking-widest mt-0.5">ASSIST</div>
                      </div>
                    </div>
                    <div className="border-t-2 border-dashed border-stone-300 w-full relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#c51f32]" />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
                      {[
                        { title: "Architects", sub: "Design that inspires", icon: Compass },
                        { title: "Engineers", sub: "Structural excellence", icon: Ruler },
                        { title: "Contractors", sub: "Quality execution", icon: HardHat },
                        { title: "Material Suppliers", sub: "Curated & genuine", icon: Truck },
                        { title: "Site Supervisors", sub: "On-ground assurance", icon: FileCheck },
                      ].map((item, i) => (
                        <div key={i} className="bg-[#fbfaf7] p-3 rounded-xl border border-black/5 flex flex-col items-center justify-center">
                          <item.icon className="w-5 h-5 text-[#c51f32] mb-1.5" />
                          <div className="text-xs font-semibold text-[#22221f]">{item.title}</div>
                          <div className="text-[9px] text-stone-500 mt-0.5 leading-tight">{item.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="space-y-8 animate-fadeIn">
                    <div className="flex justify-center">
                      <div className="w-28 h-28 rounded-full bg-[#22221f] text-white border-2 border-[#c51f32] shadow-xl flex flex-col items-center justify-center text-center p-2">
                        <div className="text-[#c51f32] font-mono font-bold text-xs">DESIG9</div>
                        <div className="text-[9px] text-stone-300">PRICE LOCK</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 bg-stone-100 rounded-xl border border-black/5 opacity-60">
                        <div className="text-xs text-stone-500">Contractor A</div>
                        <div className="text-xs font-mono font-bold text-stone-700 mt-1">₹3,32,000</div>
                      </div>
                      <div className="p-3 bg-[#c51f32]/10 rounded-xl border border-[#c51f32]/40 shadow-md">
                        <div className="text-xs font-semibold text-[#c51f32]">Desig9 Matched</div>
                        <div className="text-sm font-mono font-bold text-[#c51f32] mt-1">₹3,20,000</div>
                      </div>
                      <div className="p-3 bg-stone-100 rounded-xl border border-black/5 opacity-60">
                        <div className="text-xs text-stone-500">Contractor C</div>
                        <div className="text-xs font-mono font-bold text-stone-700 mt-1">₹3,28,000</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-8 animate-fadeIn">
                    <div className="flex justify-center">
                      <div className="w-24 h-24 rounded-full bg-[#fbfaf7] border-2 border-[#c51f32] shadow-xl flex flex-col items-center justify-center text-center">
                        <span className="text-xs font-serif font-bold text-[#22221f]">AUTHENTIC</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      {["HAVELLS", "JAQUAR", "SAMSUNG", "ASIAN PAINTS", "LG"].map((brand, bIdx) => (
                        <div key={bIdx} className="bg-[#fbfaf7] px-4 py-2 rounded-xl border border-black/10 font-mono text-xs font-bold text-stone-700 shadow-sm">
                          {brand}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="space-y-8 animate-fadeIn">
                    <div className="flex justify-center">
                      <div className="w-24 h-24 rounded-full bg-[#22221f] text-white border-2 border-[#c51f32] shadow-xl flex flex-col items-center justify-center text-center">
                        <ShieldCheck className="w-8 h-8 text-[#c51f32]" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {["CAD Verification", "Load Test", "Finish Check", "Final Handover"].map((check, cIdx) => (
                        <div key={cIdx} className="p-3 bg-[#fbfaf7] rounded-xl border border-black/10 text-center">
                          <CheckCircle2 className="w-4 h-4 text-[#c51f32] mx-auto mb-1" />
                          <div className="text-[11px] font-semibold text-stone-800">{check}</div>
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

      {/* ================= 25 REAL REVIEWS CONTINUOUS SCROLLING SLIDER ================= */}
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

    </div>
  );
}