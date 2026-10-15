
import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Compass,
  Layers,
  Ruler,
} from "lucide-react";
import Lenis from "lenis";
import { contactInfo } from "../data/navigation";
import ContactForm from "../components/contact/ContactForm";

// Contact information
const emailAddress = "hello@desig9hause.com";
const fullAddress =
  "D / 2/187, Golf City, Bagiamau, Lucknow, Uttar Pradesh 226030";

// Scroll Reveal Wrapper
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

    // Respect reduced-motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
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

  const hiddenTransform = {
    up: "translate-y-8 sm:translate-y-12 scale-[0.98]",
    down: "-translate-y-8 sm:-translate-y-12 scale-[0.98]",
    left: "-translate-x-6 sm:-translate-x-12 scale-[0.98]",
    right: "translate-x-6 sm:translate-x-12 scale-[0.98]",
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: "2500ms",
        transitionDelay: `${delay}ms`,
      }}
      className={`min-w-0 max-w-full transform-gpu transition-[opacity,transform] ease-out ${
        isVisible
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : `opacity-0 ${
              hiddenTransform[direction] || hiddenTransform.up
            }`
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const phoneNumber = contactInfo?.phone || "+91 6386994478";
  const phoneHref = phoneNumber.replace(/[^\d+]/g, "");

  return (
    <main className="min-h-screen overflow-x-clip bg-[#fbfaf7] text-[#22221f]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate overflow-hidden border-b border-black/[0.08] pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        {/* Architectural Blueprint Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#22221f_1px,transparent_1px),linear-gradient(to_bottom,#22221f_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:32px_32px] lg:bg-[size:40px_40px]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#c51f32_1px,transparent_1px),linear-gradient(to_bottom,#c51f32_1px,transparent_1px)] bg-[size:96px_96px] opacity-40 sm:bg-[size:128px_128px] lg:bg-[size:160px_160px]" />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#fbfaf7_80%)]" />
        </div>

        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-10 -left-20 h-48 w-48 rounded-full bg-[#c51f32]/10 blur-[90px] sm:top-10 sm:left-10 sm:h-80 sm:w-80 sm:blur-[140px]" />

        <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#22221f]/5 blur-[100px] sm:right-1/4 sm:h-96 sm:w-96 sm:blur-[160px]" />

        <div className="relative z-10 mx-auto grid w-[calc(100%-32px)] max-w-[1240px] grid-cols-1 items-center gap-9 sm:w-[calc(100%-48px)] sm:gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Hero Content */}
          <ScrollReveal
            direction="left"
            delay={100}
            className="min-w-0 space-y-5 sm:space-y-6 lg:col-span-7"
          >
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-[#c51f32]/10 bg-[#c51f32]/5 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#c51f32] sm:px-3.5 sm:text-xs sm:tracking-[0.2em]">
              <Sparkles className="h-4 w-4 shrink-0" />
              <span>Architecture · Interior · Structural Scoping</span>
            </div>

            <h1 className="max-w-full font-serif text-[clamp(2.5rem,8vw,5.25rem)] font-light leading-[1.08] tracking-tight text-[#22221f] lg:text-[clamp(4rem,6.2vw,5.5rem)] xl:text-8xl">
              Every project
              <br />
              starts with{" "}
              <span className="font-normal italic text-[#c51f32]">
                a hello.
              </span>
            </h1>

            <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-relaxed">
              Tell us a little about your aspirations. Whether it is a luxury
              private residence or a commercial landmark, our principal
              architects are ready to listen and draft your blueprint.
            </p>

            <div className="flex flex-wrap items-start gap-x-5 gap-y-3 pt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-stone-500 sm:gap-x-6 sm:text-xs sm:tracking-wider">
              <span className="flex items-center gap-2">
                <Compass className="h-4 w-4 shrink-0 text-[#c51f32]" />
                <span>Precision CAD Scoping</span>
              </span>

              <span className="flex items-center gap-2">
                <Ruler className="h-4 w-4 shrink-0 text-[#c51f32]" />
                <span>Site Analysis</span>
              </span>
            </div>
          </ScrollReveal>

          {/* Architectural Blueprint Card */}
          <ScrollReveal
            direction="right"
            delay={300}
            className="relative min-w-0 lg:col-span-5"
          >
            <div className="group relative flex min-h-[340px] w-full flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-xl sm:min-h-[400px] sm:rounded-3xl sm:p-7 lg:min-h-[420px] lg:p-8">
              {/* Inner Blueprint Grid */}
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#22221f_1px,transparent_1px),linear-gradient(to_bottom,#22221f_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.07] sm:bg-[size:24px_24px]"
                aria-hidden="true"
              />

              {/* Card Header */}
              <div className="relative z-10 flex min-w-0 items-center justify-between gap-3 border-b border-black/10 pb-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="shrink-0 rounded-xl bg-[#c51f32]/10 p-2 text-[#c51f32] sm:p-2.5">
                    <Layers size={20} />
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#22221f] sm:text-xs sm:tracking-widest">
                      DESIG9 HAUSE Studio
                    </h2>

                    <p className="mt-1 break-words font-mono text-[9px] text-stone-400 sm:text-[10px]">
                      CAD: 26.7901° N, 81.0080° E
                    </p>
                  </div>
                </div>

                <span className="shrink-0 rounded-full bg-[#22221f] px-2 py-1 font-mono text-[9px] text-white sm:px-2.5 sm:text-[10px]">
                  SCALE 1:100
                </span>
              </div>

              {/* Blueprint Graphic */}
              <div className="relative z-10 my-5 flex flex-1 flex-col items-center justify-center space-y-4 border-y border-dashed border-black/10 py-6 text-center sm:my-6 sm:py-7">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-dashed border-[#c51f32]/40 bg-[#c51f32]/5 sm:h-20 sm:w-20">
                  <Compass className="h-8 w-8 text-[#c51f32] sm:h-10 sm:w-10 animate-spin-slow" />

                  <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#c51f32]" />
                </div>

                <p className="max-w-xs font-serif text-xs font-medium leading-relaxed text-[#22221f] sm:text-sm">
                  "Architecture is the learned game, correct and magnificent,
                  of forms assembled in the light."
                </p>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-1 font-mono text-[9px] text-stone-500 sm:text-[11px]">
                <span>LUCKNOW HQ</span>

                <span className="text-right font-semibold text-[#c51f32]">
                  GOLF CITY PRACTICE
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= CONTACT DETAILS & FORM ================= */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1240px] grid-cols-1 items-start gap-8 sm:w-[calc(100%-48px)] sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 xl:gap-16">
          {/* Contact Details */}
          <ScrollReveal direction="left" delay={200} className="min-w-0">
            <aside className="space-y-7 rounded-2xl border border-black/10 bg-white p-5 shadow-xl shadow-black/[0.02] sm:space-y-8 sm:rounded-3xl sm:p-8 md:p-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c51f32] sm:tracking-[0.25em]">
                  Direct Channel
                </span>

                <h2 className="my-3 font-serif text-2xl leading-tight text-[#22221f] sm:text-3xl">
                  Let's talk about
                  <br />
                  <span className="italic text-[#c51f32]">your vision.</span>
                </h2>

                <p className="text-xs leading-6 text-stone-600 sm:text-sm">
                  Share your goals, timeline, or early concepts. You don't need
                  to have every detail figured out yet—we will help structure
                  the blueprint.
                </p>
              </div>

              <div className="space-y-5 border-t border-black/10 pt-5 sm:space-y-6 sm:pt-6">
                {/* Email */}
                <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                  <div className="mt-0.5 shrink-0 rounded-xl bg-[#c51f32]/10 p-2.5 text-[#c51f32]">
                    <Mail size={18} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <small className="mb-1 block text-[9px] font-semibold uppercase tracking-widest text-stone-400">
                      Email Us
                    </small>

                    <a
                      className="break-all text-xs font-medium text-[#22221f] transition-colors hover:text-[#c51f32] sm:text-sm"
                      href={`mailto:${emailAddress}`}
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                  <div className="mt-0.5 shrink-0 rounded-xl bg-[#c51f32]/10 p-2.5 text-[#c51f32]">
                    <Phone size={18} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <small className="mb-1 block text-[9px] font-semibold uppercase tracking-widest text-stone-400">
                      Call Studio
                    </small>

                    <a
                      className="break-words text-xs font-medium text-[#22221f] transition-colors hover:text-[#c51f32] sm:text-sm"
                      href={`tel:${phoneHref}`}
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                  <div className="mt-0.5 shrink-0 rounded-xl bg-[#c51f32]/10 p-2.5 text-[#c51f32]">
                    <MapPin size={18} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <small className="mb-1 block text-[9px] font-semibold uppercase tracking-widest text-stone-400">
                      Headquarters
                    </small>

                    <span className="block break-words text-xs font-medium leading-6 text-[#22221f] sm:text-sm">
                      {fullAddress}
                    </span>
                  </div>
                </div>
              </div>

              {/* Client Note */}
              <div className="rounded-xl border border-black/5 bg-[#fbfaf7] p-4 text-[11px] leading-relaxed text-stone-500 sm:rounded-2xl sm:p-5 sm:text-xs">
                💡{" "}
                <strong className="text-[#22221f]">Client Note:</strong> All
                initial studio consultations and project estimates include a
                dedicated structural scoping report.
              </div>
            </aside>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={400} className="min-w-0">
            <div className="relative min-w-0 space-y-6 overflow-hidden rounded-2xl border border-black/10 bg-white p-4 shadow-xl sm:space-y-8 sm:rounded-3xl sm:p-7 md:p-10 lg:p-8 xl:p-12">
              {/* Architectural Banner */}
              <div className="group relative h-44 min-w-0 overflow-hidden rounded-xl border border-black/10 shadow-sm sm:h-52 sm:rounded-2xl md:h-56">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                  alt="Architectural consultation and luxury residential design"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/80 via-black/40 to-transparent p-4 sm:p-6">
                  <div className="max-w-full space-y-2 text-white">
                    <span className="inline-block rounded-md bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[#c51f32] sm:text-[10px]">
                      Studio Scoping
                    </span>

                    <h3 className="font-serif text-base leading-snug sm:text-xl">
                      Consult with Lead Architects
                    </h3>

                    <p className="max-w-sm text-[10px] leading-relaxed text-stone-200 sm:text-xs">
                      Personalized layout reviews & material sample selection.
                    </p>
                  </div>
                </div>
              </div>

              {/* Existing Form Functionality Preserved */}
              <div className="min-w-0 w-full">
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= GOOGLE MAP SECTION ================= */}
      <section className="border-t border-black/[0.08] bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1240px] grid-cols-1 items-center gap-7 sm:w-[calc(100%-48px)] sm:gap-8 md:grid-cols-12 md:gap-8">
          {/* Map Description */}
          <ScrollReveal
            delay={150}
            className="min-w-0 space-y-3 md:col-span-5"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#c51f32] sm:tracking-[0.2em]">
              Studio Navigation
            </span>

            <h2 className="font-serif text-2xl text-[#22221f] sm:text-3xl">
              Locate Our Practice
            </h2>

            <p className="max-w-lg text-xs leading-6 text-stone-600 sm:text-sm sm:leading-relaxed">
              Visit our primary design studio in Golf City, Lucknow, for
              material samples, spatial mockups, and personal portfolio
              walkthroughs with our lead architects.
            </p>
          </ScrollReveal>

          {/* Responsive Map */}
          <ScrollReveal
            delay={300}
            className="h-[260px] min-w-0 overflow-hidden rounded-xl border border-black/10 shadow-lg transition-all duration-500 sm:h-[320px] sm:rounded-2xl md:col-span-7 md:h-[360px] lg:h-[400px]"
          >
            <iframe
              title="Desig9 Hause Studio Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.5639854942638!2d81.0080837!3d26.790165099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be557bede3173%3A0xfd32ddb56e54dc32!2sDesig9%20Hause!5e0!3m2!1sen!2sin!4v1791815759671!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
