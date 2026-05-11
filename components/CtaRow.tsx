"use client";

import { PillBtn } from "./PillBtn";
import { ArrowLnk } from "./ArrowLnk";
import { useModal } from "./ModalContext";

interface CtaRowProps {
  state?: string;
}

export function CtaRow({ state }: CtaRowProps) {
  const { open } = useModal();
  const headline = state
    ? `Send us your ${state} file.`
    : "Have a file ready for an MSA?";

  return (
    <section className="bg-pm-navy text-pm-paper px-10 lg:px-20 py-24">
      <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-14 items-center">
        <h2
          className="font-display text-4xl md:text-[56px] leading-[1.05]"
          style={{ letterSpacing: "-0.015em" }}
        >
          {headline}
        </h2>
        <div className="flex flex-col gap-4 items-start">
          <PillBtn onClick={() => open("submit")}>Submit a case</PillBtn>
          <ArrowLnk onClick={() => open("schedule")} light>
            Triage call within one business day
          </ArrowLnk>
          <p className="mt-2 text-xs text-[#bdc4d6] max-w-[320px]">
            Methodology follows the CMS WCMSA Reference Guide. Reports authored in-house by
            credentialed clinicians (MDs, RNs, NPs, PAs).
          </p>
        </div>
      </div>
    </section>
  );
}
