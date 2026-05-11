"use client";

import { Eyebrow } from "@/components/Eyebrow";
import { PillBtn } from "@/components/PillBtn";
import { ArrowLnk } from "@/components/ArrowLnk";
import { useModal } from "@/components/ModalContext";

const IN_EVERY_REPORT = [
  "ICD-10–anchored diagnoses pulled from the medical record",
  "Indexed treatment history with line-item citations",
  "Projected treatment timeline over remaining life expectancy",
  "Jurisdictional fee-schedule pricing on every line item",
  "Rx allocation per the CMS WCMSA Reference Guide",
  "Methodology appendix: cost basis, life-expectancy assumption, source citations",
  "Delivered through the secure portal in standard CMS-ready format",
];

const ADD_ONS: Array<[string, string]> = [
  [
    "Credentialed-allocator review",
    "Add a second-pair-of-eyes review by a credentialed allocator before delivery. Recommended for files with disputed body parts or unusual pharmacy regimens.",
  ],
  [
    "CMS submission filing",
    "We submit the WCMSA to CMS via the WCMSA Portal on your behalf and track the file through to final determination.",
  ],
  [
    "Rush turnaround",
    "Three business days from records intake. Available where the case timeline warrants it; priced at intake.",
  ],
];

const ENGAGEMENT_LEDGER: Array<[string, string, string]> = [
  ["Day 0", "Records received", "Same-day acknowledgment. Engagement letter signed. Assignment to clinician."],
  ["Days 1–3", "Authorship", "Records reviewed. Diagnoses indexed. Treatment timeline projected. Fee-schedule pricing applied."],
  ["Days 4–5", "Allocator review", "Credentialed-allocator review integrated, not queued. Methodology appendix finalized."],
  ["Days 6–7", "Delivery", "Report delivered through secure portal. CMS submission packaged where filing was added at intake."],
];

export default function MSAServicePage() {
  const { open } = useModal();

  return (
    <>
      {/* Hero */}
      <section className="px-10 lg:px-20 pt-16 pb-8">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow className="mb-4">Service · Workers&apos; Comp Medicare Set-Aside</Eyebrow>
          <h1 className="font-display text-5xl md:text-[72px] leading-[1.05] max-w-[1100px]" style={{ letterSpacing: "-0.02em" }}>
            The full WCMSA, in seven business days.
          </h1>
          <p className="mt-7 max-w-[780px] text-[18px] leading-relaxed text-pm-ink-70">
            One product. Clinician-authored. CMS-submission ready. Modular at intake. Add
            credentialed-allocator review, CMS submission filing, or rush turnaround as the file
            requires.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <PillBtn onClick={() => open("submit")}>Submit a case</PillBtn>
            <ArrowLnk onClick={() => open("schedule")} accent>
              Talk to a human first
            </ArrowLnk>
          </div>
        </div>
      </section>

      {/* What's in every WCMSA / Standards two-column */}
      <section className="px-10 lg:px-20 py-16">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-2 border-[1.5px] border-pm-ink">
          <div className="p-12 bg-pm-teal-soft md:border-r border-pm-hair">
            <Eyebrow className="mb-4">What&apos;s in every WCMSA</Eyebrow>
            <h2 className="font-display text-[36px] leading-tight mb-5">
              Built against the CMS WCMSA Reference Guide.
            </h2>
            <p className="text-[15px] text-pm-ink-70 leading-relaxed mb-6">
              Every report follows the same methodology, regardless of complexity. The case
              profile determines the depth of the review; the deliverable structure stays
              constant.
            </p>
            <ul className="m-0 p-0 list-none">
              {IN_EVERY_REPORT.map((b, i) => (
                <li
                  key={i}
                  className={`grid grid-cols-[20px_1fr] gap-3 py-3 text-sm text-pm-ink-70 leading-relaxed ${
                    i < IN_EVERY_REPORT.length - 1 ? "border-b border-pm-hair" : ""
                  }`}
                >
                  <span className="text-pm-teal font-bold mt-0.5">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-12 bg-pm-paper">
            <Eyebrow className="mb-4">Standards we don&apos;t negotiate on</Eyebrow>
            <h2 className="font-display text-[36px] leading-tight mb-5">
              Clinician-authored. In-house. Always.
            </h2>
            <p className="text-[15px] text-pm-ink-70 leading-relaxed mb-7">
              We do not route reports through external review panels. We do not paralegal-draft
              and clinician-sign. Every WCMSA is read, analyzed, and authored by a credentialed
              clinician on staff. The same author whose name and credentials appear on the
              report.
            </p>
            <div className="border-t border-pm-hair pt-6">
              <Eyebrow className="mb-3">The clinician roster</Eyebrow>
              <p className="text-sm text-pm-ink-70 leading-relaxed">
                MDs, RNs, NPs, PAs. Credentialed in the specialties WCMSA work draws on:
                orthopedics, pain medicine, neurology, occupational health, internal medicine,
                rehabilitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="px-10 lg:px-20 py-24 border-t border-pm-hair">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow className="mb-4">Modular at intake</Eyebrow>
          <h2 className="font-display text-4xl md:text-[44px] leading-[1.08] max-w-[820px] mb-12" style={{ letterSpacing: "-0.015em" }}>
            Three add-ons available when the file warrants them.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 border-[1.5px] border-pm-ink">
            {ADD_ONS.map(([title, body], i) => (
              <div
                key={title}
                className={`p-8 ${i < 2 ? "md:border-r border-pm-hair" : ""}`}
              >
                <Eyebrow className="mb-3">0{i + 1}</Eyebrow>
                <h3 className="font-display text-2xl mb-4">{title}</h3>
                <p className="text-sm text-pm-ink-70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seven-day engagement ledger */}
      <section className="px-10 lg:px-20 py-24 bg-pm-paper-warm border-t border-pm-hair">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow className="mb-4">The seven-day engagement</Eyebrow>
          <h2 className="font-display text-4xl md:text-[44px] leading-[1.08] max-w-[820px] mb-12" style={{ letterSpacing: "-0.015em" }}>
            What happens between records intake and report delivery.
          </h2>
          <div className="border-t-[1.5px] border-b-[1.5px] border-pm-ink">
            {ENGAGEMENT_LEDGER.map(([day, title, body], i) => (
              <div
                key={day}
                className={`grid grid-cols-[120px_1fr_2fr] gap-8 py-7 px-2 ${
                  i < ENGAGEMENT_LEDGER.length - 1 ? "border-b border-pm-hair" : ""
                }`}
              >
                <span className="font-mono text-xs text-pm-teal tracking-[0.14em] uppercase pt-1">
                  {day}
                </span>
                <h3 className="font-display text-xl">{title}</h3>
                <p className="text-sm text-pm-ink-70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pm-navy text-pm-paper px-10 lg:px-20 py-24">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-14 items-center">
          <h2 className="font-display text-4xl md:text-[56px] leading-[1.05]" style={{ letterSpacing: "-0.015em" }}>
            Ready to send a file?{" "}
            <span className="text-pm-teal italic">We respond within one business day.</span>
          </h2>
          <div className="flex flex-col gap-4 items-start">
            <PillBtn onClick={() => open("submit")}>Submit a case</PillBtn>
            <ArrowLnk onClick={() => open("schedule")} light>
              Schedule a 15-minute call
            </ArrowLnk>
          </div>
        </div>
      </section>
    </>
  );
}
