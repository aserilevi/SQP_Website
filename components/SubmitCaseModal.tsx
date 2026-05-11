"use client";

import { useEffect } from "react";
import { Eyebrow } from "./Eyebrow";

interface SubmitCaseModalProps {
  onClose: () => void;
}

// Stub modal. When Tally is provisioned, replace the body with:
// <iframe src="https://tally.so/embed/YOUR_FORM_ID" ... />
//
// Architecture: the public form collects no PHI. See architecture/intake-form-fields.md.

export function SubmitCaseModal({ onClose }: SubmitCaseModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[rgba(15,15,15,0.55)] backdrop-blur-sm flex items-start justify-center overflow-y-auto py-12 px-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-pm-paper border border-pm-ink shadow-2xl"
      >
        <div className="px-8 py-6 border-b border-pm-hair flex items-start justify-between gap-6">
          <div>
            <Eyebrow>Submit a case</Eyebrow>
            <h2 className="font-display text-3xl mt-2 leading-tight text-pm-ink">
              Tell us about your file.
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex-shrink-0 w-9 h-9 rounded-full border border-pm-hair flex items-center justify-center hover:bg-pm-hair"
          >
            ✕
          </button>
        </div>
        <div className="px-8 py-8">
          <div className="bg-pm-teal-soft border border-pm-teal text-pm-ink p-4 mb-6 text-sm">
            <strong>This form does not accept protected health information.</strong>
            <p className="mt-2 text-pm-ink-70">
              Records and identifiers flow through Project Medical&apos;s secure channel after engagement.
            </p>
          </div>

          {/* TODO: Replace this stub with the Tally embed once provisioned.
              Reference: architecture/intake-form-fields.md
              Required fields: name, firm, role, work email, direct phone,
              jurisdiction, settlement target date, general case type,
              no-PHI acknowledgment checkbox. */}
          <div className="border border-dashed border-pm-hair p-8 text-center">
            <Eyebrow>Embed placeholder</Eyebrow>
            <p className="mt-3 text-pm-ink-50 text-sm leading-relaxed">
              Tally form will render here once the Tally form ID is provisioned.
              <br />
              Field spec: <code className="text-pm-ink">architecture/intake-form-fields.md</code>
            </p>
          </div>
        </div>
        <div className="px-8 py-3.5 border-t border-pm-hair flex justify-between items-center font-mono text-[10px] text-pm-ink-50 uppercase tracking-wider">
          <span>No PHI collected · No BAA needed</span>
          <span>Powered by Tally</span>
        </div>
      </div>
    </div>
  );
}
