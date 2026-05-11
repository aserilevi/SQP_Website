"use client";

import { Eyebrow } from "@/components/Eyebrow";
import { PillBtn } from "@/components/PillBtn";
import { ArrowLnk } from "@/components/ArrowLnk";
import { useModal } from "@/components/ModalContext";

const CHANNELS: Array<[string, string, string, string]> = [
  [
    "01",
    "Submit a case",
    "For active files with a known settlement target. Returns a triage call within one business day. No PHI on the form; records flow through our secure channel after engagement.",
    "Submit a case",
  ],
  [
    "02",
    "Schedule a call",
    "Fifteen-minute discovery call with a Project Medical clinician. For methodology questions, scope conversations, or files where you want to talk before submitting.",
    "Schedule a call",
  ],
];

export default function ContactPage() {
  const { open } = useModal();

  return (
    <>
      <section className="px-10 lg:px-20 pt-16 pb-12 border-b border-pm-hair">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow className="mb-4">Contact</Eyebrow>
          <h1 className="font-display text-5xl md:text-[68px] leading-[1.04] max-w-[1100px]" style={{ letterSpacing: "-0.02em" }}>
            Two channels in, one commitment back.
          </h1>
          <p className="mt-8 max-w-[780px] text-[18px] leading-relaxed text-pm-ink-70">
            Every inquiry routes to a triage response within one business day. From there, the
            path depends on what the file needs: scope confirmation, engagement letter, or
            handoff to records intake through our secure channel.
          </p>
        </div>
      </section>

      {/* Two-channel split */}
      <section className="px-10 lg:px-20 py-24 border-b border-pm-hair">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-2 border-[1.5px] border-pm-ink">
          {CHANNELS.map(([num, title, body, cta], i) => (
            <div
              key={num}
              className={`p-12 ${i === 0 ? "bg-pm-paper md:border-r border-pm-hair" : "bg-pm-teal-soft"}`}
            >
              <Eyebrow className="mb-3">{num}</Eyebrow>
              <h2 className="font-display text-[36px] leading-tight mb-5">{title}</h2>
              <p className="text-[15px] text-pm-ink-70 leading-relaxed mb-7">{body}</p>
              <PillBtn
                onClick={() => open(i === 0 ? "submit" : "schedule")}
                primary={i === 0}
              >
                {cta}
              </PillBtn>
            </div>
          ))}
        </div>
      </section>

      {/* No-PHI banner */}
      <section className="px-10 lg:px-20 py-16 border-b border-pm-hair">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <Eyebrow>Records and identifiers</Eyebrow>
          </div>
          <div className="text-[15px] text-pm-ink-70 leading-relaxed space-y-4 max-w-[760px]">
            <p>
              Neither the public form nor the public booking flow accepts protected health
              information. Claimant identifiers, dates of birth, claim numbers, and medical
              records flow through our separate secure channel only after the engagement letter
              is signed.
            </p>
            <p>
              The architecture is deliberate. It keeps PHI off our public surface and out of
              vendors that do not have a Business Associate Agreement with us. The seven-day
              report commitment runs after records receipt through the secure channel.
            </p>
          </div>
        </div>
      </section>

      {/* General inquiries */}
      <section className="px-10 lg:px-20 py-24 bg-pm-paper-warm border-b border-pm-hair">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow className="mb-4">General inquiries</Eyebrow>
          <h2 className="font-display text-4xl md:text-[44px] leading-[1.08] max-w-[820px] mb-8" style={{ letterSpacing: "-0.015em" }}>
            Anything else?
          </h2>
          <p className="text-[17px] max-w-[780px] mb-8 text-pm-ink-70 leading-relaxed">
            For press, partnerships, careers, or anything that does not fit the case-intake or
            scheduling paths, use the form below. Same one-business-day response window.
          </p>
          <div className="border border-dashed border-pm-hair p-8 max-w-[680px]">
            <Eyebrow>Form placeholder</Eyebrow>
            <p className="mt-3 text-pm-ink-50 text-sm leading-relaxed">
              Tally form (general inquiries, no PHI) will render here once the form ID is
              provisioned.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pm-navy text-pm-paper px-10 lg:px-20 py-24">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-14 items-center">
          <h2 className="font-display text-4xl md:text-[56px] leading-[1.05]" style={{ letterSpacing: "-0.015em" }}>
            Have a file ready?{" "}
            <span className="text-pm-teal italic">Submit it now.</span>
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
