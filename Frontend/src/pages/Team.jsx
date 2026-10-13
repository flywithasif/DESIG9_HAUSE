import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Award, 
  ArrowRight, 
  Compass, 
  Building2, 
  ShieldCheck, 
  Ruler, 
  Crosshair,
  User,
  CheckCircle2,
  HardHat,
  Truck,
  FileCheck,
  Check
} from "lucide-react";

export default function Team() {
  // State for Interactive Guarantee Section
  const [activeTab, setActiveTab] = useState(0);

  const teamMembers = [
    {
      name: "Sagar Vij",
      role: "Founder & Principal Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
      bio: "Leading Desig9 Hause with 15+ years of mastery in monolithic forms and structural balance.",
      expertise: ["Master Planning", "Elevation", "Sustainable Design"],
      experience: "15+ Yrs Exp."
    },
    {
      name: "Navya Agarwal",
      role: "Lead Interior Designer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      bio: "Crafting spatial sanctuaries with tactile materials, bespoke joinery, and warm ambiance.",
      expertise: ["Spatial Styling", "Custom Joinery", "Lighting Ambiance"],
      experience: "12+ Yrs Exp."
    },
    {
      name: "Ar. Kabir Mehta",
      role: "Senior Structural Head",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
      bio: "Ensuring structural engineering precision and blueprint execution across luxury landmarks.",
      expertise: ["Structural CAD", "Blueprinting", "Site Execution"],
      experience: "14+ Yrs Exp."
    },
    {
      name: "Rhea Sen",
      role: "Landscape Architect",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      bio: "Integrating biophilic courtyards, water elements, and exterior landscapes for luxury living.",
      expertise: ["Biophilic Design", "Hardscape", "Outdoor Lighting"],
      experience: "10+ Yrs Exp."
    },
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

  return (
    <div className="bg-[#fbfaf7] text-[#22221f] min-h-screen font-sans selection:bg-[#c51f32]/20 selection:text-[#c51f32] overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-black/10">
        
        {/* BESPOKE CSS ARCHITECTURAL BLUEPRINT GRID (NO DOTS) */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#22221f_1px,transparent_1px),linear-gradient(to_bottom,#22221f_1px,transparent_1px)] bg-[size:64px_64px] stroke-[0.5]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#c51f32_1px,transparent_1px),linear-gradient(to_bottom,#c51f32_1px,transparent_1px)] bg-[size:320px_320px] opacity-20" />
        </div>

        {/* CAD Markings */}
        <div className="absolute top-12 left-12 text-[10px] font-mono text-[#22221f]/40 tracking-widest hidden md:block">
          AXIS_X: 28°41'10"N // CAD_GRID_01
        </div>
        <div className="absolute bottom-8 right-12 text-[10px] font-mono text-[#c51f32]/60 tracking-widest hidden md:block">
          SCALE 1:50 // ARCHITECTURAL DRAFT
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#c51f32]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="mx-auto w-[min(1280px,calc(100%-38px))] relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: 3-Image Overlapping Collage (SLIDES FROM LEFT TO RIGHT OVER 2.5s) */}
          <div className="lg:col-span-6 relative h-[420px] sm:h-[480px] animate-[slideFromLeft_2.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <div className="absolute top-0 left-0 w-[65%] h-[78%] rounded-2xl overflow-hidden shadow-2xl border border-black/15 z-10">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
                alt="Architectural Villa Exterior"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute bottom-2 right-2 w-[55%] h-[62%] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#fbfaf7] z-20">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000" 
                alt="Interior Design Masterpiece"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute top-1/3 right-0 bg-[#22221f] text-[#fbfaf7] p-4 rounded-xl shadow-2xl z-30 max-w-[210px] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#c51f32] text-[11px] font-mono mb-1">
                <Crosshair className="w-4 h-4 animate-spin-slow" />
                <span>ARCH_SPEC_04</span>
              </div>
              <p className="text-[11px] font-serif text-stone-300 leading-snug">Precision Structural Execution & Spatial Harmony</p>
            </div>
          </div>

          {/* RIGHT: Heading & Text (SLIDES FROM RIGHT TO LEFT OVER 2.5s) */}
          <div className="lg:col-span-6 space-y-6 text-left lg:pl-6 animate-[slideFromRight_2.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#c51f32] uppercase font-semibold bg-[#c51f32]/10 px-4 py-1.5 rounded-full border border-[#c51f32]/20">
              <Sparkles className="w-4 h-4" />
              <span>Studio Principal Collective</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-[#22221f] leading-[1.08]">
              Architectural <br />
              <span className="italic font-normal text-[#c51f32]">Visionaries.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-stone-600 max-w-xl leading-relaxed">
              Desig9 Hause is led by a tight-knit principal team of structural engineers, interior designers, and architects dedicated to crafting iconic built environments.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-stone-600">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-black/5 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#c51f32]" />
                <span>Licensed Architects</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-black/5 shadow-sm">
                <Ruler className="w-4 h-4 text-[#c51f32]" />
                <span>Turnkey Execution</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= TEAM PROFILES SECTION (4 MEMBERS IN 1 SINGLE ROW) ================= */}
      <section className="py-24 relative bg-white/60">
        <div className="mx-auto w-[min(1280px,calc(100%-38px))]">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c51f32] font-semibold">Leadership Council</span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#22221f]">Meet The 4 Principals</h2>
            <p className="text-xs sm:text-sm text-stone-600">Direct studio leadership overseeing design, engineering, and execution.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-black/10 overflow-hidden shadow-lg shadow-black/[0.02] flex flex-col justify-between group hover:border-[#c51f32]/50 hover:shadow-xl transition-all duration-500"
              >
                <div>
                  <div className="relative h-80 overflow-hidden bg-stone-100">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="text-[9px] font-mono tracking-widest text-white/90 uppercase bg-[#c51f32] px-2.5 py-0.5 rounded-full inline-block mb-1">
                        {member.experience}
                      </span>
                      <h3 className="text-xl font-serif text-white font-medium leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs text-stone-300 font-mono mt-0.5">{member.role}</p>
                    </div>
                  </div>

                  <div className="p-5 text-left">
                    <p className="text-xs text-stone-600 leading-relaxed mb-4 line-clamp-3">
                      {member.bio}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-black/10">
                      <span className="text-[9px] tracking-widest text-stone-400 uppercase font-semibold block">Core Focus</span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.expertise.map((skill, idx) => (
                          <span key={idx} className="text-[10px] bg-[#fbfaf7] border border-black/10 px-2 py-1 rounded-md text-stone-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-black/5 bg-stone-50/50 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 italic">Desig9 Hause</span>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c51f32] hover:underline"
                  >
                    Consult <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= NEW: INTERACTIVE GUARANTEED & ASSURANCE SECTION (MATCHING SCREENSHOTS) ================= */}
      <section className="py-24 bg-[#fbfaf7] border-t border-black/10 relative overflow-hidden">
        
        {/* Subtle Background CAD Axis Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#22221f_1px,transparent_1px),linear-gradient(to_bottom,#22221f_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="mx-auto w-[min(1280px,calc(100%-38px))] relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT SIDE: Heading & Interactive Tabs */}
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

              {/* Clickable Pills / Tabs */}
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

            {/* RIGHT SIDE: Dynamic Node & Process Diagram (2.75s Scroll/Fade Physics) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-black/10 shadow-2xl relative min-h-[460px] flex flex-col items-center justify-center">
              
              {/* Dynamic Header Sub-Title */}
              <div className="text-center mb-8 max-w-md">
                <h3 className="text-lg sm:text-xl font-serif text-[#22221f] font-medium">
                  {guaranteeTabs[activeTab].subTitle}
                </h3>
              </div>

              {/* Animated Canvas Wrapper with 2.75s Ease Engine */}
              <div className="w-full relative transition-all duration-[2750ms] ease-in-out">

                {/* Top Badge Overlay */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-[#c51f32] to-[#991524] text-white px-5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase shadow-md flex items-center gap-2 animate-bounce">
                    <CheckCircle2 size={16} />
                    {guaranteeTabs[activeTab].badge}
                  </div>
                </div>

                {/* TAB 0 CONTENT: Single Point of Contact Architecture */}
                {activeTab === 0 && (
                  <div className="space-y-8 animate-[fadeIn_2.75s_ease-in-out]">
                    <div className="flex justify-center">
                      <div className="w-28 h-28 rounded-full bg-[#fbfaf7] border-2 border-black/10 shadow-xl flex flex-col items-center justify-center text-center p-2 relative">
                        <div className="text-[#c51f32] font-serif font-bold text-sm">DESIG9 HAUSE</div>
                        <div className="text-[9px] font-mono text-stone-500 uppercase tracking-widest mt-0.5">ASSIST</div>
                      </div>
                    </div>

                    {/* Dotted Connecting Lines */}
                    <div className="border-t-2 border-dashed border-stone-300 w-full relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#c51f32]" />
                    </div>

                    {/* 5 Sub-Nodes */}
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

                {/* TAB 1 CONTENT: Transparent Price Comparison */}
                {activeTab === 1 && (
                  <div className="space-y-8 animate-[fadeIn_2.75s_ease-in-out]">
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

                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" /> Matched Best Price Guarantee Secured
                    </div>
                  </div>
                )}

                {/* TAB 2 CONTENT: Genuine Luxury Brands */}
                {activeTab === 2 && (
                  <div className="space-y-8 animate-[fadeIn_2.75s_ease-in-out]">
                    <div className="flex justify-center">
                      <div className="w-24 h-24 rounded-full bg-[#fbfaf7] border-2 border-[#c51f32] shadow-xl flex flex-col items-center justify-center text-center">
                        <span className="text-xs font-serif font-bold text-[#22221f]">AUTHENTIC</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                      {["HAVELLS", "Jaduar", "SAMSUNG", "asianpaints", "LG"].map((brand, bIdx) => (
                        <div key={bIdx} className="bg-[#fbfaf7] px-4 py-2 rounded-xl border border-black/10 font-mono text-xs font-bold text-stone-700 shadow-sm">
                          {brand}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 3 CONTENT: Precision Experts Audit */}
                {activeTab === 3 && (
                  <div className="space-y-8 animate-[fadeIn_2.75s_ease-in-out]">
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

      {/* ================= STUDIO PHILOSOPHY STRIP ================= */}
      <section className="py-16 bg-white border-t border-black/[0.08]">
        <div className="mx-auto w-[min(1280px,calc(100%-38px))] grid md:grid-cols-3 gap-8">
          <div className="space-y-2 p-6 rounded-xl bg-[#fbfaf7] border border-black/5 text-left">
            <Compass className="w-5 h-5 text-[#c51f32]" />
            <h4 className="text-base font-serif text-[#22221f]">Contextual Integrity</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Every design originates from site parameters, natural lighting orientation, and client lifestyle preferences.
            </p>
          </div>
          <div className="space-y-2 p-6 rounded-xl bg-[#fbfaf7] border border-black/5 text-left">
            <Building2 className="w-5 h-5 text-[#c51f32]" />
            <h4 className="text-base font-serif text-[#22221f]">Integrated Practice</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Architecture, interior styling, lighting design, and execution managed seamlessly under one roof.
            </p>
          </div>
          <div className="space-y-2 p-6 rounded-xl bg-[#fbfaf7] border border-black/5 text-left">
            <Sparkles className="w-5 h-5 text-[#c51f32]" />
            <h4 className="text-base font-serif text-[#22221f]">Craft & Detail</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Precision drafting and material curation delivering long-term architectural permanence.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Keyframe Animations (2.75s Physics Engine) */}
      <style>{`
        @keyframes slideFromLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromRight {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}