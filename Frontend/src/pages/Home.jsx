
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Lenis from "lenis";
import {
  ArrowUpRight,
  Compass,
  Layers,
  ShieldCheck,
  Ruler,
  CheckCircle2,
  Sparkles,
  Check,
  Building,
  Home as HomeIcon,
  TreePine,
  Cpu,
  Clock,
  FileText,
  Star,
} from "lucide-react";
import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

// Responsive scroll reveal animation
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px 40px 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hiddenTransform =
    direction === "left"
      ? "-translate-x-6 sm:-translate-x-10 lg:-translate-x-16"
      : direction === "right"
        ? "translate-x-6 sm:translate-x-10 lg:translate-x-16"
        : "translate-y-8 sm:translate-y-12 lg:translate-y-20";

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: "1000ms",
        transitionDelay: `${delay}ms`,
      }}
      className={`transform transition-all ease-out ${
        isVisible
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : `opacity-0 ${hiddenTransform} scale-[0.98] pointer-events-none`
      } ${className}`}
    >
      {children}
    </div>
  );
}

const disciplines = [
  { name: "Residential Architecture", path: "/projects", icon: HomeIcon },
  { name: "Commercial Landmarks", path: "/projects", icon: Building },
  { name: "Tactile Interiors", path: "/projects", icon: Layers },
  { name: "Biophilic Landscapes", path: "/projects", icon: TreePine },
];

const processSteps = [
  {
    step: "STEP 01",
    title: "Tell us about your space",
    desc: "Share your plot dimensions, lifestyle needs, and architectural preferences with our principal architects.",
  },
  {
    step: "STEP 02",
    title: "We design & blueprint",
    desc: "We craft 3D CAD massing, Vastu-compliant layouts, and curated material specifications tailored to your budget.",
  },
  {
    step: "STEP 03",
    title: "Turnkey Execution & Handover",
    desc: "Our direct site managers supervise ground execution with multi-stage audits until final move-in handover.",
  },
];

const qualityFeatures = [
  {
    title: "Contextual Spatial Design",
    desc: "Beautiful bespoke layouts built around your exact lifestyle, making spatial flow intuitive and effortless.",
    icon: HomeIcon,
  },
  {
    title: "Vastu & Climate Optimized",
    desc: "Optimizing sun paths, thermal massing, and natural ventilation tailored specifically for Indian weather conditions.",
    icon: Compass,
  },
  {
    title: "Custom Turnkey Solutions",
    desc: "Complete architectural, structural, interior, and landscape execution integrated seamlessly under one roof.",
    icon: Layers,
  },
  {
    title: "100% Authentic Brands",
    desc: "Direct procurement from global tier-1 partners (Kohler, Häfele, Saint-Gobain) with zero counterfeit risks.",
    icon: ShieldCheck,
  },
  {
    title: "Multi-Stage Site Audits",
    desc: "Licensed principal architects conduct daily ground checks to ensure blueprint compliance down to millimeter level.",
    icon: Ruler,
  },
  {
    title: "Acoustic & Thermal Comfort",
    desc: "Double-glazed fenestrations and soundproof walling systems for undisturbed tranquility inside.",
    icon: Cpu,
  },
  {
    title: "Transparent Costing",
    desc: "Fixed price contracts with clear itemized bill of quantities (BOQ) — zero hidden charges or late surprises.",
    icon: FileText,
  },
  {
    title: "Lifetime Architectural Support",
    desc: "Post-handover warranty on waterproofing, structural integrity, and dedicated maintenance support.",
    icon: Clock,
  },
];

const livingFeatures = [
  "Vastu-Compliant Sun Path",
  "Tactile Natural Materiality",
  "Acoustic Noise Reduction",
  "Turnkey Handover On-Time",
];

