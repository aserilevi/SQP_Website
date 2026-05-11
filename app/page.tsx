"use client";

import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { PillBtn } from "@/components/PillBtn";
import { ArrowLnk } from "@/components/ArrowLnk";
import { useModal } from "@/components/ModalContext";

function SpeedClaim() {
  return (
    <div className="inline-flex items-baseline gap-3.5 px-4 py-2.5 border border-pm-ink rounded-full whitespace-nowrap">
      <span className="font-mono text-[10.5px] tracking-[0.14em] text-pm-ink-50 uppercase">
        Turnaround
      </span>
      <span className="font-display text-[22px] text-pm-ink leading-none">7 business days</span>
      <span className="text-xs text-pm-ink-50">· industry: 3–6 weeks</span>
    </div>
  );
}

const PILLARS: Array<[string, string, string]> = [
  [
    "01",
    "Clinician-authored",
    "Every WCMSA is authored and signed by a credentialed clinician. The author who reads the file is the author whose name appears on the report.",
  ],
  [
    "02",
    "CMS-submission ready",
    "Built against the CMS WCMSA Reference Guide. Formatted for direct submission. Submission filing available as an add-on at intake.",
  ],
  [
    "03",
    "Audience-neutral",
    "Same analysis, same citations, same standards regardless of who orders. Defense, plaintiff, carrier, lifecare planner, structured-settlement professional.",
  ],
  [
    "04",
    "Seven business days",
    "Turnaround written into the engagement letter. Rush available where the file warrants it. Quarterly miss-rate published on the About page.",
  ],
];

