
import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Lenis from "lenis";
import {
  ArrowUpRight,
  Compass,
  Ruler,
  ShieldCheck,
  Star,
  CheckCircle2,
  ArrowRight,
  HardHat,
  Truck,
  FileCheck,
} from "lucide-react";
import { projects, projectCategories } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

// Responsive cinematic scroll reveal
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
      {
        threshold: 0.05,
        rootMargin: "0px 0px 40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hiddenTransform = {
    up: "translate-y-10 sm:translate-y-20",
    left: "-translate-x-6 sm:-translate-x-16",
    right: "translate-x-6 sm:translate-x-16",
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: "1200ms",
        transitionDelay: `${delay}ms`,
      }}
      className={`min-w-0 max-w-full transition-[opacity,transform] ease-out ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${
              hiddenTransform[direction] || hiddenTransform.up
            } pointer-events-none`
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [activeTab, setActiveTab] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState({
    cardIndex: null,
    itemIndex: null,
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
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
  }, []);

  const filtered = useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category),
    [category]
  );

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
    { name: "Rajnish Shukla", role: "Estate Owner · Sultanpur Road", rating: 4.9, text: "Uncompromising quality and seamless execution. The best architectural investment." },
  ];

  const guaranteeTabs = [
    {
      id: "effortless",
      title: "Buy & Build, Effortlessly",
      badge: "SINGLE POINT OF CONTACT",
      subTitle: "Our Project Managers manage everything, as a single point of contact",
    },
    {
      id: "price",
      title: "Best Price Guarantee",
      badge: "BEST PRICE GUARANTEE",
      subTitle: "Transparent structural costing with zero hidden markups",
    },
    {
      id: "materials",
      title: "Genuine Materials Only",
      badge: "GENUINE MATERIALS ONLY",
      subTitle: "Curated 100% authentic materials directly sourced from luxury brands",
    },
    {
      id: "precision",
      title: "Precision by Trusted Experts",
      badge: "PRECISION BY TRUSTED EXPERTS",
      subTitle: "Multi-stage site quality audits by licensed principal architects",
    },
  ];

  const addonsList = [
    {
      category: "Furnitures add-ons",
      items: ["Bespoke Sofa Sets", "Custom Beds & Headboards", "Dining Sets & Console Tables"],
      poweredBy: "DURIAN · GODREJ INTERIO · NILKAMAL",
    },
    {
      category: "Appliances add-ons",
      items: ["Ducted Air Conditioning", "Built-in Refrigerator Units", "Acoustic Washing Systems"],
      poweredBy: "LG · SAMSUNG · BOSCH",
    },
    {
      category: "Fixtures add-ons",
      items: ["Premium Bathroom Fittings", "Designer Thermostatic Faucets", "Rainfall Shower Systems"],
      poweredBy: "JAQUAR · KOHLER · HINDWARE",
    },
    {
      category: "Electrical add-ons",
      items: ["Smart Switches & Sockets", "Architectural Magnetic Tracks", "Silent BLDC Ceiling Fans"],
      poweredBy: "HAVELLS · SCHNEIDER · LEGRAND",
    },
    {
      category: "Services add-ons",
      items: ["Textured & Metallic Paintings", "Seamless Gypsum False Ceilings", "Imported Textile Wallpapers"],
      poweredBy: "ASIAN PAINTS · BERGER · NEROLAC",
    },
    {
      category: "Outdoor add-ons",
      items: ["Glass Porta Cabins", "Bio-climatic Pergolas", "Landscape Garden Pathways"],
      poweredBy: "DESIG9 HAUSE OUTDOOR LAB",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-[#fbfaf7] font-sans text-[#22221f] selection:bg-[#c51f32] selection:text-white">
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
          will-change: transform;
        }

        .animate-scroll-continuous:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll-continuous {
            animation-duration: 65s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-continuous {
            animation-duration: 120s;
          }
        }

        .project-scroll {
          overscroll-behavior-x: contain;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white pb-12 pt-28 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#c51f32]/5 blur-[100px] sm:right-1/3 sm:h-[500px] sm:w-[500px] sm:blur-[150px]" />

        <div className="relative z-10 mx-auto grid w-[calc(100%-32px)] max-w-[1320px] items-center gap-10 sm:w-[calc(100%-48px)] sm:gap-12 lg:grid-cols-12">
          <ScrollReveal direction="left" delay={100} className="min-w-0 space-y-5 sm:space-y-6 lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-[#c51f32] sm:w-12" />
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#c51f32] sm:text-[11px] sm:tracking-[0.3em]">
                DESIG9 HAUSE // ARCHITECTURAL PORTFOLIO
              </span>
            </div>

            <h1 className="break-words font-serif text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Raw To <span className="font-normal italic text-[#c51f32]">Ready.</span>
            </h1>

            <p className="max-w-xl text-sm font-light leading-7 text-stone-600 sm:text-base md:text-lg md:leading-relaxed">
              Turnkey spatial transformation studio shaping luxury residential estates, commercial landmarks, and resort landscapes across India.
            </p>

            <div className="flex flex-col gap-3 pt-2 min-[420px]:flex-row min-[420px]:flex-wrap">
              <Link
                to="/free-site-visit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#22221f] px-5 py-3.5 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#c51f32] min-[420px]:w-auto sm:px-7 sm:text-xs sm:tracking-[0.2em]"
              >
                <span>Book Free Site Visit</span>
                <Compass size={16} className="shrink-0" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 border border-stone-300 bg-stone-100 px-5 py-3.5 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-[#22221f] transition-colors hover:border-[#c51f32] hover:text-[#c51f32] min-[420px]:w-auto sm:px-7 sm:text-xs sm:tracking-[0.2em]"
              >
                <span>Plan Your Space</span>
                <ArrowUpRight size={16} className="shrink-0" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 border-t border-stone-200 pt-6 sm:gap-6 sm:pt-8">
              <div className="min-w-0">
                <div className="font-serif text-2xl text-[#22221f] sm:text-3xl">12+</div>
                <div className="mt-1 text-[8px] uppercase leading-relaxed tracking-[0.08em] text-stone-500 sm:text-[10px] sm:tracking-widest">
                  Cities Covered
                </div>
              </div>

              <div className="min-w-0">
                <div className="font-serif text-2xl text-[#c51f32] sm:text-3xl">1,500+</div>
                <div className="mt-1 text-[8px] uppercase leading-relaxed tracking-[0.08em] text-stone-500 sm:text-[10px] sm:tracking-widest">
                  Projects Delivered
                </div>
              </div>

              <div className="min-w-0">
                <div className="font-serif text-2xl text-[#22221f] sm:text-3xl">175+</div>
                <div className="mt-1 text-[8px] uppercase leading-relaxed tracking-[0.08em] text-stone-500 sm:text-[10px] sm:tracking-widest">
                  Brand Partners
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Overlapping architectural images */}
          <ScrollReveal
            direction="right"
            delay={200}
            className="relative mx-auto h-[330px] w-full min-w-0 max-w-[600px] min-[400px]:h-[390px] sm:h-[500px] lg:col-span-6 lg:h-[480px]"
          >
            <div className="group absolute right-0 top-0 h-[78%] w-[83%] overflow-hidden rounded-2xl border-[3px] border-white shadow-2xl sm:rounded-3xl sm:border-4">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                alt="Apex Corporate Hub"
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 space-y-1 text-white sm:bottom-6 sm:left-6 sm:right-6">
                <span className="inline-block rounded bg-[#c51f32] px-2 py-1 text-[8px] font-mono uppercase tracking-wider sm:px-2.5 sm:text-[10px] sm:tracking-widest">
                  COMMERCIAL LANDMARK
                </span>
                <h3 className="break-words font-serif text-sm sm:text-xl">
                  Apex Corporate Hub · Vibhuti Khand
                </h3>
              </div>
            </div>

            <div className="group absolute left-0 top-5 z-20 h-[32%] w-[45%] overflow-hidden rounded-xl border-2 border-white shadow-2xl sm:top-6 sm:h-[160px] sm:w-[48%] sm:rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
                alt="Corporate Interior Workspace"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-1.5 left-1.5 rounded bg-black/80 px-2 py-1 text-[7px] uppercase text-white sm:bottom-2 sm:left-2 sm:text-[9px]">
                Executive Workspace
              </div>
            </div>

            <div className="group absolute bottom-0 left-[7%] z-30 h-[32%] w-[51%] overflow-hidden rounded-xl border-2 border-white shadow-2xl sm:bottom-2 sm:left-8 sm:h-[160px] sm:w-[52%] sm:rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600"
                alt="Innovation Hub"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-1.5 left-1.5 rounded bg-black/80 px-2 py-1 text-[7px] uppercase text-white sm:bottom-2 sm:left-2 sm:text-[9px]">
                Collaboration Suite
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PROJECT FILTERS AND GRID */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-[calc(100%-32px)] max-w-[1320px] sm:w-[calc(100%-48px)]">
          <div className="mb-9 flex flex-col gap-6 border-b border-stone-300 pb-6 sm:mb-14 sm:gap-8 sm:pb-8 md:flex-row md:items-end md:justify-between">
            <ScrollReveal direction="left" delay={100} className="min-w-0">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#c51f32] sm:text-[10px] sm:tracking-[0.3em]">
                CURATED COMMISSIONS
              </span>
              <h2 className="mt-2 break-words font-serif text-3xl text-[#22221f] sm:text-5xl lg:text-6xl">
                Selected Architectural Works
              </h2>
            </ScrollReveal>

            <ScrollReveal
              direction="right"
              delay={150}
              className="project-scroll no-scrollbar flex max-w-full flex-nowrap gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible"
            >
              {projectCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                  className={`min-h-10 shrink-0 rounded-full border px-3 py-2 text-[10px] uppercase tracking-wider transition-all sm:px-4 sm:text-[11px] sm:tracking-widest ${
                    category === item
                      ? "border-[#c51f32] bg-[#c51f32] text-white shadow-md"
                      : "border-stone-300 bg-white text-stone-700 hover:border-[#c51f32]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </ScrollReveal>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            {filtered.map((project, index) => (
              <ScrollReveal
                key={project.id}
                delay={(index % 3) * 100}
                direction="up"
                className="min-w-0"
              >
                <ProjectCard project={project} index={index} />
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-12 text-center text-sm text-stone-500">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>

      {/* ADD-ON CARDS */}
      <section className="relative overflow-hidden bg-[#c51f32] py-16 text-white shadow-2xl sm:py-20 lg:py-28">
        <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-[1320px] space-y-10 sm:w-[calc(100%-48px)] sm:space-y-16">
          <ScrollReveal
            direction="left"
            delay={100}
            className="mx-auto max-w-2xl space-y-3 text-center"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/90 sm:text-[10px] sm:tracking-[0.3em]">
              COMPLETE SPECIFICATION HUB
            </span>
            <h2 className="font-serif text-3xl font-light text-white sm:text-5xl lg:text-6xl">
              Raw To Move-In Ready
            </h2>
            <p className="text-xs font-light leading-6 text-white/80 sm:text-sm">
              A flat becomes move-in ready when you have these custom structural
              and interior add-ons.
            </p>
          </ScrollReveal>

          <div className="project-scroll no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 pt-2 sm:gap-6 sm:pb-6 sm:pt-4">
            {addonsList.map((addon, cardIndex) => (
              <article
                key={cardIndex}
                className="w-[min(86vw,320px)] min-w-[min(86vw,320px)] shrink-0 snap-start rounded-2xl border border-white/20 bg-white p-5 text-[#22221f] shadow-2xl sm:w-[360px] sm:min-w-[360px] sm:rounded-3xl sm:p-8"
              >
                <div className="flex items-start justify-between gap-3 border-b border-stone-200 pb-4">
                  <h3 className="min-w-0 font-serif text-lg font-semibold sm:text-xl">
                    {addon.category}
                  </h3>
                  <span className="shrink-0 rounded bg-[#c51f32] px-2 py-1 text-[8px] font-bold tracking-wider text-white sm:px-2.5 sm:text-[9px]">
                    ADD-ON
                  </span>
                </div>

                <div className="my-5 space-y-3 sm:my-6">
                  {addon.items.map((item, itemIndex) => {
                    const isCardActive =
                      activeItemIndex.cardIndex === cardIndex;
                    const isItemActive =
                      isCardActive &&
                      activeItemIndex.itemIndex === itemIndex;
                    const isAnyActiveInCard =
                      isCardActive &&
                      activeItemIndex.itemIndex !== null;

                    return (
                      <button
                        key={itemIndex}
                        type="button"
                        onMouseEnter={() =>
                          setActiveItemIndex({
                            cardIndex,
                            itemIndex,
                          })
                        }
                        onMouseLeave={() =>
                          setActiveItemIndex({
                            cardIndex: null,
                            itemIndex: null,
                          })
                        }
                        onFocus={() =>
                          setActiveItemIndex({
                            cardIndex,
                            itemIndex,
                          })
                        }
                        onBlur={() =>
                          setActiveItemIndex({
                            cardIndex: null,
                            itemIndex: null,
                          })
                        }
                        className={`flex w-full items-center gap-2 rounded-xl border p-3 text-left text-xs transition-all duration-300 sm:p-3.5 ${
                          isItemActive
                            ? "z-10 scale-[1.01] border-[#c51f32] bg-[#c51f32] font-medium text-white shadow-lg"
                            : isAnyActiveInCard
                              ? "border-transparent bg-stone-100 text-stone-500 opacity-60"
                              : "border-stone-200 bg-stone-100 text-stone-700 hover:border-[#c51f32]/40"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                            isItemActive ? "bg-white" : "bg-[#c51f32]"
                          }`}
                        />
                        <span className="min-w-0 break-words">{item}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="border-t border-stone-200 pt-4">
                  <span className="block text-[9px] uppercase text-stone-500">
                    Powered by:
                  </span>
                  <span className="mt-1 block break-words text-[10px] font-bold leading-5 tracking-wide text-[#c51f32] sm:text-[11px]">
                    {addon.poweredBy}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="relative overflow-hidden border-t border-black/10 bg-[#fbfaf7] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#22221f_1px,transparent_1px),linear-gradient(to_bottom,#22221f_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 sm:bg-[size:48px_48px] sm:opacity-20" />

        <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-[1280px] sm:w-[calc(100%-48px)]">
          <div className="grid min-w-0 items-start gap-8 lg:grid-cols-12 lg:items-center lg:gap-8">
            <div className="min-w-0 space-y-6 sm:space-y-8 lg:col-span-5">
              <div>
                <h2 className="font-serif text-4xl font-light leading-tight text-[#22221f] sm:text-5xl lg:text-6xl">
                  Absolutely
                  <br />
                  <span className="font-semibold">Guaranteed</span>
                </h2>
                <p className="mt-4 max-w-md text-xs leading-6 text-stone-600 sm:text-sm sm:leading-relaxed">
                  Everything you need — handled with precision, transparency,
                  and complete peace of mind.
                </p>
              </div>

              <div className="space-y-3">
                {guaranteeTabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    aria-pressed={activeTab === index}
                    className={`flex min-h-12 w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left text-xs font-medium transition-all duration-300 sm:rounded-full sm:px-5 sm:py-3.5 sm:text-sm ${
                      activeTab === index
                        ? "border-[#c51f32] bg-[#c51f32] text-white shadow-lg shadow-[#c51f32]/20 sm:translate-x-1"
                        : "border-transparent bg-stone-200/60 text-stone-700 hover:bg-stone-300/50"
                    }`}
                  >
                    <span className="min-w-0">{tab.title}</span>
                    <ArrowRight
                      size={16}
                      className={`shrink-0 transition-transform duration-300 ${
                        activeTab === index ? "translate-x-1" : "opacity-40"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-0 min-w-0 flex-col items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white p-4 shadow-xl sm:min-h-[420px] sm:rounded-3xl sm:p-8 md:p-12 lg:col-span-7 lg:min-h-[460px]">
              <div className="mb-6 max-w-md text-center sm:mb-8">
                <h3 className="font-serif text-base font-medium leading-relaxed text-[#22221f] sm:text-xl">
                  {guaranteeTabs[activeTab].subTitle}
                </h3>
              </div>

              <div className="w-full min-w-0">
                <div className="mb-6 flex justify-center">
                  <div className="flex max-w-full items-center justify-center gap-2 rounded-xl bg-[#c51f32] px-3 py-2 text-center text-[9px] font-bold uppercase tracking-wider text-white shadow-md sm:px-5 sm:text-xs">
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span>{guaranteeTabs[activeTab].badge}</span>
                  </div>
                </div>

                {activeTab === 0 && (
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex justify-center">
                      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-black/10 bg-[#fbfaf7] p-2 text-center shadow-xl sm:h-28 sm:w-28">
                        <div className="font-serif text-xs font-bold text-[#c51f32] sm:text-sm">
                          DESIG9 HAUSE
                        </div>
                        <div className="mt-0.5 text-[8px] uppercase tracking-widest text-stone-500 sm:text-[9px]">
                          ASSIST
                        </div>
                      </div>
                    </div>

                    <div className="relative w-full border-t-2 border-dashed border-stone-300">
                      <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c51f32]" />
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
                      {[
                        { title: "Architects", sub: "Design that inspires", icon: Compass },
                        { title: "Engineers", sub: "Structural excellence", icon: Ruler },
                        { title: "Contractors", sub: "Quality execution", icon: HardHat },
                        { title: "Material Suppliers", sub: "Curated & genuine", icon: Truck },
                        { title: "Site Supervisors", sub: "On-ground assurance", icon: FileCheck },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-black/5 bg-[#fbfaf7] p-3"
                        >
                          <item.icon className="mb-1.5 h-5 w-5 text-[#c51f32]" />
                          <div className="text-xs font-semibold text-[#22221f]">
                            {item.title}
                          </div>
                          <div className="mt-0.5 text-[9px] leading-tight text-stone-500">
                            {item.sub}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex justify-center">
                      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-[#c51f32] bg-[#22221f] p-2 text-center text-white shadow-xl sm:h-28 sm:w-28">
                        <div className="font-mono text-xs font-bold text-[#c51f32]">
                          DESIG9
                        </div>
                        <div className="text-[9px] text-stone-300">
                          PRICE LOCK
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 text-center min-[420px]:grid-cols-3">
                      <div className="rounded-xl border border-black/5 bg-stone-100 p-3 sm:opacity-60">
                        <div className="text-xs text-stone-500">Contractor A</div>
                        <div className="mt-1 text-xs font-bold text-stone-700 sm:text-sm">
                          ₹3,32,000
                        </div>
                      </div>
                      <div className="rounded-xl border border-[#c51f32]/40 bg-[#c51f32]/10 p-3 shadow-md">
                        <div className="text-xs font-semibold text-[#c51f32]">
                          Desig9 Matched
                        </div>
                        <div className="mt-1 font-mono text-sm font-bold text-[#c51f32]">
                          ₹3,20,000
                        </div>
                      </div>
                      <div className="rounded-xl border border-black/5 bg-stone-100 p-3 sm:opacity-60">
                        <div className="text-xs text-stone-500">Contractor C</div>
                        <div className="mt-1 text-xs font-bold text-stone-700 sm:text-sm">
                          ₹3,28,000
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex justify-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#c51f32] bg-[#fbfaf7] text-center shadow-xl sm:h-28 sm:w-28">
                        <span className="font-serif text-xs font-bold text-[#22221f]">
                          AUTHENTIC
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                      {["HAVELLS", "JAQUAR", "SAMSUNG", "ASIAN PAINTS", "LG"].map(
                        (brand) => (
                          <div
                            key={brand}
                            className="rounded-xl border border-black/10 bg-[#fbfaf7] px-3 py-2 text-[10px] font-bold text-stone-700 shadow-sm sm:px-4 sm:text-xs"
                          >
                            {brand}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex justify-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#c51f32] bg-[#22221f] text-white shadow-xl sm:h-28 sm:w-28">
                        <ShieldCheck className="h-8 w-8 text-[#c51f32]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                      {[
                        "CAD Verification",
                        "Load Test",
                        "Finish Check",
                        "Final Handover",
                      ].map((check) => (
                        <div
                          key={check}
                          className="rounded-xl border border-black/10 bg-[#fbfaf7] p-3 text-center"
                        >
                          <CheckCircle2 className="mx-auto mb-1 h-4 w-4 text-[#c51f32]" />
                          <div className="text-[10px] font-semibold text-stone-800 sm:text-[11px]">
                            {check}
                          </div>
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

      {/* CLIENT REVIEWS */}
      <section className="overflow-hidden border-t border-stone-200 bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto mb-9 flex w-[calc(100%-32px)] max-w-[1320px] flex-col gap-5 sm:mb-12 sm:w-[calc(100%-48px)] md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#c51f32] sm:text-[10px] sm:tracking-[0.3em]">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="mt-2 break-words font-serif text-3xl text-[#22221f] sm:text-5xl">
              Verified Studio Reviews
            </h2>
          </div>

          <div className="flex max-w-full flex-wrap items-center gap-2 self-start rounded-full border border-stone-200 bg-stone-100 px-3 py-2 sm:px-4 md:self-auto">
            <div className="flex shrink-0 text-amber-500">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-[10px] font-bold text-[#22221f] sm:text-xs">
              4.9 / 5.0 Rating (25 Reviews)
            </span>
          </div>
        </div>

        <div className="no-scrollbar relative w-full overflow-hidden">
          <div className="animate-scroll-continuous gap-4 sm:gap-6">
            {[...reviewsList, ...reviewsList].map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="flex w-[min(84vw,320px)] shrink-0 flex-col justify-between rounded-2xl border border-stone-200 bg-[#fbfaf7] p-5 shadow-sm transition-all duration-300 hover:border-[#c51f32] hover:shadow-xl sm:w-[380px] sm:rounded-3xl sm:p-8"
              >
                <div className="space-y-4">
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c51f32] text-sm font-bold text-white shadow-md sm:h-12 sm:w-12">
                      {review.name
                        .split(" ")
                        .map((namePart) => namePart[0])
                        .join("")}
                    </div>
                    <div className="min-w-0">
                      <h3 className="break-words font-serif text-base font-semibold text-[#22221f] sm:text-lg">
                        {review.name}
                      </h3>
                      <p className="break-words text-[9px] leading-4 text-stone-500 sm:text-[10px]">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex gap-1 text-amber-500"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-xs font-light leading-relaxed text-stone-600">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-2 border-t border-stone-200 pt-4 text-[8px] text-stone-400 sm:text-[10px]">
                  <span>VERIFIED CLIENT</span>
                  <span>{review.rating.toFixed(1)} RATING</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
