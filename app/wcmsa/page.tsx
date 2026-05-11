import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { getAllStates, isHandwritten } from "@/lib/states";

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
            Fifty states plus DC. Fee schedules, pharmacy bases, settlement-approval procedures,
            and procedural quirks vary jurisdiction by jurisdiction. We carry the state context
            through every line of every report. Eight states are hand-written because their WC
            systems differ structurally from the carrier-driven default; the remaining 43 are
            built from a single methodology template fed by jurisdictional data.
          </p>
        </div>
      </section>

      <section className="px-10 lg:px-20 py-12 border-b border-pm-hair">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-center gap-6 text-sm text-pm-ink-50 mb-8">
            <span className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pm-teal"></span>
              Hand-written
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border border-pm-ink-30"></span>
              Templated
            </span>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-1.5">
            {states.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/wcmsa/${s.slug}`}
                  className="group flex items-start gap-2.5 py-1 text-[15px] text-pm-ink hover:text-pm-teal transition-colors"
                >
                  <span
                    className={`mt-1.5 flex-shrink-0 w-2.5 h-2.5 rounded-full ${
                      isHandwritten(s.slug)
                        ? "bg-pm-teal"
                        : "border border-pm-ink-30"
                    }`}
                  ></span>
                  <span>
                    <span className="font-medium">{s.state}</span>
                    <span className="block text-xs text-pm-ink-50 leading-tight">
                      {s.fee_schedule_short}
                    </span>
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
              Each state page is keyed to that state&apos;s WC fee schedule, pharmacy rules, and
              settlement-approval framework. The procedural quirks that materially shape a
              WCMSA in that state (utilization-review records, formulary status, MMI rules,
              treating-clinician control) are surfaced explicitly so a reader can see how the
              file&apos;s posture maps to the projection.
            </p>
            <p>
              Hand-written pages exist for jurisdictions where the WC system is structurally
              different from the carrier-driven default: Texas (non-subscriber), Ohio,
              Washington, North Dakota, and Wyoming (monopolistic state-fund); plus California,
              New York, and Florida, where the procedural depth justifies the extra authorship.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
