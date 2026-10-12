import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Sparkles, Mail, Phone, MapPin } from "lucide-react";

export default function Privacy() {
  return (
    <div className="bg-[#fbfaf7] text-[#22221f] min-h-screen font-sans selection:bg-[#c51f32]/20 selection:text-[#c51f32]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-black/[0.08]">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#22221f_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c51f32]/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="mx-auto w-[min(1240px,calc(100%-38px))] relative z-10">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-[#c51f32] uppercase font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Legal & Data Protection</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight text-[#22221f] leading-[1.1]">
            Privacy Policy
          </h1>
          
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-stone-500 font-medium">
            <span>DESIG9 HAUSE – Architecture, Interiors & Landscape</span>
            <span>•</span>
            <span>Last updated: May 2026</span>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <section className="py-20 md:py-24">
        <div className="mx-auto w-[min(1240px,calc(100%-38px))] grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Table of Contents / Sidebar Reminder */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-[#c51f32]">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-sm font-semibold text-[#22221f] uppercase tracking-wider">Our Commitment</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                We respect your privacy. This policy explains what information we collect, why we collect it, how we use it, and what rights you have over it in plain language.
              </p>
              <div className="pt-4 border-t border-black/10 text-[11px] text-stone-500">
                By using desig9hause.com or any of our studio services, you agree to this policy.
              </div>
            </div>
          </div>

          {/* Right Detailed Policy Content */}
          <div className="lg:col-span-8 space-y-12 text-stone-700 text-sm leading-relaxed">
            
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                1. Who We Are
              </h2>
              <p>
                DESIG9 HAUSE is operated as a multidisciplinary design studio offering architecture, interior, and landscape design solutions across India.
              </p>
              <div className="p-4 rounded-xl bg-white border border-black/5 space-y-1 text-xs">
                <div><strong className="text-[#22221f]">Registered Address:</strong> D / 2/187, Golf City, Bagiamau, Lucknow, Uttar Pradesh 226030</div>
                <div><strong className="text-[#22221f]">Contact Email:</strong> hello@desig9hause.com</div>
                <div><strong className="text-[#22221f]">Contact Phone:</strong> (+91) 6386994478</div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                2. What Information We Collect
              </h2>
              <p className="font-medium text-[#22221f]">Information you give us directly:</p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600 text-xs">
                <li>Name, phone number, and email address</li>
                <li>City and home/site address (for site visits and spatial analysis)</li>
                <li>Project details, architectural requirements, and preferences shared via forms or calls</li>
                <li>Payment information processed securely via third-party payment gateways (we do not store card details)</li>
              </ul>

              <p className="font-medium text-[#22221f] pt-2">Information we collect automatically:</p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600 text-xs">
                <li>Browser type, device metadata, and IP address</li>
                <li>Pages visited, duration spent, and interactions on our website</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <p className="font-medium text-[#22221f] pt-2">Information from third parties:</p>
              <p className="text-xs text-stone-600">
                If you contact us via WhatsApp, Facebook, Instagram, LinkedIn, or other social platforms, we may receive information shared through those platforms.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                3. Why We Collect It & How We Use It
              </h2>
              <p>We collect your information only for legitimate studio purposes:</p>
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-black/5 space-y-1">
                  <div className="font-semibold text-[#22221f]">To deliver our services</div>
                  <p className="text-stone-600">Processing enquiries, scheduling site visits, preparing architectural quotes, managing projects, and communicating updates.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-black/5 space-y-1">
                  <div className="font-semibold text-[#22221f]">To improve our services</div>
                  <p className="text-stone-600">Understanding website usage trends and client design preferences to serve you better.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-black/5 space-y-1">
                  <div className="font-semibold text-[#22221f]">To communicate with you</div>
                  <p className="text-stone-600">Sending project updates, responding to queries, and following up. You can opt out of marketing communications at any time.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-black/5 space-y-1">
                  <div className="font-semibold text-[#22221f]">To meet legal obligations</div>
                  <p className="text-stone-600">Maintaining records as required under applicable Indian law, including GST and tax accounting requirements.</p>
                </div>
              </div>
              <p className="text-xs font-semibold text-[#c51f32] pt-2">
                We do not sell your data. We do not share it with external advertisers.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                4. Who We Share It With
              </h2>
              <p>We share your information only when strictly necessary:</p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600 text-xs">
                <li><strong className="text-[#22221f]">Our service partners:</strong> Vetted contractors, structural engineers, execution teams, and logistics partners bound by strict confidentiality.</li>
                <li><strong className="text-[#22221f]">Technology providers:</strong> Hosting, CRM, analytics, and payment processing platforms that help run our operations under our instructions.</li>
                <li><strong className="text-[#22221f]">Legal requirements:</strong> If required by law, court order, or government authority, we may disclose your information.</li>
              </ul>
              <p className="text-xs text-stone-500">We do not share your data with any third party for their own marketing purposes.</p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                5. Cookies
              </h2>
              <p className="text-xs text-stone-600">We use cookies to keep our website functional, analyze visitor traffic, and remember your display preferences. You can disable cookies in your browser settings, though some sections may not function properly.</p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                6. How Long We Keep Your Data
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-stone-600 text-xs">
                <li>Enquiry data – up to 2 years from last contact</li>
                <li>Project data – up to 7 years for legal, structural warranty, and archival purposes</li>
                <li>Payment records – as required under Indian tax law</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                7. Your Rights
              </h2>
              <p className="text-xs text-stone-600">You have the right to access, correct, delete, or withdraw consent regarding your personal data. To exercise these rights, email us at <a href="mailto:hello@desig9hause.com" className="text-[#c51f32] underline font-medium">hello@desig9hause.com</a>. We respond within 30 days.</p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                8. Data Security
              </h2>
              <p className="text-xs text-stone-600">We implement robust technical and organizational security measures, including encrypted connections and access controls. If you suspect any breach, contact us immediately.</p>
            </div>

            {/* Section 9 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                9. Third-Party Links & Children
              </h2>
              <p className="text-xs text-stone-600">Our website may link to external brand partners or social networks; we are not responsible for their privacy practices. Additionally, our services are not directed at minors under 18.</p>
            </div>

            {/* Section 10 & 11 & 12 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                10. Policy Updates & Contact Us
              </h2>
              <p className="text-xs text-stone-600">We may update this policy periodically with date revisions. For any privacy queries or requests:</p>
              
              <div className="p-6 rounded-2xl bg-white border border-black/10 space-y-3 text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#c51f32]" />
                  <span>Email: hello@desig9hause.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#c51f32]" />
                  <span>Phone: (+91) 6386994478</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#c51f32] shrink-0 mt-0.5" />
                  <span>Address: D / 2/187, Golf City, Bagiamau, Lucknow, Uttar Pradesh 226030</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}