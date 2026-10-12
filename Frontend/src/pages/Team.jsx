import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Award, ArrowRight, Compass, Building2 } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Sagar Vij",
      role: "Founder | Architect",
      image: "/path-to-sagar-image.jpg", // Replace or use default placeholder if needed
      bio: "Leading the multidisciplinary vision of Desig9 Hause with a deep focus on contextual architecture, structural clarity, and timeless forms.",
      expertise: ["Master Planning", "Facade & Elevation", "Sustainable Architecture"],
    },
    {
      name: "Navya Agarwal",
      role: "Interior Designer",
      image: "/path-to-navya-image.jpg",
      bio: "Crafting interior spaces that balance aesthetic luxury with everyday functional ergonomics, material texture, and atmospheric lighting.",
      expertise: ["Spatial Styling", "Custom Joinery", "Lighting & Ambiance"],
    },
  ];

  return (
    <div className="bg-[#fbfaf7] text-[#22221f] min-h-screen font-sans selection:bg-[#c51f32]/20 selection:text-[#c51f32]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-black/[0.08]">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#22221f_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c51f32]/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="mx-auto w-[min(1240px,calc(100%-38px))] relative z-10">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-[#c51f32] uppercase font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>The Minds Behind The Practice</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight text-[#22221f] leading-[1.05]">
            Meet our <br />
            <span className="italic font-normal text-[#c51f32]">Principal Team.</span>
          </h1>
          
          <p className="mt-6 text-sm md:text-base text-stone-600 max-w-xl leading-relaxed">
            Desig9 Hause is driven by a passionate multidisciplinary collective of architects and interior designers dedicated to translating ideas into meaningful spaces[cite: 4, 7].
          </p>
        </div>
      </section>

      {/* ================= TEAM PROFILES SECTION ================= */}
      <section className="py-24">
        <div className="mx-auto w-[min(1240px,calc(100%-38px))] grid md:grid-cols-2 gap-12 lg:gap-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl border border-black/10 p-8 md:p-10 shadow-xl shadow-black/[0.02] flex flex-col justify-between group hover:border-[#c51f32]/40 transition-all duration-500"
            >
              <div>
                {/* Role Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#c51f32] uppercase bg-[#c51f32]/10 px-3 py-1 rounded-full">
                    {member.role}
                  </span>
                  <Award className="w-5 h-5 text-[#c51f32]/60" />
                </div>

                {/* Name */}
                <h3 className="text-3xl md:text-4xl font-serif text-[#22221f] mb-4">
                  {member.name}
                </h3>

                {/* Bio */}
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed mb-8">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="space-y-3 pt-6 border-t border-black/10">
                  <span className="text-[10px] tracking-widest text-stone-400 uppercase font-semibold block">Core Expertise</span>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="text-xs bg-[#fbfaf7] border border-black/10 px-3 py-1.5 rounded-xl text-stone-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs text-stone-500 italic">DESIG9 HAUSE Studio Leadership</span>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#c51f32] hover:underline"
                >
                  Consult with {member.name.split(" ")[0]} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STUDIO PHILOSOPHY STRIP ================= */}
      <section className="py-20 bg-white border-t border-black/[0.08]">
        <div className="mx-auto w-[min(1240px,calc(100%-38px))] grid md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <Compass className="w-6 h-6 text-[#c51f32]" />
            <h4 className="text-lg font-serif text-[#22221f]">Client-First Approach</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Every project is treated as a unique opportunity to translate your exact lifestyle and functional requirements into reality[cite: 4].
            </p>
          </div>
          <div className="space-y-3">
            <Building2 className="w-6 h-6 text-[#c51f32]" />
            <h4 className="text-lg font-serif text-[#22221f]">Multidisciplinary Expertise</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Seamlessly integrating architecture, interior styling, and landscape solutions under one roof[cite: 4].
            </p>
          </div>
          <div className="space-y-3">
            <Sparkles className="w-6 h-6 text-[#c51f32]" />
            <h4 className="text-lg font-serif text-[#22221f]">Timeless & Practical</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Balancing aesthetic elegance with structural clarity and budget optimization[cite: 4, 6].
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}