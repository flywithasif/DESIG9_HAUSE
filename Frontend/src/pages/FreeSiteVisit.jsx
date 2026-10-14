import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Lenis from "lenis";
import {
  Compass,
  Building2,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  Mail,
  User,
  Ruler,
  Layers,
  Award,
  HelpCircle,
  Eye,
} from "lucide-react";

// Premium 2.5 Seconds (2500ms) Scroll Reveal Component
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

  let transformHidden = "translate-y-20 scale-95";
  if (direction === "left") transformHidden = "-translate-x-16 scale-95";
  if (direction === "right") transformHidden = "translate-x-16 scale-95";

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: "2500ms", // 2.5 Seconds Smooth Timing
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

export default function FreeSiteVisit() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    propertyType: "Residential Villa / Bungalow",
    plotArea: "",
    preferredDate: "",
    preferredTime: "Morning (10 AM - 1 PM)",
    projectScope: "Full Architectural Design",
    budgetRange: "₹50L - ₹1 Cr",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${api.replace(/\/$/, "")}/site-visits`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Site visit submission failed.");
      
      setSubmitted(true);
    } catch (err) {
      alert("Error submitting request. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fbfaf7] text-[#22221f] min-h-screen font-sans selection:bg-[#c51f32]/20 selection:text-[#c51f32] overflow-x-hidden">
      
      {/* ================= HERO SECTION (ARCHITECTURAL GRAPH BLUEPRINT BG) ================= */}
      <section className="relative pt-32 pb-24 border-b border-black/[0.08] overflow-hidden">
        
        {/* --- ARCHITECTURAL GRAPH & CAD BLUEPRINT BACKGROUND --- */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.2]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#22221f_1px,transparent_1px),linear-gradient(to_bottom,#22221f_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#c51f32_1px,transparent_1px),linear-gradient(to_bottom,#c51f32_1px,transparent_1px)] bg-[size:160px_160px] opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#fbfaf7_85%)]" />
        </div>

        {/* Studio Ambient Glows */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#c51f32]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#22221f]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="mx-auto w-[min(1240px,calc(100%-38px))] relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: HERO CONTENT */}
          <ScrollReveal direction="left" delay={100} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#c51f32] uppercase font-semibold bg-[#c51f32]/5 px-3.5 py-1.5 rounded-full border border-[#c51f32]/10">
              <Sparkles className="w-4 h-4" />
              <span>Architecture · Interior · On-Site Inspection</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-[#22221f] leading-[1.08]">
              Book a Complimentary <br />
              <span className="italic font-normal text-[#c51f32]">On-Site Architectural Consultation</span>
            </h1>

            <p className="text-sm md:text-base text-stone-600 max-w-xl leading-relaxed">
              Transforming your raw plot into a bespoke architectural masterpiece begins on the ground. Invite our principal architects to inspect, analyze, and craft a tailored vision for your luxury residence or commercial space.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-wider text-stone-600">
              <span className="flex items-center gap-2"><Compass className="w-4 h-4 text-[#c51f32]" /> 360° Plot Orientation</span>
              <span className="flex items-center gap-2"><Ruler className="w-4 h-4 text-[#c51f32]" /> Contour & Soil Study</span>
            </div>

            {/* Price Valuation Card Inline */}
            <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-xl shadow-black/[0.03] backdrop-blur-md max-w-md mt-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-serif text-[#c51f32] font-light">₹0 <span className="text-xs text-stone-400 font-sans line-through ml-2">₹25,000</span></div>
                  <div className="text-[10px] tracking-wider text-stone-500 uppercase mt-0.5">Complimentary On-Site Inspection</div>
                </div>
                <span className="px-3 py-1 bg-[#c51f32]/10 text-[#c51f32] text-[10px] font-mono font-bold rounded-full">100% WAIVED</span>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE: GALLERY */}
          <ScrollReveal direction="right" delay={300} className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[480px] w-full">
              
              <div className="absolute top-8 right-0 w-[85%] h-[320px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                  alt="Architectural Site Inspection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#c51f32] bg-white px-2 py-0.5 rounded">Site Analysis</span>
                    <p className="text-xs font-serif">On-Site Structural & Spatial Surveying</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-[58%] h-[150px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 group bg-white">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600"
                  alt="Architectural Blueprint Layout"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] text-white font-mono">
                  CAD 1:100
                </div>
              </div>

              <div className="absolute bottom-2 left-4 z-30 bg-white border border-black/10 p-4 rounded-2xl shadow-xl max-w-[240px] flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#c51f32]/10 text-[#c51f32] shrink-0">
                  <Building2 size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#22221f]">DESIG9 HAUSE Practice</h4>
                  <p className="text-[10px] text-stone-500">Senior Principals On Ground</p>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= VALUE HIGHLIGHT STATS ================= */}
      <section className="py-12 border-b border-black/[0.08] bg-white/50">
        <div className="mx-auto w-[min(1240px,calc(100%-38px))] grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Site Inspection", value: "360° Assessment", icon: Compass },
            { label: "Bespoke Design", value: "Tailored Concept", icon: Building2 },
            { label: "Architectural Experts", value: "Senior Principals", icon: Award },
            { label: "Zero Obligation", value: "100% Free Consultation", icon: ShieldCheck },
          ].map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#c51f32]/10 text-[#c51f32] border border-[#c51f32]/20 shrink-0">
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs tracking-widest text-stone-500 uppercase">{stat.label}</div>
                <div className="text-sm font-medium text-[#22221f] mt-1">{stat.value}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ================= MAIN FORM & DETAILS SECTION ================= */}
      <section className="py-20">
        <div className="mx-auto w-[min(1240px,calc(100%-38px))] grid lg:grid-cols-12 gap-12">
          
          {/* LEFT SIDE: PROCESS */}
          <ScrollReveal direction="left" delay={200} className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#c51f32] font-semibold">Why Request a Visit?</span>
              <h2 className="text-2xl md:text-3xl font-serif text-[#22221f] mt-2">
                What Happens During Your Free Site Inspection?
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-3 leading-relaxed">
                Our multidisciplinary studio team conducts a multi-point spatial and environmental study right at your project location.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "1. Solar & Orientation Analysis", desc: "Evaluating natural light, wind direction, and microclimate to optimize passive cooling and daylighting.", icon: Compass },
                { title: "2. Zoning & Bye-Law Verification", desc: "Reviewing setbacks, FAR (Floor Area Ratio), height limits, and local municipal regulations.", icon: Layers },
                { title: "3. Topography & Soil Contour Study", desc: "Analyzing land slope, levels, and soil stability for structural integrity and foundation planning.", icon: Ruler },
                { title: "4. Concept & Spatial Layout Blueprint", desc: "Discussing client lifestyle needs, room adjacencies, Vastu/architectural flow, and luxury aesthetics.", icon: Building2 }
              ].map((step, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white border border-black/10 shadow-sm hover:border-[#c51f32]/40 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <step.icon className="w-4 h-4 text-[#c51f32] shrink-0" />
                    <h3 className="text-sm font-medium text-[#22221f]">{step.title}</h3>
                  </div>
                  <p className="text-xs text-stone-600 mt-2 pl-7 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#c51f32]/10 via-white to-transparent border border-[#c51f32]/20 shadow-md">
              <h4 className="text-sm font-semibold text-[#22221f]">Prefer a direct conversation?</h4>
              <p className="text-xs text-stone-600 mt-1">Speak directly with our chief architectural coordinators.</p>
              <div className="mt-4 space-y-2">
                <a href="mailto:hello@desig9hause.com" className="flex items-center gap-2 text-xs text-[#c51f32] hover:underline font-medium">
                  <Mail className="w-4 h-4" /> hello@desig9hause.com
                </a>
                <a href="tel:+916386994478" className="flex items-center gap-2 text-xs text-[#c51f32] hover:underline font-medium">
                  <PhoneCall className="w-4 h-4" /> +91 6386994478
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE: FORM */}
          <ScrollReveal direction="right" delay={400} className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-black/10 shadow-2xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-1.5 rounded-full bg-[#c51f32] text-white font-medium text-[11px] tracking-wider uppercase shadow-lg">
                Limited Appointments Available
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#c51f32]/10 text-[#c51f32] rounded-full flex items-center justify-center mx-auto border border-[#c51f32]/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#22221f]">Site Visit Request Received</h3>
                  <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#c51f32] font-semibold">{formData.fullName}</span>. Our senior architect will review your site details and contact you shortly to confirm your schedule.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full border border-black/20 text-xs text-[#22221f] hover:bg-black hover:text-white transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-black/10 pb-4">
                    <h3 className="text-xl font-serif text-[#22221f]">Schedule Your Site Visit</h3>
                    <p className="text-xs text-stone-500 mt-1">Fill in the site particulars for an accurate architectural prep.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-medium text-stone-700 uppercase tracking-wider mb-2">Full Name *</label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Ar. Rahul Verma"
                          className="w-full bg-[#fbfaf7] border border-black/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#22221f] placeholder:text-stone-400 focus:outline-none focus:border-[#c51f32] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-stone-700 uppercase tracking-wider mb-2">Phone Number *</label>
                      <div className="relative">
                        <PhoneCall className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 63869 94478"
                          className="w-full bg-[#fbfaf7] border border-black/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#22221f] placeholder:text-stone-400 focus:outline-none focus:border-[#c51f32] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-medium text-stone-700 uppercase tracking-wider mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="hello@desig9hause.com"
                          className="w-full bg-[#fbfaf7] border border-black/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#22221f] placeholder:text-stone-400 focus:outline-none focus:border-[#c51f32] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-stone-700 uppercase tracking-wider mb-2">Site Location / Address *</label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
                        <input
                          type="text"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Golf City, Lucknow"
                          className="w-full bg-[#fbfaf7] border border-black/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#22221f] placeholder:text-stone-400 focus:outline-none focus:border-[#c51f32] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-medium text-stone-700 uppercase tracking-wider mb-2">Property Type</label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full bg-[#fbfaf7] border border-black/15 rounded-xl px-4 py-2.5 text-xs text-[#22221f] focus:outline-none focus:border-[#c51f32]"
                      >
                        <option>Luxury Villa / Bungalow</option>
                        <option>Penthouse / Apartment</option>
                        <option>Commercial / Corporate Office</option>
                        <option>Hospitality / Resort</option>
                        <option>Farmhouse / Estate</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-stone-700 uppercase tracking-wider mb-2">Plot Size / Built-up Area</label>
                      <input
                        type="text"
                        name="plotArea"
                        value={formData.plotArea}
                        onChange={handleChange}
                        placeholder="e.g. 4,000 sq ft"
                        className="w-full bg-[#fbfaf7] border border-black/15 rounded-xl px-4 py-2.5 text-xs text-[#22221f] placeholder:text-stone-400 focus:outline-none focus:border-[#c51f32] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-medium text-stone-700 uppercase tracking-wider mb-2">Preferred Date *</label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
                        <input
                          type="date"
                          name="preferredDate"
                          required
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full bg-[#fbfaf7] border border-black/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#22221f] focus:outline-none focus:border-[#c51f32] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-stone-700 uppercase tracking-wider mb-2">Preferred Time Slot</label>
                      <div className="relative">
                        <Clock className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full bg-[#fbfaf7] border border-black/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#22221f] focus:outline-none focus:border-[#c51f32]"
                        >
                          <option>Morning (10 AM - 1 PM)</option>
                          <option>Afternoon (1 PM - 4 PM)</option>
                          <option>Evening (4 PM - 7 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-stone-700 uppercase tracking-wider mb-2">Specific Architectural Requirements or Notes</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention any specific preferences (e.g. Double height living room, Vastu orientation, Sustainable materials...)"
                      className="w-full bg-[#fbfaf7] border border-black/15 rounded-xl px-4 py-2.5 text-xs text-[#22221f] placeholder:text-stone-400 focus:outline-none focus:border-[#c51f32] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#c51f32] hover:bg-[#a71929] text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-[#c51f32]/30 flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Confirm Free Site Visit Request"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[10px] text-stone-500 text-center">
                    🔒 Privacy Assured. Your contact & property information remains strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= STUDIO OFFICE & MAP SECTION ================= */}
      <section className="py-16 border-t border-black/[0.08] bg-white">
        <div className="mx-auto w-[min(1240px,calc(100%-38px))] grid md:grid-cols-2 gap-10 items-center">
          <ScrollReveal direction="left" delay={150}>
            <span className="text-xs uppercase tracking-[0.2em] text-[#c51f32] font-semibold">Headquarters</span>
            <h2 className="text-2xl font-serif text-[#22221f] mt-1">Visit DESIG9 HAUSE Studio</h2>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              If you prefer to meet at our design lab prior to the site visit, you are warmly invited for coffee and a preliminary studio presentation.
            </p>

            <div className="mt-6 space-y-3 text-xs text-stone-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c51f32] shrink-0 mt-0.5" />
                <span>D / 2/187, Golf City, Bagiamau, Lucknow, Uttar Pradesh 226030</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c51f32] shrink-0" />
                <span>hello@desig9hause.com</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={300} className="h-64 rounded-2xl overflow-hidden border border-black/10 grayscale hover:grayscale-0 transition-all duration-500">
            <iframe
              title="Desig9 Hause Studio Location"
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

      {/* ================= FAQ SECTION ================= */}
      <section className="py-16 border-t border-black/[0.08]">
        <div className="mx-auto w-[min(1240px,calc(100%-38px))]">
          <ScrollReveal delay={100} className="text-center max-w-xl mx-auto mb-12">
            <HelpCircle className="w-6 h-6 text-[#c51f32] mx-auto mb-2" />
            <h2 className="text-2xl font-serif text-[#22221f]">Frequently Asked Questions</h2>
            <p className="text-xs text-stone-500 mt-1">Everything you need to know about our site visit service.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-xs">
            {[
              { q: "Is the site visit truly free of cost?", a: "Yes. For serious residential villas and commercial projects within our service zones, the initial architectural visit and spatial consultation are 100% complimentary." },
              { q: "Who from DESIG9 HAUSE will visit the site?", a: "A Senior Principal Architect or lead design consultant accompanied by a structural strategist will conduct the visit." },
              { q: "What should I keep ready during the visit?", a: "Having plot dimensions, key layout maps, municipal papers, and any reference inspiration images helps us maximize the visit's efficiency." },
              { q: "How soon can we schedule after booking?", a: "We usually schedule visits within 24 to 48 hours of your submission based on architect availability." }
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 150} className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm space-y-2">
                <h3 className="font-semibold text-[#22221f]">{faq.q}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}