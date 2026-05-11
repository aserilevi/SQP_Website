"use client";

import { Eyebrow } from "@/components/Eyebrow";
import { PillBtn } from "@/components/PillBtn";
import { ArrowLnk } from "@/components/ArrowLnk";
import { useModal } from "@/components/ModalContext";

const PRINCIPLES: Array<[string, string]> = [
  [
    "We commit to seven business days in writing.",
    "The commitment goes into every engagement letter. We publish our quarterly miss-rate so the commitment is auditable.",
  ],
  [
    "The clinician who reads the file is the author.",
    "No paralegal-drafted reports. No external review panels. The credentialed clinician whose name appears on the report is the one who read every page of the medical record.",
  ],
  [
    "Audience-neutral methodology.",
    "Same analysis, same citations, same standards whether the order came from defense, plaintiff, a carrier, a lifecare planner, or a structured-settlement professional. The report has to read cleanly to whoever sits on the other side of the table.",
  ],
  [
    "Jurisdiction matters.",
    "Fee schedules, pharmacy rules, settlement-approval procedures, and procedural quirks vary state by state. We carry that variation through every line of every report.",
  ],
];

export default function AboutPage() {
  const { open } = useModal();

  return (
    <>
      <section className="px-10 lg:px-20 pt-16 pb-12 border-b border-pm-hair">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow className="mb-4">About Project Medical</Eyebrow>
          <h1 className="font-display text-5xl md:text-[68px] leading-[1.04] max-w-[1100px]" style={{ letterSpacing: "-0.02em" }}>
            One product, written to a single standard.
          </h1>
          <p className="mt-8 max-w-[780px] text-[18px] leading-relaxed text-pm-ink-70">
            Project Medical is a clinician-authored Workers&apos; Comp Medicare Set-Aside service.
            We deliver one product, in seven business days, audience-neutral, with the
            methodology written into every engagement letter.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-10 lg:px-20 py-24 border-b border-pm-hair">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <Eyebrow>The story</Eyebrow>
          </div>
          <div className="text-[17px] text-pm-ink-70 leading-relaxed space-y-5 max-w-[720px]">
            <p>
              The industry standard for a Workers&apos; Comp Medicare Set-Aside is three to six weeks.
              We restructured the workflow around the work itself: in-house clinician authorship,
              credentialed-allocator review integrated rather than queued, and CMS submission packaged
              with the report.
            </p>
            <p>
              The result is a seven-business-day report, written into every engagement letter, with
              no compromise on authorship rigor, fee-schedule discipline, or CMS-submission readiness.
              Every WCMSA is authored and signed by a credentialed clinician on staff.
            </p>
            <p>
              We work for any party with a valid interest in the file: carriers, defense counsel,
              plaintiff counsel, lifecare planners, structured settlement professionals. The
              methodology does not change with the requesting party.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-10 lg:px-20 py-24 border-b border-pm-hair">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow className="mb-4">Principles</Eyebrow>
          <h2 className="font-display text-4xl md:text-[44px] leading-[1.08] max-w-[820px] mb-14" style={{ letterSpacing: "-0.015em" }}>
            Four operating principles, in order of importance.
          </h2>
          <div className="border-t-[1.5px] border-pm-ink">
            {PRINCIPLES.map(([title, body], i) => (
              <div
                key={i}
                className="grid grid-cols-[60px_1fr_2fr] gap-8 py-8 border-b border-pm-hair last:border-b-[1.5px] last:border-pm-ink"
              >
                <span className="font-mono text-xs text-pm-teal tracking-[0.14em] pt-1">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl leading-tight">{title}</h3>
                <p className="text-[15px] text-pm-ink-70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quarterly SLA placeholder */}
      <section className="px-10 lg:px-20 py-24 bg-pm-paper-warm border-b border-pm-hair">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow className="mb-4">Quarterly SLA</Eyebrow>
          <h2 className="font-display text-4xl md:text-[44px] leading-[1.08] max-w-[820px] mb-8" style={{ letterSpacing: "-0.015em" }}>
            We publish our quarterly miss-rate.
          </h2>
          <p className="text-[17px] max-w-[780px] mb-8 text-pm-ink-70 leading-relaxed">
            The seven-business-day commitment is auditable. Every quarter we publish the number
            of engagements completed, the number delivered within the commitment window, and the
            number missed (with the reason categorized: rush request, records gap, scope change).
          </p>
          <div className="border border-pm-ink p-8 bg-pm-paper inline-block">
            <Eyebrow>Current quarter</Eyebrow>
            <p className="font-display text-4xl mt-3 mb-1">SLA card placeholder</p>
            <p className="text-sm text-pm-ink-50">
              Numbers populate from the operations report at the end of each quarter.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pm-navy text-pm-paper px-10 lg:px-20 py-24">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-14 items-center">
          <h2 className="font-display text-4xl md:text-[56px] leading-[1.05]" style={{ letterSpacing: "-0.015em" }}>
            Want to talk first?{" "}
            <span className="text-pm-teal italic">Triage call within one business day.</span>
          </h2>
          <div className="flex flex-col gap-4 items-start">
            <PillBtn onClick={() => open("schedule")}>Schedule a call</PillBtn>
            <ArrowLnk onClick={() => open("submit")} light>
              Submit a case directly
            </ArrowLnk>
          </div>
        </div>
      </section>
    </>
  );
}
