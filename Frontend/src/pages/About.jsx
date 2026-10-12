import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  ChevronRight,
  Building,
  Home as HomeIcon,
} from "lucide-react";

// Number Counter Sub-component (Browser Native Observer)
function AnimatedCounter({ from = 1, to, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(from);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = from;
    const end = parseInt(to, 10);
    const totalSteps = 60;
    const stepTime = Math.abs(Math.floor((duration * 1000) / totalSteps));
    const increment = Math.ceil((end - from) / totalSteps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, from, to, duration]);

  return (
    <span ref={counterRef} className="inline-block font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  // 20+ Architectural & Interior Brands List
  const brands = [
    "Saint-Gobain", "Asian Paints", "Jaquar", "Hafele", "TOTO",
    "Kohlér", "Greenlam Laminates", "Fenesta", "Grohe", "Somany Ceramics",
    "Kajaria", "CenturyPly", "Schneider Electric", "Havells", "D'Decor",
    "Sleek Kitchens", "Pidilite", "Godrej Interio", "Armstrong Ceiling", "Hettich"
  ];

  // Leadership & Architect Team
  const teamMembers = [
    {
      name: "Sagar Vij",
      role: "Founder | Architect",
      experience: "14+ Years Exp.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Rohan Kapoor",
      role: "Lead Interior Designer",
      experience: "10+ Years Exp.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Navya Agarwal",
      role: "Interior Designer",
      experience: "8+ Years Exp.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Vikramaditya Mehta",
      role: "Project Execution Head",
      experience: "12+ Years Exp.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="bg-[#fbfaf7] text-[#22221f] min-h-screen font-sans selection:bg-[#c51f32]/20 selection:text-[#c51f32] overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 border-b border-black/[0.08]">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#22221f_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c51f32]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="mx-auto w-[min(1240px,calc(100%-38px))] relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* TEXT (SLIDE FROM LEFT) */}
          <div className="lg:col-span-7 space-y-6 transition-all duration-1000 transform translate-x-0 opacity-100">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#c51f32] uppercase font-semibold bg-[#c51f32]/5 px-3 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span>About DESIG9 HAUSE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-[#22221f] leading-[1.08]">
              Better <span className="text-[#c51f32] font-normal italic">Spaces.</span> <br />
              Better Living. <br />
              <span className="text-[#22221f] font-normal">That's The Mission.</span>
            </h1>

            <p className="text-sm md:text-base text-stone-600 max-w-xl leading-relaxed">
              We design, construct, and transform spaces into inspiring environments. From conceptual architectural drafting to complete interior engineering, we handle every detail seamlessly.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/free-site-visit"
                className="px-7 py-4 rounded-full bg-[#22221f] hover:bg-[#c51f32] text-white font-medium text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-[#c51f32]/20 inline-flex items-center gap-2"
              >
                Book a Free Visit <ArrowRight size={14} />
              </Link>
              <Link
                to="/projects"
                className="px-7 py-4 rounded-full border border-black/20 hover:border-black text-[#22221f] font-medium text-xs uppercase tracking-widest transition-all inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm"
              >
                Explore Solutions <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* IMAGES (SLIDE FROM RIGHT) */}
          <div className="lg:col-span-5 relative h-[420px] sm:h-[480px]">
            {/* Main Center Image */}
            <div className="absolute top-8 right-4 w-[78%] h-[280px] sm:h-[320px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-700 hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Luxury Living Room"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Small Overlapping Image */}
            <div className="absolute top-0 right-0 w-[48%] h-[140px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600"
                alt="Bedroom Interior Design"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left Overlapping Image */}
            <div className="absolute bottom-2 left-0 w-[55%] h-[160px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 bg-white p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600"
                  alt="Modular Kitchen Design"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] text-white font-medium">
                  Move-In Ready • Quality Guaranteed
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= STEP 2: ANIMATED COUNT-UP STATS (1 SE COUNT HONGE) ================= */}
      <section className="py-12 bg-white border-b border-black/[0.08]">
        <div className="mx-auto w-[min(1240px,calc(100%-38px))] grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
          
          <div className="text-center pt-4 sm:pt-0">
            <div className="text-4xl md:text-5xl font-serif text-[#c51f32]">
              <AnimatedCounter from={1} to={15} suffix="+" />
            </div>
            <div className="text-xs uppercase tracking-widest text-stone-500 mt-2 font-medium">
              Cities Presence
            </div>
          </div>

          <div className="text-center pt-4 sm:pt-0">
            <div className="text-4xl md:text-5xl font-serif text-[#22221f]">
              <AnimatedCounter from={1} to={1800} suffix="+" duration={2.5} />
            </div>
            <div className="text-xs uppercase tracking-widest text-stone-500 mt-2 font-medium">
              Projects Delivered
            </div>
          </div>

          <div className="text-center pt-4 sm:pt-0">
            <div className="text-4xl md:text-5xl font-serif text-[#c51f32]">
              <AnimatedCounter from={1} to={150} suffix="+" />
            </div>
            <div className="text-xs uppercase tracking-widest text-stone-500 mt-2 font-medium">
              Architect Partners
            </div>
          </div>

          <div className="text-center pt-4 sm:pt-0">
            <div className="text-4xl md:text-5xl font-serif text-[#22221f]">
              <AnimatedCounter from={1} to={100} suffix="%" />
            </div>
            <div className="text-xs uppercase tracking-widest text-stone-500 mt-2 font-medium">
              Quality Standards
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHAT WE BELIEVE SECTION ================= */}
      <section className="py-24 bg-[#fbfaf7] border-b border-black/[0.08]">
        <div className="mx-auto w-[min(1240px,calc(100%-38px))]">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#c51f32] uppercase">Core Ethos</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#22221f]">What We Believe</h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              Spaces deeply influence human behavior, wellbeing, and daily comfort. Great architecture goes beyond aesthetics—it elevates living standards.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-8">
              
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#c51f32]/10 text-[#c51f32] flex items-center justify-center font-bold">
                  <HomeIcon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#22221f]">Purposeful Spatial Planning</h3>
                  <p className="text-xs md:text-sm text-stone-600 mt-1 leading-relaxed">
                    We believe every square foot should serve a deliberate purpose. Unused corners are transformed into functional micro-spaces that adapt to modern lifestyles.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#c51f32]/10 text-[#c51f32] flex items-center justify-center font-bold">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#22221f]">Uncompromising Material Integrity</h3>
                  <p className="text-xs md:text-sm text-stone-600 mt-1 leading-relaxed">
                    Shortcuts compromise longevity. We source rigorously tested, sustainable, and premium-grade materials directly from top industry manufacturers.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#c51f32]/10 text-[#c51f32] flex items-center justify-center font-bold">
                  <HeartHandshake size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#22221f]">Transparent Project Delivery</h3>
                  <p className="text-xs md:text-sm text-stone-600 mt-1 leading-relaxed">
                    Clear BOQs, fixed timelines, and dedicated single-point management ensure zero hidden surprises throughout your construction journey.
                  </p>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000"
                  alt="Architectural Excellence"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white space-y-1">
                    <p className="text-xs font-semibold tracking-widest text-[#c51f32] uppercase">Our Promise</p>
                    <h4 className="text-xl font-serif">Designing homes that stand the test of time.</h4>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="py-24 bg-white border-b border-black/[0.08]">
        <div className="mx-auto w-[min(1240px,calc(100%-38px))]">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#c51f32] uppercase">The Minds Behind DESIG9 HAUSE</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#22221f]">Meet Our Leadership Team</h2>
            <p className="text-xs md:text-sm text-stone-600">
              A passionate collective of licensed architects, creative designers, structural engineers, and project managers dedicated to design perfection.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group bg-[#fbfaf7] rounded-3xl overflow-hidden border border-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-medium text-[#c51f32]">
                    {member.experience}
                  </div>
                </div>
                <div className="p-6 space-y-1">
                  <h3 className="text-lg font-serif font-semibold text-[#22221f]">{member.name}</h3>
                  <p className="text-xs text-stone-500 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 20+ ARCHITECTURAL & INTERIOR BRANDS ================= */}
      <section className="py-20 bg-[#fbfaf7] border-b border-black/[0.08]">
        <div className="mx-auto w-[min(1240px,calc(100%-38px))]">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#c51f32] uppercase">Trusted Ecosystem</span>
            <h2 className="text-2xl md:text-4xl font-serif text-[#22221f]">20+ Industry Leading Material Partners</h2>
            <p className="text-xs md:text-sm text-stone-600">
              We collaborate with premier global and national brands to ensure high durability and fine craftsmanship for every project.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-black/5 hover:border-[#c51f32]/40 transition-all text-center flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                <Building className="w-4 h-4 text-[#c51f32] shrink-0" />
                <span className="text-xs font-semibold text-stone-800">{brand}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
<section className="py-20 bg-[#c51f32] text-white relative overflow-hidden">
  <div className="mx-auto w-[min(1240px,calc(100%-38px))] text-center space-y-6 relative z-10">
    <h2 className="text-3xl md:text-5xl font-serif">Ready to build your dream space?</h2>
    <p className="text-xs md:text-sm text-stone-100 max-w-xl mx-auto opacity-90">
      Schedule a complimentary consultation with our principal architects and get 3D layout options for your upcoming project.
    </p>
    <div className="pt-4">
      <Link
        to="/free-site-visit"
        className="px-8 py-4 rounded-full bg-[#22221f] hover:bg-black text-white font-medium text-xs uppercase tracking-widest transition-all inline-flex items-center gap-2 shadow-xl hover:shadow-black/40"
      >
        Book Free Site Visit <ArrowRight size={14} />
      </Link>
    </div>
  </div>
</section>

    </div>
  );
}