export default function Home() {
  const { open } = useModal();

  return (
    <>
      {/* Hero */}
      <section className="border-b border-pm-hair px-10 lg:px-20 pt-24 pb-16">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow className="mb-6">Project Medical · Workers&apos; Comp Medicare Set-Asides</Eyebrow>
          <h1 className="font-display text-5xl md:text-[84px] leading-[1.02] max-w-[1100px]" style={{ letterSpacing: "-0.02em" }}>
            A clinician-authored MSA, in{" "}
            <span className="text-pm-teal italic">seven business days.</span>
          </h1>
          <p className="mt-8 max-w-[720px] text-[19px] leading-relaxed text-pm-ink-70">
            The industry standard for a Workers&apos; Comp Medicare Set-Aside is three to six weeks.
            Ours is seven business days, written into every engagement letter, without compromising
            the authorship rigor, fee-schedule discipline, or CMS-submission readiness that makes
            the report defensible.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <PillBtn onClick={() => open("submit")}>Submit a case</PillBtn>
            <ArrowLnk onClick={() => open("schedule")} accent>
              Schedule a 15-minute call
            </ArrowLnk>
            <span className="ml-4">
              <SpeedClaim />
            </span>
          </div>
        </div>
      </section>

      {/* The promise — 4-up grid */}
      <section className="border-b border-pm-hair px-10 lg:px-20 py-24">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow className="mb-4">The engagement</Eyebrow>
          <h2 className="font-display text-4xl md:text-[52px] leading-[1.08] max-w-[820px] mb-14" style={{ letterSpacing: "-0.015em" }}>
            One product, written to a single standard, regardless of who orders it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t-[1.5px] border-b-[1.5px] border-pm-ink">
            {PILLARS.map(([n, t, d], i) => (
              <div
                key={n}
                className={`p-8 ${
                  i < 3 ? "lg:border-r border-pm-hair" : ""
                } ${i % 2 === 0 ? "md:border-r" : ""} ${i < 2 ? "md:border-b lg:border-b-0" : ""} border-pm-hair`}
              >
                <span className="font-mono text-[11px] text-pm-teal tracking-[0.14em]">{n}</span>
                <h3 className="font-display text-[22px] mt-4 mb-3">{t}</h3>
                <p className="text-sm text-pm-ink-70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-b border-pm-hair px-10 lg:px-20 py-24 bg-pm-paper-warm">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow className="mb-4">Why the timeline matters</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.08] max-w-[820px] mb-8" style={{ letterSpacing: "-0.015em" }}>
            The industry has standardized on three to six weeks. Most files do not need that long.
          </h2>
          <p className="text-[17px] max-w-[780px] mb-12 text-pm-ink-70 leading-relaxed">
            Legacy MSA shops batch files, route them through external review panels, and queue
            submissions in weekly cohorts. The compounding lag is what produces a three-to-six-week
            turnaround on a report that, in fact, takes a credentialed clinician roughly four hours
            of focused review to author. We restructured the workflow around the work itself.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 border-[1.5px] border-pm-ink">
            <div className="p-9 bg-pm-paper md:border-r border-pm-hair">
              <span className="font-mono text-[11px] text-pm-ink-50 tracking-[0.14em] uppercase">
                Legacy MSA shop
              </span>
              <h3 className="font-display text-2xl mt-3 mb-5">3–6 weeks, on average.</h3>
              <ul className="m-0 p-0 list-none">
                {[
                  "Records intake → 3–5 day queue.",
                  "External review panel → batched weekly.",
                  "In-house QA pass → 2–4 day queue.",
                  "CMS submission packaging → next available cohort.",
                  "Status visibility: phone calls and email threads.",
                ].map((p, i) => (
                  <li
                    key={i}
                    className="py-3 border-t border-dashed border-pm-hair text-sm text-pm-ink-70"
                  >
                    — {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-9 bg-pm-teal-soft">
              <span className="font-mono text-[11px] text-pm-teal tracking-[0.14em] uppercase">
                Project Medical
              </span>
              <h3 className="font-display text-2xl mt-3 mb-5">
                Seven business days, written into the engagement.
              </h3>
              <ul className="m-0 p-0 list-none">
                {[
                  "Records intake → same-day acknowledgment, day-one assignment.",
                  "In-house clinician authorship → no external panel.",
                  "Credentialed-allocator review → integrated, not queued.",
                  "CMS submission → packaged with the report, not after.",
                  "Status visibility: secure portal, real-time.",
                ].map((p, i) => (
                  <li
                    key={i}
                    className="py-3 border-t border-dashed border-pm-hair text-sm text-pm-ink grid grid-cols-[14px_1fr] gap-2.5"
                  >
                    <span className="text-pm-teal font-bold">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Jurisdictional preview */}
      <section className="px-10 lg:px-20 py-24 border-b border-pm-hair">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow className="mb-4">Jurisdictions</Eyebrow>
          <h2 className="font-display text-4xl md:text-[44px] leading-[1.08] max-w-[820px] mb-6" style={{ letterSpacing: "-0.015em" }}>
            State-specific methodology for every WCMSA we deliver.
          </h2>
          <p className="text-[17px] max-w-[780px] mb-8 text-pm-ink-70 leading-relaxed">
            Fee schedules, pharmacy rules, settlement-approval procedures, and procedural quirks
            vary state by state. We carry the state context through every line of every report.
          </p>
          <Link
            href="/wcmsa"
            className="inline-flex items-center gap-2 text-pm-teal font-medium text-[15px] hover:underline"
          >
            See all 51 jurisdictions <span>→</span>
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-pm-navy text-pm-paper px-10 lg:px-20 py-24">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-14 items-center">
          <h2 className="font-display text-4xl md:text-[56px] leading-[1.05]" style={{ letterSpacing: "-0.015em" }}>
            Have a file ready for an MSA?{" "}
            <span className="text-pm-teal italic">Send it over.</span>
          </h2>
          <div className="flex flex-col gap-4 items-start">
            <PillBtn onClick={() => open("submit")}>Submit a case</PillBtn>
            <ArrowLnk onClick={() => open("schedule")} light>
              Schedule a 15-minute call
            </ArrowLnk>
            <p className="mt-2 text-xs text-[#bdc4d6]">Triage call within one business day.</p>
          </div>
        </div>
      </section>
    </>
  );
}
