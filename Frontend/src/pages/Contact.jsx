import { Mail, MapPin, Phone, Sparkles, ArrowUpRight } from "lucide-react";
import { contactInfo } from "../data/navigation";
import ContactForm from "../components/contact/ContactForm";

const emailAddress = "hello@desig9hause.com";
const fullAddress = "D / 2/187, Golf City, Bagiamau, Lucknow, Uttar Pradesh 226030";

export default function Contact() {
  return (
    <div className="bg-[#fbfaf7] text-[#22221f] min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-black/[0.08]">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#22221f_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c51f32]/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="mx-auto w-[min(1240px,calc(100%-38px))] relative z-10">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-[#c51f32] uppercase font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Architecture · Interior · Landscape</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight text-[#22221f] leading-[1.05]">
            Every project <br />
            starts with <span className="italic font-normal text-[#c51f32]">a hello.</span>
          </h1>
          
          <p className="mt-6 text-sm md:text-base text-stone-600 max-w-xl leading-relaxed">
            Tell us a little about your aspirations. Whether it is a luxury private residence or a commercial landmark, our principal architects are ready to listen.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT & FORM SECTION ================= */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid w-[min(1240px,calc(100%-38px))] items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          
          {/* Studio Contact Details Sidebar */}
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

          {/* Interactive Luxury Form Container */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-black/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c51f32]/5 rounded-bl-full pointer-events-none" />
            <ContactForm />
          </div>

        </div>
      </section>

      {/* ================= GOOGLE MAP EMBED SECTION ================= */}
      <section className="py-16 border-t border-black/[0.08] bg-white">
        <div className="mx-auto w-[min(1240px,calc(100%-38px))] grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-3">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#c51f32] uppercase">Studio Navigation</span>
            <h3 className="text-2xl font-serif text-[#22221f]">Locate Our Practice</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Visit our primary design studio in Golf City, Lucknow, for material samples, spatial mockups, and personal portfolio walkthroughs with our lead architects.
            </p>
          </div>
          <div className="md:col-span-7 h-72 rounded-2xl overflow-hidden border border-black/10 shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
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
          </div>
        </div>
      </section>

    </div>
  );
}