import React from "react";
import {
  FileText,
  Sparkles,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Terms() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#fbfaf7] font-sans text-[#22221f] selection:bg-[#c51f32]/20 selection:text-[#c51f32]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden border-b border-black/[0.08] pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(#22221f_1px,transparent_1px)] opacity-30 [background-size:24px_24px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#c51f32]/5 blur-[100px] sm:right-1/4 sm:top-0 sm:h-96 sm:w-96 sm:blur-[140px]"
        />

        <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-[1240px] sm:w-[calc(100%-40px)] lg:w-[calc(100%-64px)]">

          <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c51f32] sm:text-xs sm:tracking-[0.25em]">
            <Sparkles className="h-4 w-4 shrink-0" />
            <span>Legal &amp; Studio Guidelines</span>
          </div>

          <h1 className="max-w-full break-words font-serif text-4xl font-light leading-[1.12] tracking-tight text-[#22221f] sm:text-5xl md:text-6xl lg:text-7xl">
            Terms &amp; Conditions
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-medium text-stone-500 sm:text-xs">
            <span>
              DESIG9 HAUSE – Architecture, Interiors &amp; Landscape
            </span>
            <span className="hidden sm:inline" aria-hidden="true">
              •
            </span>
            <span>Last updated: May 2026</span>
          </div>

        </div>
      </section>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24">

        <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1240px] grid-cols-1 items-start gap-8 sm:w-[calc(100%-40px)] sm:gap-10 md:gap-12 lg:w-[calc(100%-64px)] lg:grid-cols-12 lg:gap-10 xl:gap-12">

          {/* ================= SIDEBAR ================= */}
          <aside className="min-w-0 space-y-6 lg:sticky lg:top-32 lg:col-span-4">

            <div className="space-y-4 rounded-2xl border border-black/10 bg-white p-4 shadow-sm sm:p-6">

              <div className="flex items-center gap-3 text-[#c51f32]">
                <FileText className="h-5 w-5 shrink-0" />

                <h2 className="text-xs font-semibold uppercase tracking-wider text-[#22221f] sm:text-sm">
                  Client Agreement
                </h2>
              </div>

              <p className="text-xs leading-relaxed text-stone-600 sm:text-sm">
                A plain-language agreement between you and DESIG9 HAUSE.
                These terms govern your use of desig9hause.com and any
                architectural or interior services you avail from us.
              </p>

              <div className="border-t border-black/10 pt-4 text-[11px] leading-relaxed text-stone-500 sm:text-xs">
                By using our website or engaging our services, you agree
                to be bound by these terms.
              </div>

            </div>

          </aside>

          {/* ================= TERMS CONTENT ================= */}
          <div className="min-w-0 space-y-9 text-sm leading-relaxed text-stone-700 sm:space-y-10 md:space-y-12 lg:col-span-8">

            {/* Section 1 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                1. Who We Are
              </h2>

              <p>
                DESIG9 HAUSE is operated as a multidisciplinary design
                studio offering architecture, interior, and landscape
                design solutions across India.
              </p>

              <div className="space-y-2 rounded-xl border border-black/5 bg-white p-4 text-xs sm:p-5">
                <p className="break-words">
                  <strong className="text-[#22221f]">Company Practice:</strong>{" "}
                  DESIG9 HAUSE Studio
                </p>

                <p className="break-words">
                  <strong className="text-[#22221f]">Website:</strong>{" "}
                  desig9hause.com
                </p>

                <p className="break-words">
                  <strong className="text-[#22221f]">Email:</strong>{" "}
                  hello@desig9hause.com
                </p>

                <p className="break-words">
                  <strong className="text-[#22221f]">Phone:</strong>{" "}
                  (+91) 6386994478
                </p>

                <p className="break-words">
                  <strong className="text-[#22221f]">Offices:</strong>{" "}
                  NCR · Lucknow, Uttar Pradesh
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                2. Services We Offer
              </h2>

              <p>
                DESIG9 HAUSE provides comprehensive design and execution
                services including but not limited to:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-xs leading-relaxed text-stone-600 sm:pl-6">
                <li>
                  <strong className="text-[#22221f]">
                    Architecture &amp; Structural Design:
                  </strong>{" "}
                  Luxury villas, commercial structures, and elevation
                  development.
                </li>

                <li>
                  <strong className="text-[#22221f]">
                    Interior Styling &amp; Execution:
                  </strong>{" "}
                  Turnkey residential and commercial space transformations.
                </li>

                <li>
                  <strong className="text-[#22221f]">
                    Landscape &amp; Outdoor Design:
                  </strong>{" "}
                  Terraces, gardens, hardscapes, and resort layouts.
                </li>

                <li>
                  <strong className="text-[#22221f]">
                    Visualization &amp; Concept Planning:
                  </strong>{" "}
                  3D renders, architectural layouts, and zoning studies.
                </li>
              </ul>

              <p className="pt-1 text-xs leading-relaxed text-stone-500">
                All services are subject to a separate works contract or
                project agreement signed between you and DESIG9 HAUSE
                prior to execution.
              </p>
            </section>

            {/* Section 3 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                3. Enquiries &amp; Consultations
              </h2>

              <p className="text-xs leading-relaxed text-stone-600 sm:text-sm">
                Submitting an enquiry form or booking a site visit does
                not constitute a binding contract; it is an expression
                of interest. A binding agreement is formed only when:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-xs leading-relaxed text-stone-600 sm:pl-6">
                <li>
                  A formal project quotation has been shared and
                  approved by you.
                </li>
                <li>
                  A works contract or project agreement has been duly
                  signed.
                </li>
                <li>
                  An initial milestone payment has been received by
                  DESIG9 HAUSE.
                </li>
              </ul>

              <div className="rounded-lg border border-[#c51f32]/20 bg-[#c51f32]/5 p-3 text-xs font-medium leading-relaxed text-[#c51f32] sm:p-4">
                💡 Site visits and design consultations are free of
                charge and carry no obligation to proceed.
              </div>
            </section>

            {/* Section 4 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                4. Quotations &amp; Pricing
              </h2>

              <p className="text-xs leading-relaxed text-stone-600 sm:text-sm">
                All quotations provided by DESIG9 HAUSE are based on
                the scope of work agreed at the time of site inspection,
                valid for 30 days from the date of issue, and subject
                to revision if the project scope changes.
              </p>

              <ul className="list-disc space-y-3 pl-5 text-xs leading-relaxed text-stone-600 sm:pl-6">
                <li>
                  <strong className="text-[#22221f]">Price Lock:</strong>{" "}
                  Once you sign the project agreement and make the
                  initial payment, the quoted price is locked. We do
                  not increase prices mid-project due to internal
                  material or labor fluctuations.
                </li>

                <li>
                  <strong className="text-[#22221f]">Price Match:</strong>{" "}
                  We offer price match assurance on like-for-like
                  architectural quotations. The competing quote must
                  be for identical scope, materials, and execution quality.
                </li>

                <li>
                  <strong className="text-[#22221f]">GST:</strong>{" "}
                  All prices are subject to applicable GST as per
                  Indian law, billed across respective payment milestones.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                5. Payment Terms
              </h2>

              <p className="text-xs leading-relaxed text-stone-600 sm:text-sm">
                Payments are structured in milestones tied to project
                progress (e.g. stage sign-off, design approval, and final
                project handover). Delays in payment may result in
                corresponding project timeline shifts.
              </p>
            </section>

            {/* Section 6 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                6. Changes To Scope &amp; Cancellation Policy
              </h2>

              <p className="text-xs leading-relaxed text-stone-600 sm:text-sm">
                Any post-agreement changes to scope must be requested
                in writing, assessed separately, and approved before
                implementation. Cancellations before design finalisation
                incur a fee proportional to work completed, while
                cancellations after execution begins are assessed
                case-by-case with non-refundable material/contractor
                expenses.
              </p>
            </section>

            {/* Section 7 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                7. Timelines, Materials &amp; Warranty
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-xs leading-relaxed text-stone-600 sm:pl-6">
                <li>
                  <strong className="text-[#22221f]">Timelines:</strong>{" "}
                  We commit to structured timelines in our agreements,
                  though force majeure events, client delays, or site
                  access issues may affect schedules.
                </li>

                <li>
                  <strong className="text-[#22221f]">Materials:</strong>{" "}
                  We use vetted premium materials, confirmed during
                  quotation, with no substitutions made without
                  client approval.
                </li>

                <li>
                  <strong className="text-[#22221f]">Warranty:</strong>{" "}
                  We offer standard structural warranties (up to 10 years
                  where applicable), manufacturer product warranties,
                  and a 1-year workmanship warranty on execution quality.
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                8. Handover &amp; Liability
              </h2>

              <p className="text-xs leading-relaxed text-stone-600 sm:text-sm">
                Project handover takes place upon completion of agreed
                scope, joint inspection walkthrough, snag resolution,
                and final payment receipt. DESIG9 HAUSE manages vetted
                contractors but is not liable for unauthorized external
                arrangements made independently by clients.
              </p>
            </section>

            {/* Section 9 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                9. Intellectual Property &amp; Governing Law
              </h2>

              <p className="text-xs leading-relaxed text-stone-600 sm:text-sm">
                All renders, architectural drawings, website designs,
                and project photographs remain the intellectual property
                of DESIG9 HAUSE until full payment is settled. These
                terms are governed by the laws of India, with legal
                jurisdiction exclusive to the courts of Lucknow,
                Uttar Pradesh.
              </p>
            </section>

            {/* Section 10 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                10. Contact Us
              </h2>

              <p className="text-xs leading-relaxed text-stone-600 sm:text-sm">
                For any questions or legal inquiries regarding these terms:
              </p>

              <div className="space-y-4 rounded-2xl border border-black/10 bg-white p-4 text-xs sm:p-6">

                <div className="flex min-w-0 items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#c51f32]" />

                  <div className="min-w-0 break-words">
                    <span className="font-semibold text-[#22221f]">
                      Email:
                    </span>{" "}
                    <a
                      href="mailto:hello@desig9hause.com"
                      className="break-all transition-colors hover:text-[#c51f32]"
                    >
                      hello@desig9hause.com
                    </a>
                  </div>
                </div>

                <div className="flex min-w-0 items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#c51f32]" />

                  <div className="min-w-0 break-words">
                    <span className="font-semibold text-[#22221f]">
                      Phone:
                    </span>{" "}
                    <a
                      href="tel:+916386994478"
                      className="transition-colors hover:text-[#c51f32]"
                    >
                      (+91) 6386994478
                    </a>
                  </div>
                </div>

                <div className="flex min-w-0 items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c51f32]" />

                  <div className="min-w-0 break-words leading-relaxed">
                    <span className="font-semibold text-[#22221f]">
                      Address:
                    </span>{" "}
                    D / 2/187, Golf City, Bagiamau, Lucknow,
                    Uttar Pradesh 226030
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </section>

    </main>
  );
}