const reviewsList = [
  {
    name: "Aarav Khanna",
    role: "Villa Owner · Golf City",
    rating: 5.0,
    text: "Desig9 Hause delivered our dream villa with unmatched structural elegance. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    role: "Interior Client · Hazratganj",
    rating: 4.8,
    text: "The interior space planning and lighting ambiance transformed our penthouse completely.",
  },
  {
    name: "Rohan Mehta",
    role: "Commercial Developer · Vibhuti Khand",
    rating: 4.9,
    text: "Professional execution and 100% adherence to timelines. Their CAD blueprints were flawless.",
  },
  {
    name: "Ananya Verma",
    role: "Homeowner · Gomti Nagar",
    rating: 4.8,
    text: "Very practical yet luxurious design approach. Every corner of our house feels well-thought out.",
  },
  {
    name: "Kabir Singhania",
    role: "Corporate Client · IT City",
    rating: 5.0,
    text: "The office landscape and ergonomics created a world-class environment for our team.",
  },
  {
    name: "Dr. Alok Srivastava",
    role: "Bungalow Client · Mahanagar",
    rating: 4.9,
    text: "From raw plot assessment to final move-in handover, their team handled everything smoothly.",
  },
  {
    name: "Sneha Kapoor",
    role: "Penthouse Owner · Golf City",
    rating: 4.8,
    text: "Bespoke joinery and Italian marble craftsmanship surpassed all our expectations.",
  },
  {
    name: "Vikramaditya Roy",
    role: "Hotelier · Sultanpur Road",
    rating: 5.0,
    text: "Our resort landscape design gained immense praise from guests. Exceptional architectural vision.",
  },
  {
    name: "Meera Joshi",
    role: "Interior Client · Aliganj",
    rating: 4.7,
    text: "Transparent pricing with zero hidden costs. Authentic materials used throughout.",
  },
  {
    name: "Arjun Rastogi",
    role: "Commercial Owner · Transport Nagar",
    rating: 4.9,
    text: "Modern glass façade and structural integrity handled with supreme engineering precision.",
  },
];

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    alt: "Luxury residential villa architecture",
    label: "RESIDENTIAL VILLA",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    alt: "Contemporary commercial tower",
    label: "COMMERCIAL HQ",
    accent: true,
    offset: true,
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    alt: "Luxury interior design",
    label: "LUXURY SUITE",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    alt: "Contemporary estate and landscape",
    label: "ESTATE LANDSCAPE",
    offset: true,
  },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let frameId;

    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#fbfaf7] font-sans text-[#22221f] selection:bg-[#c51f32] selection:text-white">
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
          will-change: transform;
        }

        .animate-scroll-continuous:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-continuous {
            animation-duration: 100s;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#c51f32]/30 bg-[#1c1c19] pb-16 pt-28 text-white sm:pb-24 sm:pt-36 lg:pb-32 lg:pt-44">
        <div className="pointer-events-none absolute right-[-100px] top-1/4 h-[300px] w-[300px] rounded-full bg-[#c51f32]/10 blur-[100px] sm:right-10 sm:h-[600px] sm:w-[600px] sm:blur-[160px]" />
        <div className="pointer-events-none absolute bottom-10 left-10 hidden h-[400px] w-[400px] rounded-full bg-white/5 blur-[120px] sm:block" />

        <div className="relative z-10 mx-auto grid w-[calc(100%-32px)] max-w-[1320px] items-center gap-10 sm:w-[calc(100%-48px)] sm:gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <ScrollReveal
            direction="left"
            delay={100}
            className="space-y-6 sm:space-y-8 lg:col-span-6"
          >
            <h1 className="max-w-3xl font-serif text-[clamp(2.35rem,8vw,3.5rem)] font-light leading-[1.08] tracking-tight sm:text-6xl sm:leading-[1.04] lg:text-7xl xl:text-8xl">
              Designing Spaces &
              <br className="hidden sm:block" />
              <span className="italic text-[#c51f32]">
                {" "}Crafting Experiences.
              </span>
            </h1>

            <p className="max-w-xl text-sm font-light leading-7 text-stone-300 sm:text-base md:text-lg">
              Multidisciplinary studio offering architecture, interior, and
              landscape design solutions that are visually appealing and
              highly functional.
            </p>

            <div className="space-y-3 pt-1 sm:pt-2">
              <span className="block font-mono text-[9px] font-bold uppercase tracking-[.18em] text-[#c51f32] sm:text-[10px] sm:tracking-widest">
                WHAT WE BUILD // CORE DISCIPLINES
              </span>

              <div className="grid grid-cols-1 gap-2.5 min-[380px]:grid-cols-2 sm:gap-3">
                {disciplines.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="group flex min-h-[52px] min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-xs font-mono transition-all duration-300 hover:border-[#c51f32] hover:bg-[#c51f32] sm:p-3.5"
                  >
                    <item.icon
                      size={16}
                      className="shrink-0 text-[#c51f32] transition-colors group-hover:text-white"
                    />
                    <span className="min-w-0 leading-relaxed">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-3 pt-2 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:gap-4 sm:pt-4">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#c51f32] px-5 py-3.5 text-center text-[10px] font-semibold uppercase tracking-[.16em] text-white shadow-lg shadow-[#c51f32]/20 transition-all hover:bg-[#a61828] sm:px-7 sm:text-xs sm:tracking-[.2em] lg:px-8"
              >
                <span>Private Commission</span>
                <ArrowUpRight size={16} />
              </Link>

              <Link
                to="/studio"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/30 bg-transparent px-5 py-3.5 text-center text-[10px] font-semibold uppercase tracking-[.16em] text-white transition-all hover:bg-white hover:text-[#22221f] sm:px-7 sm:text-xs sm:tracking-[.2em] lg:px-8"
              >
                <span>View Studio</span>
                <Compass size={16} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Responsive 2 x 2 Image Grid */}
          <ScrollReveal
            direction="right"
            delay={200}
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-6"
          >
            {heroImages.map((image) => (
              <Link
                key={image.label}
                to="/projects"
                className={`group relative aspect-[4/5] min-w-0 overflow-hidden rounded-xl border border-white/10 shadow-2xl sm:rounded-2xl ${
                  image.offset ? "mt-5 sm:mt-8" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div
                  className={`absolute bottom-2 left-2 max-w-[calc(100%-16px)] rounded px-2 py-1 font-mono text-[8px] leading-relaxed text-white sm:bottom-3 sm:left-3 sm:px-2.5 sm:text-[10px] ${
                    image.accent ? "bg-[#c51f32]" : "bg-black/60 backdrop-blur-md"
                  }`}
                >
                  {image.label}
                </div>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ABOUT STUDIO */}
      <section className="border-b border-stone-200 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1320px] items-center gap-10 sm:w-[calc(100%-48px)] sm:gap-12 lg:grid-cols-12">
          <ScrollReveal
            direction="left"
            className="space-y-5 sm:space-y-6 lg:col-span-6"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#c51f32] sm:tracking-[.3em]">
              ABOUT DESIG9 HAUSE
            </span>

            <h2 className="font-serif text-3xl leading-tight text-[#22221f] sm:text-4xl md:text-5xl">
              Translating ideas into meaningful spaces.
            </h2>

            <p className="text-sm font-light leading-7 text-stone-600">
              Founded with a vision for clarity, practicality, and timeless
              design. Every project—whether a residence, commercial space, or
              hospitality venture—is treated as a unique opportunity.
            </p>

            <div className="pt-1">
              <Link
                to="/studio"
                className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#c51f32] hover:underline sm:text-xs"
              >
                <span>View Studio & Team</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-stone-200 pt-5 min-[380px]:grid-cols-2 sm:gap-6 sm:pt-6">
              <div>
                <h4 className="font-serif text-xl text-[#22221f]">Sagar Vij</h4>
                <p className="mt-1 font-mono text-xs text-[#c51f32]">
                  Founder | Architect
                </p>
              </div>
              <div>
                <h4 className="font-serif text-xl text-[#22221f]">
                  Navya Agarwal
                </h4>
                <p className="mt-1 font-mono text-xs text-[#c51f32]">
                  Interior Designer
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={150}
            className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-3 sm:gap-4 lg:col-span-6"
          >
            {[
              {
                number: "1,500+",
                label: "Projects Done",
                color: "text-[#c51f32]",
              },
              {
                number: "12+",
                label: "Cities Active",
                color: "text-[#22221f]",
              },
              {
                number: "100%",
                label: "Transparency",
                color: "text-[#c51f32]",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-[105px] flex-col items-center justify-center rounded-2xl border border-stone-200 bg-[#fbfaf7] p-4 text-center sm:min-h-[130px] sm:p-5 lg:p-6"
              >
                <div
                  className={`font-serif text-2xl sm:text-3xl ${stat.color}`}
                >
                  {stat.number}
                </div>
                <div className="mt-2 font-mono text-[9px] uppercase leading-relaxed text-stone-500 sm:text-[10px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ARCHITECTURAL PROCESS */}
      <section className="relative border-b border-stone-300 bg-[#fbfaf7] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto w-[calc(100%-32px)] max-w-[1320px] space-y-10 sm:w-[calc(100%-48px)] sm:space-y-12 lg:space-y-16">
          <ScrollReveal direction="left" className="max-w-2xl space-y-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#c51f32] sm:tracking-[.3em]">
              EXECUTION METHODOLOGY
            </span>
            <h2 className="font-serif text-3xl leading-tight text-[#22221f] sm:text-5xl lg:text-6xl">
              Simple Process.
              <br />
              <span className="italic text-[#c51f32]">Powerful Results.</span>
            </h2>
            <p className="text-sm font-light leading-7 text-stone-600 sm:text-base">
              From topographical scoping to final key handover, we manage the
              complete lifecycle. You bring the vision — we build the legacy
              landmark.
            </p>
            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#c51f32] hover:underline sm:text-xs"
              >
                <span>View All Services</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
            <ScrollReveal
              direction="left"
              delay={100}
              className="space-y-3 sm:space-y-5 lg:col-span-5 lg:space-y-8"
            >
              {processSteps.map((st, i) => (
                <div
                  key={st.step}
                  className="flex items-start gap-3 rounded-2xl border border-transparent p-3 transition-all hover:border-stone-200 hover:bg-white sm:gap-5 sm:p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c51f32] text-xs font-bold text-white shadow-md sm:h-10 sm:w-10">
                    0{i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[9px] font-bold tracking-widest text-[#c51f32] sm:text-[10px]">
                      {st.step}
                    </span>
                    <h3 className="mt-1 font-serif text-xl leading-snug text-[#22221f] sm:text-2xl">
                      {st.title}
                    </h3>
                    <p className="mt-2 text-xs font-light leading-6 text-stone-600 sm:text-sm">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal
              direction="right"
              delay={150}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-7 lg:gap-6"
            >
              <div className="space-y-5 rounded-2xl border border-stone-200 bg-white p-5 shadow-lg sm:space-y-6 sm:rounded-3xl sm:p-6 lg:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-[9px] font-bold text-emerald-700 sm:text-[10px]">
                    PERFORMANCE
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#22221f]">
                  Built for Performance
                </h3>
                <p className="text-xs font-light leading-6 text-stone-600 sm:text-sm">
                  Engineered with seismic-resistant post-tensioned slabs,
                  acoustic double glazing, and thermal insulation.
                </p>

                <div className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-3 sm:gap-4 sm:p-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-emerald-500 font-serif text-lg font-bold text-[#22221f] sm:h-16 sm:w-16 sm:text-xl">
                    98%
                  </div>
                  <div className="min-w-0 text-xs">
                    <span className="block font-bold text-[#22221f]">
                      Architectural Precision
                    </span>
                    <span className="mt-1 block font-mono text-[9px] leading-relaxed text-stone-500 sm:text-[10px]">
                      Zero Structural Deviations
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-5 rounded-2xl border border-stone-200 bg-white p-5 shadow-lg sm:space-y-6 sm:rounded-3xl sm:p-6 lg:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="rounded-2xl bg-[#c51f32]/10 p-3 text-[#c51f32]">
                    <Sparkles size={24} />
                  </div>
                  <span className="rounded-full border border-[#c51f32]/20 bg-[#c51f32]/10 px-3 py-1 font-mono text-[9px] font-bold text-[#c51f32] sm:text-[10px]">
                    EXPERIENCE
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#22221f]">
                  Designed for Living
                </h3>
                <p className="text-xs font-light leading-6 text-stone-600 sm:text-sm">
                  Every space prioritizes natural daylighting orientation,
                  biophilic courtyards, and ergonomic spatial flow.
                </p>

                <ul className="space-y-3 pt-1 font-mono text-[10px] text-stone-700 sm:text-xs">
                  {livingFeatures.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 shrink-0 text-[#c51f32]"
                        size={14}
                      />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="bg-[#fbfaf7] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto w-[calc(100%-32px)] max-w-[1320px] space-y-10 sm:w-[calc(100%-48px)] sm:space-y-12 lg:space-y-16">
          <div className="flex flex-col justify-between gap-6 border-b border-stone-300 pb-6 sm:gap-8 sm:pb-8 md:flex-row md:items-end">
            <ScrollReveal direction="left">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#c51f32] sm:tracking-[.3em]">
                SELECTED WORKS
              </span>
              <h2 className="mt-2 font-serif text-3xl leading-tight text-[#22221f] sm:text-5xl lg:text-6xl">
                A Few Things We've Made
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <Link
                to="/projects"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#c51f32] px-5 py-3.5 text-xs font-semibold uppercase tracking-[.15em] text-white shadow-md transition-all hover:bg-[#a61828] sm:px-7 sm:tracking-[.2em]"
              >
                <span>View All Projects</span>
                <ArrowUpRight size={16} />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {projects.slice(0, 2).map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 120} direction="up">
                <ProjectCard project={p} index={i} />
              </ScrollReveal>
            ))}
          </div>

          <div className="pt-2 text-center sm:pt-6">
            <Link
              to="/projects"
              className="inline-flex max-w-full items-center justify-center gap-2 border-b border-[#22221f] pb-1 text-center font-mono text-[10px] font-semibold uppercase leading-relaxed tracking-wider text-[#22221f] hover:text-[#c51f32] sm:text-xs sm:tracking-widest"
            >
              <span>Explore full portfolio of architectural works</span>
              <ArrowUpRight size={14} className="shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* QUALITY FEATURES */}
      <section className="relative overflow-hidden bg-[#c51f32] py-16 text-white shadow-2xl sm:py-20 lg:py-32">
        <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-[1320px] space-y-10 sm:w-[calc(100%-48px)] sm:space-y-12 lg:space-y-16">
          <ScrollReveal
            direction="left"
            className="mx-auto max-w-2xl space-y-3 text-center"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-white/90 sm:tracking-[.3em]">
              WHY CHOOSE DESIG9 HAUSE
            </span>
            <h2 className="font-serif text-3xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
              Built for Unmatched Quality
            </h2>
            <p className="text-xs font-light leading-6 text-white/80 sm:text-sm">
              Designed following international architectural standards to
              maximize your estate's value and endurance.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {qualityFeatures.map((card, idx) => (
              <ScrollReveal
                key={card.title}
                delay={(idx % 4) * 70}
                direction="up"
                className="group h-full"
              >
                <div className="flex h-full flex-col rounded-2xl border border-white/20 bg-white p-5 text-[#22221f] shadow-xl transition-all duration-300 hover:shadow-2xl sm:rounded-3xl sm:p-6 lg:p-7">
                  <div className="mb-5 w-fit rounded-2xl bg-[#c51f32]/10 p-3.5 text-[#c51f32] transition-all group-hover:bg-[#c51f32] group-hover:text-white sm:mb-6">
                    <card.icon size={22} />
                  </div>
                  <h3 className="font-serif text-xl leading-snug text-[#22221f] transition-colors group-hover:text-[#c51f32]">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-xs font-light leading-6 text-stone-600 sm:text-sm">
                    {card.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL PRACTICE */}
      <section className="relative overflow-hidden border-y border-[#c51f32]/40 bg-[#1c1c19] py-16 text-[#fbfaf7] sm:py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, #c51f32 0%, transparent 60%),
              linear-gradient(0deg, transparent 24px, rgba(255,255,255,0.12) 25px, rgba(255,255,255,0.12) 26px, transparent 27px),
              linear-gradient(90deg, transparent 24px, rgba(255,255,255,0.12) 25px, rgba(255,255,255,0.12) 26px, transparent 27px)
            `,
            backgroundSize: "100% 100%, 100px 100px, 100px 100px",
          }}
        />

        <div className="pointer-events-none absolute right-[-200px] top-[-100px] flex h-[400px] w-[400px] items-center justify-center rounded-full border border-[#c51f32]/20 sm:right-[-10%] sm:top-[-20%] sm:h-[600px] sm:w-[600px]">
          <div className="h-[280px] w-[280px] rounded-full border border-dashed border-stone-600/40 sm:h-[450px] sm:w-[450px]" />
        </div>

        <div className="relative z-10 mx-auto grid w-[calc(100%-32px)] max-w-[1320px] grid-cols-1 items-center gap-10 sm:w-[calc(100%-48px)] sm:gap-12 lg:grid-cols-12">
          <ScrollReveal direction="left" delay={100} className="lg:col-span-7">
            <span className="font-mono text-[10px] font-bold uppercase leading-relaxed tracking-[.2em] text-[#c51f32] sm:tracking-[.3em]">
              AERO-STRUCTURAL PRACTICE & TIMELINE GUARANTEE
            </span>

            <h3 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
              Bridging poetic spatial concepts with{" "}
              <span className="italic text-[#c51f32]">
                rigorous site execution.
              </span>
            </h3>

            <p className="mt-5 max-w-2xl text-sm font-light leading-7 text-stone-400 sm:mt-6 sm:text-base">
              Led by Founder & Architect Sagar Vij and Interior Designer Navya
              Agarwal, Desig9 Hause ensures that every architectural blueprint
              undergoes multi-stage structural validation before execution.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 border-t border-stone-800 pt-6 min-[480px]:grid-cols-2 sm:mt-10 sm:gap-6 sm:pt-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 border border-[#c51f32]/30 bg-[#c51f32]/10 p-2 text-[#c51f32]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white">
                    Transparent Execution
                  </h4>
                  <p className="mt-1 text-xs font-light leading-6 text-stone-400">
                    Full breakdown of structural budgets and material
                    specifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 border border-[#c51f32]/30 bg-[#c51f32]/10 p-2 text-[#c51f32]">
                  <Layers size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white">
                    Photorealistic Curation
                  </h4>
                  <p className="mt-1 text-xs font-light leading-6 text-stone-400">
                    Complete clarity on light, texture, and materials prior to
                    construction.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={150}
            className="relative border border-stone-700 bg-[#22221f]/90 p-5 shadow-2xl backdrop-blur-xl sm:p-8 lg:col-span-5 lg:p-10"
          >
            <div className="mb-6 pr-2 text-right font-mono text-[9px] tracking-widest text-stone-500">
              [AERO-SPEC: DL-2026]
            </div>

            <Sparkles className="mb-5 text-[#c51f32] sm:mb-6" size={34} />

            <h4 className="font-serif text-2xl leading-tight text-white">
              Initiate a Private Commission
            </h4>
            <p className="mt-3 text-sm font-light leading-7 text-stone-400">
              Book a direct consultation with our principal architects to
              review site blueprints, spatial requirements, and custom
              timelines.
            </p>

            <Link
              to="/contact"
              className="mt-6 flex min-h-12 w-full items-center justify-between gap-3 bg-[#c51f32] px-4 py-4 text-[10px] font-semibold uppercase leading-relaxed tracking-wider text-white transition-all duration-300 hover:bg-[#a61828] sm:mt-8 sm:px-6 sm:text-xs sm:tracking-widest"
            >
              <span>Schedule Architectural Review</span>
              <ArrowUpRight size={16} className="shrink-0" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CLIENT REVIEWS */}
      <section className="overflow-hidden border-t border-stone-200 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto mb-8 flex w-[calc(100%-32px)] max-w-[1320px] flex-col justify-between gap-4 sm:mb-12 sm:w-[calc(100%-48px)] sm:flex-row sm:items-end sm:gap-6">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#c51f32] sm:tracking-[.3em]">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="mt-2 font-serif text-3xl text-[#22221f] sm:text-4xl lg:text-5xl">
              Studio Reviews
            </h2>
          </div>
        </div>

        <div className="no-scrollbar relative w-full overflow-hidden">
          <div className="animate-scroll-continuous gap-3 sm:gap-6">
            {[...reviewsList, ...reviewsList].map((rev, idx) => (
              <article
                key={`${rev.name}-${idx}`}
                className="flex w-[min(82vw,320px)] shrink-0 flex-col justify-between rounded-2xl border border-stone-200 bg-[#fbfaf7] p-5 shadow-sm transition-all duration-300 hover:border-[#c51f32] hover:shadow-xl sm:w-[340px] sm:rounded-3xl sm:p-7 lg:w-[380px] lg:p-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c51f32] text-sm font-bold text-white shadow-md sm:h-12 sm:w-12">
                      {rev.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-serif text-base font-semibold text-[#22221f] sm:text-lg">
                        {rev.name}
                      </h3>
                      <p className="mt-1 text-[9px] leading-relaxed text-stone-500 sm:text-[10px]">
                        {rev.role}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex gap-1 text-amber-500"
                    aria-label={`${rev.rating} out of 5 stars`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-xs font-light italic leading-6 text-stone-600 sm:text-sm">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between gap-2 border-t border-stone-200 pt-4 font-mono text-[8px] text-stone-400 sm:text-[10px]">
                  <span>VERIFIED CLIENT</span>
                  <span>{Number(rev.rating).toFixed(1)} RATING</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-[#fbfaf7] py-16 sm:py-20 lg:py-28">
        <ScrollReveal
          direction="up"
          delay={100}
          className="mx-auto flex w-[calc(100%-32px)] max-w-[1320px] flex-col items-start justify-between gap-7 border-b border-stone-300 pb-10 sm:w-[calc(100%-48px)] sm:gap-8 sm:pb-16 lg:flex-row lg:items-center"
        >
          <div className="max-w-3xl">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#c51f32] sm:tracking-[.3em]">
              PRIVATE COMMISSION
            </span>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#22221f] sm:text-5xl lg:text-6xl">
              Ready to construct your
              <br className="hidden sm:block" />
              <em className="font-serif font-normal italic text-[#c51f32]">
                {" "}legacy landmark?
              </em>
            </h2>
          </div>

          <div className="flex w-full flex-col items-stretch gap-3 min-[480px]:flex-row min-[480px]:flex-wrap sm:gap-4 lg:w-auto lg:shrink-0">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#c51f32] px-5 py-4 text-center text-[10px] font-semibold uppercase tracking-[.15em] text-white transition-all hover:bg-[#a61828] sm:px-7 sm:text-xs sm:tracking-[.2em] lg:px-8"
            >
              <span>Initiate Commission</span>
              <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/free-site-visit"
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#22221f] px-5 py-4 text-center text-[10px] font-semibold uppercase tracking-[.15em] text-white transition-all hover:bg-black sm:px-7 sm:text-xs sm:tracking-[.2em] lg:px-8"
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
