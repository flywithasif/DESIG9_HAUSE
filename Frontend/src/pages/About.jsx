
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Lenis from "lenis";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  ChevronRight,
  Home as HomeIcon,
} from "lucide-react";

// Scroll Reveal Component
function ScrollReveal({ children, className = "", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const element = domRef.current;
    if (!element) return;

    // Respect reduced-motion preferences.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

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

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: "2000ms",
        transitionDelay: `${delay}ms`,
      }}
      className={`min-w-0 transition-all ease-out transform motion-reduce:transition-none ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 sm:translate-y-12 scale-[0.98] pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// Animated Number Counter
function AnimatedCounter({ from = 1, to, suffix = "", duration = 2.5 }) {
  const [count, setCount] = useState(from);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      setCount(Number(to));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [to]);

  useEffect(() => {
    if (!isVisible) return;

    const end = Number.parseInt(to, 10);

    if (!Number.isFinite(end) || end <= from) {
      setCount(end || from);
      return;
    }

    const startTime = performance.now();
    let animationFrame;

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );

      // Smooth ease-out counter.
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.min(
        end,
        Math.floor(from + (end - from) * easedProgress)
      ));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, from, to, duration]);

  return (
    <span ref={counterRef} className="inline-block font-bold tabular-nums">
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function About() {
  // Smooth scrolling with proper animation-frame cleanup.
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    let animationFrame;

    function raf(time) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  const brands = [
    { name: "Asian Paints", logo: "https://logo.clearbit.com/asianpaints.com" },
    { name: "Saint-Gobain", logo: "https://logo.clearbit.com/saint-gobain.com" },
    { name: "Jaquar", logo: "https://logo.clearbit.com/jaquar.com" },
    { name: "Häfele", logo: "https://logo.clearbit.com/hafele.com" },
    { name: "TOTO", logo: "https://logo.clearbit.com/toto.com" },
    { name: "Kohler", logo: "https://logo.clearbit.com/kohler.com" },
    { name: "Greenlam", logo: "https://logo.clearbit.com/greenlam.com" },
    { name: "Grohe", logo: "https://logo.clearbit.com/grohe.com" },
    { name: "Kajaria", logo: "https://logo.clearbit.com/kajariaceramics.com" },
    { name: "CenturyPly", logo: "https://logo.clearbit.com/centuryply.com" },
    { name: "Schneider Electric", logo: "https://logo.clearbit.com/se.com" },
    { name: "Havells", logo: "https://logo.clearbit.com/havells.com" },
    { name: "D'Decor", logo: "https://logo.clearbit.com/ddecor.com" },
    { name: "Pidilite", logo: "https://logo.clearbit.com/pidilite.com" },
    { name: "Godrej Interio", logo: "https://logo.clearbit.com/godrejinterio.com" },
    { name: "Hettich", logo: "https://logo.clearbit.com/hettich.com" },
    { name: "Somany", logo: "https://logo.clearbit.com/somanyceramics.com" },
    { name: "Fenesta", logo: "https://logo.clearbit.com/fenesta.com" },
    { name: "Sleek", logo: "https://logo.clearbit.com/sleekworld.com" },
    { name: "Armstrong", logo: "https://logo.clearbit.com/armstrongceilings.com" },
  ];

  const teamMembers = [
    {
      name: "Sagar Vij",
      role: "Founder | Architect",
      experience: "14+ Years Exp.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Rohan Kapoor",
      role: "Lead Interior Designer",
      experience: "10+ Years Exp.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Navya Agarwal",
      role: "Interior Designer",
      experience: "8+ Years Exp.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Vikramaditya Mehta",
      role: "Project Execution Head",
      experience: "12+ Years Exp.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    },
  ];

  const container = "mx-auto w-[calc(100%-32px)] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] max-w-[1240px]";

  const primaryButton =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#22221f] px-5 py-3.5 text-center text-[11px] sm:text-xs font-medium uppercase tracking-[0.12em] sm:tracking-widest text-white shadow-lg transition-colors duration-300 hover:bg-[#c51f32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c51f32] focus-visible:ring-offset-2";

  const secondaryButton =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/20 bg-white/50 px-5 py-3.5 text-center text-[11px] sm:text-xs font-medium uppercase tracking-[0.12em] sm:tracking-widest text-[#22221f] transition-colors duration-300 hover:border-[#c51f32] hover:text-[#c51f32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c51f32] focus-visible:ring-offset-2";

  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#fbfaf7] font-sans text-[#22221f] selection:bg-[#c51f32]/20 selection:text-[#c51f32]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden border-b border-black/[0.08] pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pb-24 lg:pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-20 sm:opacity-30 bg-[radial-gradient(#22221f_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:24px_24px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-[#c51f32]/5 blur-[90px] sm:right-1/4 sm:h-96 sm:w-96 sm:blur-[140px]"
          aria-hidden="true"
        />

        <div className={`${container} relative z-10 grid min-w-0 items-center gap-10 md:gap-12 lg:grid-cols-12`}>
          <ScrollReveal className="min-w-0 space-y-5 sm:space-y-6 lg:col-span-7">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-[#c51f32]/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#c51f32] sm:text-xs sm:tracking-[0.25em]">
              <Sparkles className="h-4 w-4 shrink-0" />
              <span>About DESIG9 HAUSE</span>
            </div>

            <h1 className="max-w-full font-serif text-[clamp(2.15rem,7.2vw,4.5rem)] font-light leading-[1.1] tracking-tight text-[#22221f]">
              Better <span className="font-normal italic text-[#c51f32]">Spaces.</span>
              <br />
              Better Living.
              <br />
              <span className="font-normal">That's The Mission.</span>
            </h1>

            <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
              We design, construct, and transform spaces into inspiring
              environments. From conceptual architectural drafting to complete
              interior engineering, we handle every detail seamlessly.
            </p>

            <div className="flex flex-col items-stretch gap-3 pt-2 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:gap-4">
              <Link to="/free-site-visit" className={primaryButton}>
                Book a Free Visit <ArrowRight size={14} className="shrink-0" />
              </Link>

              <Link to="/projects" className={secondaryButton}>
                Explore Solutions <ChevronRight size={14} className="shrink-0" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Responsive overlapping image collage */}
          <ScrollReveal
            delay={200}
            className="relative mx-auto h-[300px] w-full max-w-[520px] min-w-0 sm:h-[410px] md:h-[450px] lg:col-span-5 lg:h-[440px]"
          >
            <div className="absolute right-[3%] top-[12%] h-[68%] w-[78%] overflow-hidden rounded-2xl border-[3px] border-white shadow-2xl transition-transform duration-700 hover:scale-[1.02] sm:rounded-3xl sm:border-4">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                alt="Modern luxury living room"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute right-0 top-0 z-20 h-[29%] w-[44%] overflow-hidden rounded-xl border-[3px] border-white shadow-2xl sm:rounded-2xl sm:border-4">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600"
                alt="Bedroom interior design"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-0 z-20 h-[39%] w-[55%] rounded-xl border-[3px] border-white bg-white p-1.5 shadow-2xl sm:rounded-2xl sm:border-4 sm:p-2">
              <div className="relative h-full w-full overflow-hidden rounded-lg sm:rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600"
                  alt="Modular kitchen design"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-1.5 left-1.5 right-1.5 rounded-md bg-black/75 px-2 py-1.5 text-[8px] font-medium leading-tight text-white backdrop-blur-md sm:bottom-2 sm:left-2 sm:right-2 sm:px-3 sm:text-[10px]">
                  Move-In Ready • Quality Guaranteed
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="border-b border-black/[0.08] bg-white py-9 sm:py-12 lg:py-14">
        <div className={`${container} grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-6 sm:gap-y-9 lg:grid-cols-4 lg:gap-0`}>
          {[
            { value: 15, suffix: "+", label: "Cities Presence", accent: true },
            { value: 1800, suffix: "+", label: "Projects Delivered" },
            { value: 150, suffix: "+", label: "Architect Partners", accent: true },
            { value: 100, suffix: "%", label: "Quality Standards" },
          ].map((stat, idx) => (
            <ScrollReveal
              key={stat.label}
              delay={idx * 100}
              className={`min-w-0 px-1 text-center lg:px-4 ${
                idx > 0 ? "lg:border-l lg:border-black/10" : ""
              }`}
            >
              <div
                className={`font-serif text-3xl sm:text-4xl md:text-5xl ${
                  stat.accent ? "text-[#c51f32]" : "text-[#22221f]"
                }`}
              >
                <AnimatedCounter
                  from={1}
                  to={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <div className="mt-2 text-[9px] font-medium uppercase leading-relaxed tracking-[0.12em] text-stone-500 sm:text-[10px] sm:tracking-widest md:text-xs">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ================= WHAT WE BELIEVE ================= */}
      <section className="border-b border-black/[0.08] bg-[#fbfaf7] py-14 sm:py-20 lg:py-24">
        <div className={container}>
          <ScrollReveal className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-14 lg:mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c51f32] sm:tracking-[0.25em]">
              Core Ethos
            </span>
            <h2 className="font-serif text-3xl leading-tight text-[#22221f] sm:text-4xl md:text-5xl">
              What We Believe
            </h2>
            <p className="text-sm leading-7 text-stone-600 sm:text-base">
              Spaces deeply influence human behavior, wellbeing, and daily
              comfort. Great architecture goes beyond aesthetics—it elevates
              living standards.
            </p>
          </ScrollReveal>

          <div className="grid min-w-0 items-center gap-9 sm:gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="min-w-0 space-y-7 sm:space-y-8 lg:col-span-6">
              {[
                {
                  title: "Purposeful Spatial Planning",
                  description:
                    "We believe every square foot should serve a deliberate purpose. Unused corners are transformed into functional micro-spaces that adapt to modern lifestyles.",
                  Icon: HomeIcon,
                },
                {
                  title: "Uncompromising Material Integrity",
                  description:
                    "Shortcuts compromise longevity. We source rigorously tested, sustainable, and premium-grade materials directly from top industry manufacturers.",
                  Icon: ShieldCheck,
                },
                {
                  title: "Transparent Project Delivery",
                  description:
                    "Clear BOQs, fixed timelines, and dedicated single-point management ensure zero hidden surprises throughout your construction journey.",
                  Icon: HeartHandshake,
                },
              ].map(({ title, description, Icon }, idx) => (
                <ScrollReveal
                  key={title}
                  delay={idx * 120}
                  className="flex min-w-0 items-start gap-4 sm:gap-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c51f32]/10 text-[#c51f32] sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon size={21} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-lg font-semibold leading-snug text-[#22221f] sm:text-xl">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      {description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={200} className="min-w-0 lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-black/10 shadow-xl sm:rounded-3xl sm:shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000"
                  alt="Architectural excellence"
                  loading="lazy"
                  className="h-[270px] w-full object-cover sm:h-[360px] md:h-[400px] lg:h-[440px]"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-5 sm:p-8">
                  <div className="space-y-2 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#f08a95] sm:text-xs">
                      Our Promise
                    </p>
                    <h4 className="max-w-md font-serif text-xl leading-snug sm:text-2xl">
                      Designing homes that stand the test of time.
                    </h4>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="border-b border-black/[0.08] bg-white py-14 sm:py-20 lg:py-24">
        <div className={container}>
          <ScrollReveal className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-14 lg:mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c51f32] sm:tracking-[0.25em]">
              The Minds Behind DESIG9 HAUSE
            </span>
            <h2 className="font-serif text-3xl leading-tight text-[#22221f] sm:text-4xl md:text-5xl">
              Meet Our Leadership Team
            </h2>
            <p className="text-sm leading-7 text-stone-600 sm:text-base">
              A passionate collective of licensed architects, creative
              designers, structural engineers, and project managers dedicated
              to design perfection.
            </p>
          </ScrollReveal>

          <div className="grid min-w-0 grid-cols-1 gap-5 min-[420px]:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5 xl:gap-7">
            {teamMembers.map((member, idx) => (
              <ScrollReveal
                key={member.name}
                delay={idx * 100}
                className="group min-w-0 overflow-hidden rounded-2xl border border-black/10 bg-[#fbfaf7] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl"
              >
                <div className="relative h-[300px] overflow-hidden min-[420px]:h-[220px] sm:h-64 lg:h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-2 top-2 max-w-[calc(100%-16px)] rounded-full bg-white/95 px-2.5 py-1.5 text-[9px] font-medium text-[#c51f32] backdrop-blur-md sm:right-3 sm:top-3 sm:px-3 sm:text-[10px]">
                    {member.experience}
                  </div>
                </div>
                <div className="space-y-1 p-4 sm:p-5 lg:p-6">
                  <h3 className="break-words font-serif text-lg font-semibold text-[#22221f] sm:text-xl">
                    {member.name}
                  </h3>
                  <p className="text-xs leading-6 text-stone-500 sm:text-sm">
                    {member.role}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BRANDS SECTION ================= */}
      <section className="border-b border-black/[0.08] bg-[#fbfaf7] py-14 sm:py-18 lg:py-20">
        <div className={container}>
          <ScrollReveal className="mx-auto mb-9 max-w-2xl space-y-3 text-center sm:mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c51f32] sm:tracking-[0.25em]">
              Trusted Ecosystem
            </span>
            <h2 className="font-serif text-2xl leading-tight text-[#22221f] sm:text-3xl md:text-4xl">
              20+ Industry Leading Material Partners
            </h2>
            <p className="text-sm leading-7 text-stone-600 sm:text-base">
              We collaborate with premier global and national brands to ensure
              high durability and fine craftsmanship for every project.
            </p>
          </ScrollReveal>

          <div className="grid min-w-0 grid-cols-2 gap-3 min-[420px]:grid-cols-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
            {brands.map((brand, idx) => (
              <ScrollReveal
                key={brand.name}
                delay={(idx % 5) * 50}
                className="group flex h-24 min-w-0 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-black/5 bg-white p-3 shadow-sm transition-all duration-300 hover:border-[#c51f32]/40 hover:shadow-md sm:h-28 sm:rounded-2xl sm:p-4"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                  className="h-8 max-w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 sm:h-9"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = "block";
                  }}
                />
                <span className="hidden break-words text-center text-[11px] font-semibold leading-snug text-stone-700 transition-colors group-hover:text-[#c51f32] sm:text-xs">
                  {brand.name}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="relative overflow-hidden bg-[#c51f32] py-14 text-white sm:py-18 lg:py-20">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10 sm:h-80 sm:w-80"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full border border-white/10 sm:h-96 sm:w-96"
          aria-hidden="true"
        />

        <ScrollReveal className={`${container} relative z-10 space-y-5 text-center sm:space-y-6`}>
          <h2 className="mx-auto max-w-3xl font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            Ready to build your dream space?
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-7 text-stone-100 opacity-90 sm:text-base sm:leading-8">
            Schedule a complimentary consultation with our principal
            architects and get 3D layout options for your upcoming project.
          </p>

          <div className="flex justify-center pt-2 sm:pt-4">
            <Link
              to="/free-site-visit"
              className="inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-[#22221f] px-6 py-4 text-center text-[11px] font-medium uppercase tracking-[0.12em] text-white shadow-xl transition-colors duration-300 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#c51f32] sm:w-auto sm:max-w-none sm:px-8 sm:text-xs sm:tracking-widest"
            >
              Book Free Site Visit <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
