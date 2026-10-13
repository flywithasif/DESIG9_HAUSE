import React, { useState, useEffect, useRef } from "react";
import { Mail, MapPin, Phone, Sparkles, Compass, Layers, Ruler } from "lucide-react";
import Lenis from "lenis";
import { contactInfo } from "../data/navigation";
import ContactForm from "../components/contact/ContactForm";

const emailAddress = "hello@desig9hause.com";
const fullAddress = "D / 2/187, Golf City, Bagiamau, Lucknow, Uttar Pradesh 226030";

// Custom Scroll Reveal Wrapper with 2.5 Seconds (2500ms) Transition
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

  // Directional Slide Logic
  let transformHidden = "translate-y-20 scale-95";
  if (direction === "left") transformHidden = "-translate-x-16 scale-95";
  if (direction === "right") transformHidden = "translate-x-16 scale-95";

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: "2500ms", // 2.5 Seconds
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

export default function Contact() {
  // Initialize Lenis Smooth Scroll
  useEffect(() => {
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

  return (
    <div className="bg-[#fbfaf7] text-[#22221f] min-h-screen overflow-x-hidden">
      
      {/* ================= HERO SECTION (ARCHITECTURAL GRAPH BG) ================= */}
      <section className="relative pt-32 pb-24 border-b border-black/[0.08] overflow-hidden">
        
        {/* --- ARCHITECTURAL BLUEPRINT GRAPH VECTOR BACKGROUND --- */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.18]">
          {/* Main Architectural Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#22221f_1px,transparent_1px),linear-gradient(to_bottom,#22221f_1px,transparent_1px)] bg-[size:40px_40px]" />
          {/* Sub-division Drafting Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#c51f32_1px,transparent_1px),linear-gradient(to_bottom,#c51f32_1px,transparent_1px)] bg-[size:160px_160px] opacity-40" />
          {/* Diagonal Architectural Perspective Lines */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#fbfaf7_80%)]" />
        </div>

        {/* Studio Ambient Glows */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#c51f32]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#22221f]/5 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="mx-auto w-[min(1240px,calc(100%-38px))] relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: HERO TEXT (SLIDES FROM LEFT TO RIGHT - 2.5s) */}
          <ScrollReveal direction="left" delay={100} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#c51f32] uppercase font-semibold bg-[#c51f32]/5 px-3.5 py-1.5 rounded-full border border-[#c51f32]/10">
              <Sparkles className="w-4 h-4" />
              <span>Architecture · Interior · Structural Scoping</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light tracking-tight text-[#22221f] leading-[1.04]">
              Every project <br />
              starts with <span className="italic font-normal text-[#c51f32]">a hello.</span>
            </h1>
            
            <p className="text-sm md:text-base text-stone-600 max-w-xl leading-relaxed">
              Tell us a little about your aspirations. Whether it is a luxury private residence or a commercial landmark, our principal architects are ready to listen and draft your blueprint.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-wider text-stone-500">
              <span className="flex items-center gap-2"><Compass className="w-4 h-4 text-[#c51f32]" /> Precision CAD Scoping</span>
              <span className="flex items-center gap-2"><Ruler className="w-4 h-4 text-[#c51f32]" /> Site Analysis</span>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE: ARCHITECTURAL WIREFRAME GRAPH CARD (SLIDES FROM RIGHT TO LEFT - 2.5s) */}
          <ScrollReveal direction="right" delay={300} className="lg:col-span-5 relative">
            <div className="relative w-full h-[380px] sm:h-[420px] rounded-3xl bg-white border border-black/10 shadow-2xl overflow-hidden p-8 flex flex-col justify-between group">
              
              {/* Inner Graph Blueprint Watermark */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#22221f_1px,transparent_1px),linear-gradient(to_bottom,#22221f_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.07]" />
              
              {/* Drafting Compass Blueprint Header */}
              <div className="relative z-10 flex justify-between items-center border-b border-black/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#c51f32]/10 text-[#c51f32]">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#22221f]">DESIG9 HAUSE Studio</h4>
                    <p className="text-[10px] text-stone-400 font-mono">CAD: 26.7901° N, 81.0080° E</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 bg-[#22221f] text-white rounded-full">SCALE 1:100</span>
              </div>

              {/* Graphic Structural Floorplan Vector Overlay */}
              <div className="relative z-10 my-auto py-6 border-y border-dashed border-black/10 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-20 h-20 rounded-2xl border-2 border-dashed border-[#c51f32]/40 flex items-center justify-center relative bg-[#c51f32]/5">
                  <Compass className="w-10 h-10 text-[#c51f32] animate-spin-slow" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#c51f32] rounded-full" />
                </div>
                <p className="text-xs font-serif font-medium text-[#22221f] max-w-xs">
                  "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
                </p>
              </div>

              {/* Technical Studio Location Footer */}
              <div className="relative z-10 flex items-center justify-between text-[11px] text-stone-500 pt-2 font-mono">
                <span>LUCKNOW HQ</span>
                <span className="text-[#c51f32] font-semibold">GOLF CITY PRACTICE</span>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= MAIN CONTENT & FORM SECTION ================= */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid w-[min(1240px,calc(100%-38px))] items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          
          {/* Studio Contact Details Sidebar */}
          <ScrollReveal direction="left" delay={200}>
            <aside className="space-y-8 bg-white p-8 md:p-10 rounded-3xl border border-black/10 shadow-xl shadow-black/[0.02]">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#c51f32] uppercase">Direct Channel</span>
                <h2 className="my-3 text-3xl font-serif text-[#22221f] leading-tight">
                  Let's talk about <br />
                  <span className="italic text-[#c51f32]">your vision.</span>
                </h2>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Share your goals, timeline, or early concepts. You don't need to have every detail figured out yet—we will help structure the blueprint.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-black/10">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#c51f32]/10 text-[#c51f32] shrink-0 mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <small className="block text-[9px] tracking-widest text-stone-400 font-semibold uppercase">Email Us</small>
                    <a className="text-xs font-medium text-[#22221f] hover:text-[#c51f32] transition-colors break-all" href={`mailto:${emailAddress}`}>
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#c51f32]/10 text-[#c51f32] shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <small className="block text-[9px] tracking-widest text-stone-400 font-semibold uppercase">Call Studio</small>
                    <a className="text-xs font-medium text-[#22221f] hover:text-[#c51f32] transition-colors" href={`tel:${contactInfo?.phone ? contactInfo.phone.replace(/[^\d+]/g, "") : "6386994478"}`}>
                      {contactInfo?.phone || "+91 6386994478"}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#c51f32]/10 text-[#c51f32] shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <small className="block text-[9px] tracking-widest text-stone-400 font-semibold uppercase">Headquarters</small>
                    <span className="text-xs font-medium text-[#22221f] leading-relaxed block mt-0.5">
                      {fullAddress}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#fbfaf7] border border-black/5 text-[11px] text-stone-500 leading-relaxed">
                💡 <strong className="text-[#22221f]">Client Note:</strong> All initial studio consultations and project estimates include a dedicated structural scoping report.
              </div>
            </aside>
          </ScrollReveal>

          {/* Interactive Form Container with Contextual Architectural Image Banner */}
          <ScrollReveal direction="right" delay={400}>
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-black/10 shadow-2xl relative overflow-hidden space-y-8">
              
              {/* ARCHITECTURAL CONSULTATION BANNER IMAGE */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-black/10 shadow-sm group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                  alt="Architectural Consultation Practice"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-6">
                  <div className="text-white space-y-1">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#c51f32] bg-white/90 px-2.5 py-1 rounded-md">Studio Scoping</span>
                    <h3 className="text-lg font-serif">Consult with Lead Architects</h3>
                    <p className="text-[11px] text-stone-200 opacity-90">Personalized layout reviews & material sample selection.</p>
                  </div>
                </div>
              </div>

              {/* CONTACT FORM COMPONENT */}
              <ContactForm />
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= GOOGLE MAP EMBED SECTION ================= */}
      <section className="py-16 border-t border-black/[0.08] bg-white">
        <div className="mx-auto w-[min(1240px,calc(100%-38px))] grid md:grid-cols-12 gap-8 items-center">
          
          <ScrollReveal delay={150} className="md:col-span-5 space-y-3">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#c51f32] uppercase">Studio Navigation</span>
            <h3 className="text-2xl font-serif text-[#22221f]">Locate Our Practice</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Visit our primary design studio in Golf City, Lucknow, for material samples, spatial mockups, and personal portfolio walkthroughs with our lead architects.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300} className="md:col-span-7 h-72 rounded-2xl overflow-hidden border border-black/10 shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
            <iframe
              title="Desig9 Hause Studio Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.5639854942638!2d81.0080837!3d26.790165099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be557bede3173%3A0xfd32ddb56e54dc32!2sDesig9%20Hause!5e0!3m2!1sen!2sin!4v1791815759671!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}