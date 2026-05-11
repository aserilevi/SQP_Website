import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaRow } from "@/components/CtaRow";
import {
  allSlugs,
  getStateBySlug,
  isHandwritten,
  metros,
  quirks,
} from "@/lib/states";
import { loadMarkdown } from "@/lib/content";

interface PageProps {
  params: Promise<{ state: string }>;
}

export function generateStaticParams() {
  return allSlugs().map((state) => ({ state }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params;
  const row = getStateBySlug(state);
  if (!row) return { title: "Jurisdiction not found" };

  return {
    title: `WCMSA ${row.state} | Workers' Comp Medicare Set-Aside Reports in 7 Business Days | Project Medical`,
    description: `Clinician-authored Workers' Comp Medicare Set-Aside reports for ${row.state} files. Methodology aligned to the ${row.fee_schedule_short} and the CMS WCMSA Reference Guide. Triage call within one business day.`,
    alternates: { canonical: `/wcmsa/${row.slug}` },
  };
}

export default async function StatePage({ params }: PageProps) {
  const { state } = await params;
  const row = getStateBySlug(state);
  if (!row) notFound();

  // Hand-written: render the markdown verbatim under a state-page chrome.
  if (isHandwritten(state)) {
    const doc = loadMarkdown(state);
    if (!doc) notFound();

    return (
      <>
        <article className="px-10 lg:px-20 py-16 border-b border-pm-hair">
          <div className="mx-auto max-w-[860px]">
            <nav className="mb-8 text-sm text-pm-ink-50">
              <Link href="/" className="hover:text-pm-teal">Home</Link>
              {" / "}
              <Link href="/wcmsa" className="hover:text-pm-teal">WCMSA</Link>
              {" / "}
              <span className="text-pm-ink">{row.state}</span>
            </nav>
            <Eyebrow className="mb-4">WCMSA · {row.state}</Eyebrow>
            <div
              className="prose-pm"
              dangerouslySetInnerHTML={{ __html: doc.html }}
            />
          </div>
        </article>
        <CtaRow state={row.state} />
      </>
    );
  }

  // Templated. Render from CSV row.
  return (
    <>
      <section className="px-10 lg:px-20 pt-16 pb-12 border-b border-pm-hair">
        <div className="mx-auto max-w-[1100px]">
          <nav className="mb-8 text-sm text-pm-ink-50">
            <Link href="/" className="hover:text-pm-teal">Home</Link>
            {" / "}
            <Link href="/wcmsa" className="hover:text-pm-teal">WCMSA</Link>
            {" / "}
            <span className="text-pm-ink">{row.state}</span>
          </nav>
          <Eyebrow className="mb-4">WCMSA · {row.state}</Eyebrow>
          <h1 className="font-display text-5xl md:text-[68px] leading-[1.04] max-w-[1080px]" style={{ letterSpacing: "-0.02em" }}>
            Workers&apos; Comp Medicare Set-Asides for {row.state} files, in seven business days.
          </h1>
          <p className="mt-7 max-w-[760px] text-[18px] leading-relaxed text-pm-ink-70">
            Reports keyed to the {row.fee_schedule_short} and the procedural realities of{" "}
            {row.settlement_approval_agency_short || row.settlement_approval_agency_full}. Triage
            call within one business day.
          </p>
        </div>
      </section>

      <section className="px-10 lg:px-20 py-16 border-b border-pm-hair">
        <div className="mx-auto max-w-[860px]">
          <h2 className="font-display text-[36px] leading-tight mb-6">
            How {row.state} workers&apos; comp shapes the WCMSA
          </h2>
          <p className="text-[17px] text-pm-ink-70 leading-relaxed mb-5">
            {row.state} pricing follows the {row.fee_schedule_full}, administered by{" "}
            {row.fee_schedule_agency}. Pharmacy reimbursement: {row.pharmacy_basis}. Settlement
            of accepted future medical runs through {row.settlement_approval_agency_full}.{" "}
            {row.settlement_approval_quirk}
          </p>
          <p className="text-[17px] text-pm-ink-70 leading-relaxed">
            The general Medicare Regional Office for {row.state} is the CMS{" "}
            {row.cms_regional_office} Regional Office. WCMSA submissions, regardless of state, go
            through the CMS Workers&apos; Compensation Review Contractor and are approved by CMS
            itself. The Regional Office handles broader Medicare program operations.
          </p>
        </div>
      </section>

      <section className="px-10 lg:px-20 py-16 border-b border-pm-hair">
        <div className="mx-auto max-w-[860px]">
          <Eyebrow className="mb-4">{row.state}-specific considerations</Eyebrow>
          <h2 className="font-display text-[36px] leading-tight mb-8">
            What our clinicians keep in view
          </h2>
          <ul className="space-y-6">
            {quirks(row).map((q, i) => (
              <li
                key={i}
                className="grid grid-cols-[40px_1fr] gap-5 text-[16px] text-pm-ink-70 leading-relaxed border-t border-pm-hair pt-5"
              >
                <span className="font-mono text-xs text-pm-teal tracking-[0.14em] pt-1">
                  0{i + 1}
                </span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {metros(row).length > 0 && (
        <section className="px-10 lg:px-20 py-12 bg-pm-paper-warm border-b border-pm-hair">
          <div className="mx-auto max-w-[860px]">
            <Eyebrow className="mb-3">Major metros</Eyebrow>
            <p className="text-[15px] text-pm-ink-70">
              We work {row.state} files originating in {metros(row).join(", ")} and elsewhere in
              the state.
            </p>
          </div>
        </section>
      )}

      <CtaRow state={row.state} />
    </>
  );
}
