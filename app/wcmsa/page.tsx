import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { getAllStates } from "@/lib/states";

export const metadata: Metadata = {
  title: "Jurisdictional WCMSA coverage — 51 jurisdictions | Project Medical",
  description:
    "State-specific Workers' Comp Medicare Set-Aside coverage across all 50 states and DC. Fee schedule, settlement approval, and procedural quirks per jurisdiction.",
};

export default function WCMSAHubPage() {
  const states = getAllStates().sort((a, b) => a.state.localeCompare(b.state));

  return (
    <>
      <section className="px-10 lg:px-20 pt-16 pb-12 border-b border-pm-hair">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow className="mb-4">WCMSA · Jurisdictions</Eyebrow>
          <h1 className="font-display text-5xl md:text-[68px] leading-[1.04] max-w-[1100px]" style={{ letterSpacing: "-0.02em" }}>
            State-specific methodology, written for every jurisdiction we work.
          </h1>
          <p className="mt-8 max-w-[780px] text-[18px] leading-relaxed text-pm-ink-70">
            Fifty states plus DC. Fee schedules, pharmacy bases, settlement-approval
            procedures, and procedural quirks vary jurisdiction by jurisdiction. We carry the
            state context through every line of every report.
          </p>
        </div>
      </section>

      <section className="px-10 lg:px-20 py-12 border-b border-pm-hair">
        <div className="mx-auto max-w-[1280px]">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3">
            {states.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/wcmsa/${s.slug}`}
                  className="block py-1 text-[15px] text-pm-ink hover:text-pm-teal transition-colors"
                >
                  <span className="font-medium">{s.state}</span>
                  <span className="block text-xs text-pm-ink-50 leading-tight mt-0.5">
                    {s.fee_schedule_short}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-pm-paper-warm px-10 lg:px-20 py-24 border-b border-pm-hair">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <Eyebrow>Methodology</Eyebrow>
          </div>
          <div className="text-[15px] text-pm-ink-70 leading-relaxed space-y-4 max-w-[760px]">
            <p>
              Each state page is keyed to that state&apos;s WC fee schedule, pharmacy rules,
              and settlement-approval framework. The procedural quirks that materially shape a
              WCMSA in that state (utilization-review records, formulary status, MMI rules,
              treating-clinician control) are surfaced explicitly so a reader can see how the
              file&apos;s posture maps to the projection.
            </p>
            <p>
              The methodology does not change with jurisdiction; the inputs do. CMS-submission
              readiness, clinician authorship, and seven-business-day turnaround apply
              uniformly. The jurisdictional layer is what makes the report defensible to the
              payer reading it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
