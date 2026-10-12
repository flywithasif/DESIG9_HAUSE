import React from "react";
import { Link } from "react-router-dom";
import { FileText, Sparkles, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function Terms() {
  return (
    <div className="bg-[#fbfaf7] text-[#22221f] min-h-screen font-sans selection:bg-[#c51f32]/20 selection:text-[#c51f32]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-black/[0.08]">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#22221f_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c51f32]/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="mx-auto w-[min(1240px,calc(100%-38px))] relative z-10">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-[#c51f32] uppercase font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Legal & Studio Guidelines</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight text-[#22221f] leading-[1.1]">
            Terms & Conditions
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
                <FileText className="w-5 h-5" />
                <h3 className="text-sm font-semibold text-[#22221f] uppercase tracking-wider">Client Agreement</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                A plain-language agreement between you and DESIG9 HAUSE. These terms govern your use of desig9hause.com and any architectural or interior services you avail from us.
              </p>
              <div className="pt-4 border-t border-black/10 text-[11px] text-stone-500">
                By using our website or engaging our services, you agree to be bound by these terms.
              </div>
            </div>
          </div>

          {/* Right Detailed Terms Content */}
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
                <div><strong className="text-[#22221f]">Company Practice:</strong> DESIG9 HAUSE Studio</div>
                <div><strong className="text-[#22221f]">Website:</strong> desig9hause.com</div>
                <div><strong className="text-[#22221f]">Email:</strong> hello@desig9hause.com</div>
                <div><strong className="text-[#22221f]">Phone:</strong> (+91) 6386994478</div>
                <div><strong className="text-[#22221f]">Offices:</strong> NCR · Lucknow, Uttar Pradesh</div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                2. Services We Offer
              </h2>
              <p>DESIG9 HAUSE provides comprehensive design and execution services including but not limited to:</p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600 text-xs">
                <li><strong className="text-[#22221f]">Architecture & Structural Design:</strong> Luxury villas, commercial structures, and elevation development.</li>
                <li><strong className="text-[#22221f]">Interior Styling & Execution:</strong> Turnkey residential and commercial space transformations.</li>
                <li><strong className="text-[#22221f]">Landscape & Outdoor Design:</strong> Terraces, gardens, hardscapes, and resort layouts.</li>
                <li><strong className="text-[#22221f]">Visualization & Concept Planning:</strong> 3D renders, architectural layouts, and zoning studies.</li>
              </ul>
              <p className="text-xs text-stone-500 pt-1">
                All services are subject to a separate works contract or project agreement signed between you and DESIG9 HAUSE prior to execution.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                3. Enquiries & Consultations
              </h2>
              <p className="text-xs text-stone-600">
                Submitting an enquiry form or booking a site visit does not constitute a binding contract; it is an expression of interest. A binding agreement is formed only when:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600 text-xs">
                <li>A formal project quotation has been shared and approved by you</li>
                <li>A works contract or project agreement has been duly signed</li>
                <li>An initial milestone payment has been received by DESIG9 HAUSE</li>
              </ul>
              <div className="p-3 rounded-lg bg-[#c51f32]/5 border border-[#c51f32]/20 text-xs text-[#c51f32] font-medium">
                💡 Site visits and design consultations are free of charge and carry no obligation to proceed.
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                4. Quotations & Pricing
              </h2>
              <p className="text-xs text-stone-600">All quotations provided by DESIG9 HAUSE are based on the scope of work agreed at the time of site inspection, valid for 30 days from the date of issue, and subject to revision if the project scope changes.</p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600 text-xs">
                <li><strong className="text-[#22221f]">Price Lock:</strong> Once you sign the project agreement and make the initial payment, the quoted price is locked. We do not increase prices mid-project due to internal material or labor fluctuations.</li>
                <li><strong className="text-[#22221f]">Price Match:</strong> We offer price match assurance on like-for-like architectural quotations. The competing quote must be for identical scope, materials, and execution quality.</li>
                <li><strong className="text-[#22221f]">GST:</strong> All prices are subject to applicable GST as per Indian law, billed across respective payment milestones.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                5. Payment Terms
              </h2>
              <p className="text-xs text-stone-600">Payments are structured in milestones tied to project progress (e.g. stage sign-off, design approval, and final project handover). Delays in payment may result in corresponding project timeline shifts.</p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                6. Changes To Scope & Cancellation Policy
              </h2>
              <p className="text-xs text-stone-600">
                Any post-agreement changes to scope must be requested in writing, assessed separately, and approved before implementation. Cancellations before design finalisation incur a fee proportional to work completed, while cancellations after execution begins are assessed case-by-case with non-refundable material/contractor expenses.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                7. Timelines, Materials & Warranty
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-stone-600 text-xs">
                <li><strong className="text-[#22221f]">Timelines:</strong> We commit to structured timelines in our agreements, though force majeure events, client delays, or site access issues may affect schedules.</li>
                <li><strong className="text-[#22221f]">Materials:</strong> We use vetted premium materials, confirmed during quotation, with no substitutions made without client approval.</li>
                <li><strong className="text-[#22221f]">Warranty:</strong> We offer standard structural warranties (up to 10 years where applicable), manufacturer product warranties, and a 1-year workmanship warranty on execution quality.</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                8. Handover & Liability
              </h2>
              <p className="text-xs text-stone-600">
                Project handover takes place upon completion of agreed scope, joint inspection walkthrough, snag resolution, and final payment receipt. DESIG9 HAUSE manages vetted contractors but is not liable for unauthorized external arrangements made independently by clients.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                9. Intellectual Property & Governing Law
              </h2>
              <p className="text-xs text-stone-600">
                All Renders, architectural drawings, website designs, and project photographs remain the intellectual property of DESIG9 HAUSE until full payment is settled. These terms are governed by the laws of India, with legal jurisdiction exclusive to the courts of Lucknow, Uttar Pradesh.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#22221f] pb-2 border-b border-black/10">
                10. Contact Us
              </h2>
              <p className="text-xs text-stone-600">For any questions or legal inquiries regarding these terms:</p>
              
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