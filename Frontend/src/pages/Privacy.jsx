import React from "react";
import { ShieldCheck, Sparkles, Mail, Phone, MapPin } from "lucide-react";

export default function Privacy() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#fbfaf7] font-sans text-[#22221f] selection:bg-[#c51f32]/20 selection:text-[#c51f32]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden border-b border-black/[0.08] pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(#22221f_1px,transparent_1px)] opacity-30 [background-size:24px_24px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 right-0 h-56 w-56 rounded-full bg-[#c51f32]/5 blur-[90px] sm:right-1/4 sm:h-96 sm:w-96 sm:blur-[140px]"
        />

        <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-[1240px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c51f32] sm:text-xs sm:tracking-[0.25em]">
            <Sparkles className="h-4 w-4 shrink-0" />
            <span>Legal &amp; Data Protection</span>
          </div>

          <h1 className="font-serif text-4xl font-light leading-[1.12] tracking-tight text-[#22221f] sm:text-5xl md:text-6xl lg:text-7xl">
            Privacy Policy
          </h1>

          <div className="mt-4 flex flex-col items-start gap-2 text-xs font-medium text-stone-500 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
            <span className="max-w-full break-words">
              DESIG9 HAUSE – Architecture, Interiors &amp; Landscape
            </span>
            <span className="hidden sm:inline" aria-hidden="true">•</span>
            <span>Last updated: May 2026</span>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1240px] grid-cols-1 items-start gap-8 sm:w-[calc(100%-48px)] sm:gap-10 md:gap-12 lg:w-[calc(100%-64px)] lg:grid-cols-12 lg:gap-12">

          {/* LEFT SIDEBAR */}
          <aside className="min-w-0 space-y-6 lg:sticky lg:top-32 lg:col-span-4">
            <div className="space-y-4 rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3 text-[#c51f32]">
                <ShieldCheck className="h-5 w-5 shrink-0" />

                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#22221f]">
                  Our Commitment
                </h2>
              </div>

              <p className="text-xs leading-relaxed text-stone-600 sm:text-sm">
                We respect your privacy. This policy explains what information
                we collect, why we collect it, how we use it, and what rights
                you have over it in plain language.
              </p>

              <div className="border-t border-black/10 pt-4 text-[11px] leading-relaxed text-stone-500 sm:text-xs">
                By using desig9hause.com or any of our studio services, you
                agree to this policy.
              </div>
            </div>
          </aside>

          {/* RIGHT POLICY CONTENT */}
          <div className="min-w-0 space-y-9 text-sm leading-relaxed text-stone-700 sm:space-y-10 md:space-y-12 lg:col-span-8">

            {/* SECTION 1 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                1. Who We Are
              </h2>

              <p>
                DESIG9 HAUSE is operated as a multidisciplinary design studio
                offering architecture, interior, and landscape design
                solutions across India.
              </p>

              <div className="space-y-2 break-words rounded-xl border border-black/5 bg-white p-4 text-xs sm:space-y-1">
                <div>
                  <strong className="text-[#22221f]">Registered Address:</strong>{" "}
                  D / 2/187, Golf City, Bagiamau, Lucknow, Uttar Pradesh 226030
                </div>

                <div>
                  <strong className="text-[#22221f]">Contact Email:</strong>{" "}
                  <a
                    href="mailto:hello@desig9hause.com"
                    className="break-all hover:text-[#c51f32]"
                  >
                    hello@desig9hause.com
                  </a>
                </div>

                <div>
                  <strong className="text-[#22221f]">Contact Phone:</strong>{" "}
                  <a href="tel:+916386994478" className="hover:text-[#c51f32]">
                    (+91) 6386994478
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 2 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                2. What Information We Collect
              </h2>

              <p className="font-medium text-[#22221f]">
                Information you give us directly:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-xs leading-relaxed text-stone-600 sm:space-y-1">
                <li>Name, phone number, and email address</li>
                <li>City and home/site address (for site visits and spatial analysis)</li>
                <li>Project details, architectural requirements, and preferences shared via forms or calls</li>
                <li>Payment information processed securely via third-party payment gateways (we do not store card details)</li>
              </ul>

              <p className="pt-2 font-medium text-[#22221f]">
                Information we collect automatically:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-xs leading-relaxed text-stone-600 sm:space-y-1">
                <li>Browser type, device metadata, and IP address</li>
                <li>Pages visited, duration spent, and interactions on our website</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <p className="pt-2 font-medium text-[#22221f]">
                Information from third parties:
              </p>

              <p className="text-xs leading-relaxed text-stone-600">
                If you contact us via WhatsApp, Facebook, Instagram, LinkedIn,
                or other social platforms, we may receive information shared
                through those platforms.
              </p>
            </section>

            {/* SECTION 3 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                3. Why We Collect It &amp; How We Use It
              </h2>

              <p>We collect your information only for legitimate studio purposes:</p>

              <div className="grid grid-cols-1 gap-3 text-xs sm:gap-4 md:grid-cols-2">
                <div className="space-y-2 rounded-xl border border-black/5 bg-white p-4">
                  <div className="font-semibold text-[#22221f]">
                    To deliver our services
                  </div>
                  <p className="leading-relaxed text-stone-600">
                    Processing enquiries, scheduling site visits, preparing
                    architectural quotes, managing projects, and communicating
                    updates.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl border border-black/5 bg-white p-4">
                  <div className="font-semibold text-[#22221f]">
                    To improve our services
                  </div>
                  <p className="leading-relaxed text-stone-600">
                    Understanding website usage trends and client design
                    preferences to serve you better.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl border border-black/5 bg-white p-4">
                  <div className="font-semibold text-[#22221f]">
                    To communicate with you
                  </div>
                  <p className="leading-relaxed text-stone-600">
                    Sending project updates, responding to queries, and
                    following up. You can opt out of marketing communications
                    at any time.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl border border-black/5 bg-white p-4">
                  <div className="font-semibold text-[#22221f]">
                    To meet legal obligations
                  </div>
                  <p className="leading-relaxed text-stone-600">
                    Maintaining records as required under applicable Indian
                    law, including GST and tax accounting requirements.
                  </p>
                </div>
              </div>

              <p className="pt-2 text-xs font-semibold leading-relaxed text-[#c51f32]">
                We do not sell your data. We do not share it with external
                advertisers.
              </p>
            </section>

            {/* SECTION 4 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                4. Who We Share It With
              </h2>

              <p>We share your information only when strictly necessary:</p>

              <ul className="list-disc space-y-3 pl-5 text-xs leading-relaxed text-stone-600 sm:space-y-2">
                <li>
                  <strong className="text-[#22221f]">Our service partners:</strong>{" "}
                  Vetted contractors, structural engineers, execution teams,
                  and logistics partners bound by strict confidentiality.
                </li>
                <li>
                  <strong className="text-[#22221f]">Technology providers:</strong>{" "}
                  Hosting, CRM, analytics, and payment processing platforms
                  that help run our operations under our instructions.
                </li>
                <li>
                  <strong className="text-[#22221f]">Legal requirements:</strong>{" "}
                  If required by law, court order, or government authority,
                  we may disclose your information.
                </li>
              </ul>

              <p className="text-xs leading-relaxed text-stone-500">
                We do not share your data with any third party for their own
                marketing purposes.
              </p>
            </section>

            {/* SECTION 5 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                5. Cookies
              </h2>

              <p className="text-xs leading-relaxed text-stone-600">
                We use cookies to keep our website functional, analyze visitor
                traffic, and remember your display preferences. You can disable
                cookies in your browser settings, though some sections may not
                function properly.
              </p>
            </section>

            {/* SECTION 6 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                6. How Long We Keep Your Data
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-xs leading-relaxed text-stone-600 sm:space-y-1">
                <li>Enquiry data – up to 2 years from last contact</li>
                <li>Project data – up to 7 years for legal, structural warranty, and archival purposes</li>
                <li>Payment records – as required under Indian tax law</li>
              </ul>
            </section>

            {/* SECTION 7 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                7. Your Rights
              </h2>

              <p className="text-xs leading-relaxed text-stone-600">
                You have the right to access, correct, delete, or withdraw
                consent regarding your personal data. To exercise these rights,
                email us at{" "}
                <a
                  href="mailto:hello@desig9hause.com"
                  className="break-all font-medium text-[#c51f32] underline underline-offset-2"
                >
                  hello@desig9hause.com
                </a>
                . We respond within 30 days.
              </p>
            </section>

            {/* SECTION 8 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                8. Data Security
              </h2>

              <p className="text-xs leading-relaxed text-stone-600">
                We implement robust technical and organizational security
                measures, including encrypted connections and access controls.
                If you suspect any breach, contact us immediately.
              </p>
            </section>

            {/* SECTION 9 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                9. Third-Party Links &amp; Children
              </h2>

              <p className="text-xs leading-relaxed text-stone-600">
                Our website may link to external brand partners or social
                networks; we are not responsible for their privacy practices.
                Additionally, our services are not directed at minors under 18.
              </p>
            </section>

            {/* SECTION 10 */}
            <section className="min-w-0 space-y-4">
              <h2 className="border-b border-black/10 pb-2 font-serif text-xl text-[#22221f] sm:text-2xl">
                10. Policy Updates &amp; Contact Us
              </h2>

              <p className="text-xs leading-relaxed text-stone-600">
                We may update this policy periodically with date revisions.
                For any privacy queries or requests:
              </p>

              <div className="space-y-4 rounded-2xl border border-black/10 bg-white p-4 text-xs sm:space-y-3 sm:p-6">
                <a
                  href="mailto:hello@desig9hause.com"
                  className="flex min-w-0 items-start gap-3 break-words transition-colors hover:text-[#c51f32]"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#c51f32]" />
                  <span className="min-w-0">
                    <strong>Email:</strong>{" "}
                    hello@desig9hause.com
                  </span>
                </a>

                <a
                  href="tel:+916386994478"
                  className="flex min-w-0 items-start gap-3 transition-colors hover:text-[#c51f32]"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#c51f32]" />
                  <span>
                    <strong>Phone:</strong> (+91) 6386994478
                  </span>
                </a>

                <div className="flex min-w-0 items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c51f32]" />

                  <span className="min-w-0 break-words">
                    <strong>Address:</strong> D / 2/187, Golf City, Bagiamau,
                    Lucknow, Uttar Pradesh 226030
                  </span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}
