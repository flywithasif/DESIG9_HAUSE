import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Lenis from "lenis";
import {
  ArrowLeft,
  ArrowUpRight,
  Compass,
  Building2,
  Calendar,
  MapPin,
} from "lucide-react";

import { projects } from "../data/projects";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // Smooth scrolling with proper cleanup
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
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
  }, [id]);

  if (!project) return <NotFound />;

  return (
    <main className="min-h-screen overflow-x-clip bg-[#fbfaf7] font-sans text-[#22221f] selection:bg-[#c51f32] selection:text-white">

      {/* ================= HERO SECTION ================= */}

      <section className="relative flex min-h-[540px] items-end overflow-hidden bg-[#1c1c19] pt-28 pb-10 text-white sm:min-h-[620px] sm:pt-32 sm:pb-16 lg:min-h-[680px]">

        <img
          src={project.image}
          alt={project.title}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60 brightness-90"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#1c1c19] via-[#1c1c19]/50 to-[#1c1c19]/10"
        />

        <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-[1320px] space-y-5 sm:w-[calc(100%-48px)] sm:space-y-6 lg:w-[calc(100%-64px)]">

          {/* Back to projects */}

          <Link
            to="/projects"
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-[10px] font-mono uppercase tracking-[0.12em] text-stone-200 backdrop-blur-md transition-colors hover:text-[#c51f32] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-4 sm:text-xs sm:tracking-widest"
          >
            <ArrowLeft size={15} className="shrink-0" />
            <span>All Portfolio Commissions</span>
          </Link>

          {/* Project title */}

          <div className="max-w-full">
            <span className="inline-block max-w-full break-words rounded bg-[#c51f32] px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-white">
              {project.category}
            </span>

            <h1 className="mt-4 max-w-5xl break-words font-serif text-4xl leading-[1.08] text-white [overflow-wrap:anywhere] sm:text-6xl sm:leading-none md:text-7xl lg:text-8xl">
              {project.title}
            </h1>
          </div>

          {/* Project information */}

          <div className="grid grid-cols-1 gap-x-5 gap-y-3 border-t border-stone-700/80 pt-4 text-xs font-mono text-stone-300 sm:flex sm:flex-wrap sm:items-center sm:gap-5 lg:gap-6">

            <span className="flex min-w-0 items-start gap-2">
              <MapPin
                size={14}
                className="mt-0.5 shrink-0 text-[#c51f32]"
              />
              <span className="break-words">{project.location}</span>
            </span>

            <span className="flex items-center gap-2">
              <Calendar
                size={14}
                className="shrink-0 text-[#c51f32]"
              />
              <span>{project.year}</span>
            </span>

            <span className="flex min-w-0 items-start gap-2">
              <Building2
                size={14}
                className="mt-0.5 shrink-0 text-[#c51f32]"
              />
              <span>DESIG9 HAUSE Studio Commission</span>
            </span>

          </div>
        </div>
      </section>

      {/* ================= PROJECT OVERVIEW ================= */}

      <section className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1320px] grid-cols-1 items-start gap-10 sm:w-[calc(100%-48px)] sm:gap-12 lg:w-[calc(100%-64px)] lg:grid-cols-12 lg:gap-14 xl:gap-16">

          {/* LEFT: PROJECT OVERVIEW */}

          <div className="min-w-0 space-y-6 sm:space-y-8 lg:col-span-8">

            <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#c51f32] sm:tracking-[0.3em]">
              ARCHITECTURAL CASE STUDY
            </span>

            <h2 className="max-w-3xl font-serif text-3xl leading-tight text-[#22221f] sm:text-4xl md:text-5xl">
              A considered response to place, purpose, and people.
            </h2>

            <p className="break-words text-sm font-light leading-7 text-stone-600 sm:text-base sm:leading-relaxed">
              {project.description}
            </p>

            <p className="text-sm font-light leading-7 text-stone-500">
              This portfolio entry demonstrates our multidisciplinary
              approach bridging raw structural concrete,
              climate-responsive orientation, and bespoke interior
              aesthetics.
            </p>

            {/* Specification cards */}

            <div className="grid grid-cols-1 gap-4 border-t border-stone-200 pt-6 sm:grid-cols-2 sm:gap-5 sm:pt-8">

              <div className="min-w-0 rounded-2xl border border-stone-200 bg-white p-5 transition-shadow duration-300 hover:shadow-md sm:p-6">
                <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-[#c51f32]">
                  Structural Grid
                </span>

                <span className="mt-2 block break-words font-serif text-sm leading-relaxed text-[#22221f] sm:text-base">
                  Post-Tensioned Slab &amp; Glazing
                </span>
              </div>

              <div className="min-w-0 rounded-2xl border border-stone-200 bg-white p-5 transition-shadow duration-300 hover:shadow-md sm:p-6">
                <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-[#c51f32]">
                  Orientation
                </span>

                <span className="mt-2 block break-words font-serif text-sm leading-relaxed text-[#22221f] sm:text-base">
                  Vastu Compliant Sun-Path
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT: PROJECT ACTION CARD */}

          <aside className="min-w-0 rounded-2xl border border-stone-200 bg-white p-5 shadow-lg sm:rounded-3xl sm:p-7 md:p-8 lg:col-span-4 lg:shadow-xl">

            <div className="space-y-5 sm:space-y-6">

              <h3 className="font-serif text-2xl leading-tight text-[#22221f] sm:text-3xl">
                Discuss a Similar Project
              </h3>

              <p className="text-sm font-light leading-7 text-stone-600">
                Schedule a direct architectural review with our principal
                architects to evaluate site conditions, spatial planning,
                and structural estimates.
              </p>

              {/* Contact button */}

              <Link
                to="/contact"
                className="group flex min-h-12 w-full items-center justify-between gap-3 rounded-xl bg-[#c51f32] px-4 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-md transition-colors duration-300 hover:bg-[#a71929] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c51f32] sm:px-5 sm:text-xs sm:tracking-widest"
              >
                <span>Initiate Review</span>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              {/* Site inspection button */}

              <Link
                to="/free-site-visit"
                className="group flex min-h-12 w-full items-center justify-between gap-3 rounded-xl bg-[#22221f] px-4 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22221f] sm:px-5 sm:text-xs sm:tracking-widest"
              >
                <span>Free Site Inspection</span>

                <Compass
                  size={18}
                  className="shrink-0 transition-transform duration-300 group-hover:rotate-12"
                />
              </Link>

            </div>
          </aside>

        </div>
      </section>

    </main>
  );
}
