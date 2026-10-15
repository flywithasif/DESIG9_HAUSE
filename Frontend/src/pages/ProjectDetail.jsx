import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Lenis from "lenis";
import { ArrowLeft, ArrowUpRight, Compass, Ruler, ShieldCheck, Layers, Sparkles, Building2, Calendar, MapPin } from "lucide-react";
import { projects } from "../data/projects";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

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
  }, [id]);

  if (!project) return <NotFound />;

  return (
    <div className="bg-[#fbfaf7] text-[#22221f] min-h-screen font-sans selection:bg-[#c51f32] selection:text-white overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex min-h-[620px] items-end overflow-hidden bg-[#1c1c19] text-white pt-32 pb-16">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 size-full object-cover opacity-60 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c19] via-[#1c1c19]/40 to-transparent" />

        <div className="relative mx-auto w-[min(1320px,calc(100%-38px))] z-10 space-y-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-stone-300 hover:text-[#c51f32] transition-colors bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
          >
            <ArrowLeft size={16} /> All Portfolio Commissions
          </Link>

          <div>
            <span className="px-3 py-1 bg-[#c51f32] text-white text-[10px] font-mono tracking-widest uppercase rounded">
              {project.category}
            </span>
            <h1 className="mt-4 font-serif text-5xl sm:text-7xl md:text-8xl leading-none text-white">
              {project.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-stone-300 border-t border-stone-800 pt-4">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-[#c51f32]" /> {project.location}</span>
            <span className="flex items-center gap-2"><Calendar size={14} className="text-[#c51f32]" /> {project.year}</span>
            <span className="flex items-center gap-2"><Building2 size={14} className="text-[#c51f32]" /> DESIG9 HAUSE Studio Commission</span>
          </div>
        </div>
      </section>

      {/* ================= PROJECT OVERVIEW & SPECIFICATIONS ================= */}
      <section className="py-24">
        <div className="mx-auto w-[min(1320px,calc(100%-38px))] grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT OVERVIEW */}
          <div className="lg:col-span-8 space-y-8">
            <span className="text-[10px] font-bold tracking-[.3em] text-[#c51f32] uppercase font-mono">ARCHITECTURAL CASE STUDY</span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#22221f] leading-tight">
              A considered response to place, purpose, and people.
            </h2>
            <p className="text-base text-stone-600 font-light leading-relaxed">
              {project.description}
            </p>
            <p className="text-sm text-stone-500 font-light leading-relaxed">
              This portfolio entry demonstrates our multidisciplinary approach bridging raw structural concrete, climate-responsive orientation, and bespoke interior aesthetics.[cite: 8, 14]
            </p>

            {/* Spec Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-stone-200">
              <div className="p-5 bg-white border border-stone-200 rounded-2xl">
                <span className="text-[10px] font-mono text-[#c51f32] uppercase font-bold block">Structural Grid</span>
                <span className="text-sm font-serif text-[#22221f] mt-1 block">Post-Tensioned Slab & Glazing</span>
              </div>
              <div className="p-5 bg-white border border-stone-200 rounded-2xl">
                <span className="text-[10px] font-mono text-[#c51f32] uppercase font-bold block">Orientation</span>
                <span className="text-sm font-serif text-[#22221f] mt-1 block">Vastu Compliant Sun-Path</span>
              </div>
            </div>
          </div>

          {/* RIGHT ACTION CARD */}
          <div className="lg:col-span-4 p-8 bg-white border border-stone-200 rounded-3xl shadow-xl space-y-6">
            <h3 className="font-serif text-2xl text-[#22221f]">Discuss a Similar Project</h3>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              Schedule a direct architectural review with our principal architects to evaluate site conditions, spatial planning, and structural estimates.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-between w-full py-4 px-6 bg-[#c51f32] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-[#a71929] rounded-xl shadow-lg"
            >
              <span>Initiate Review</span>
              <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/free-site-visit"
              className="inline-flex items-center justify-between w-full py-4 px-6 bg-[#22221f] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-black rounded-xl"
            >
              <span>Free Site Inspection</span>
              <Compass size={16} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}