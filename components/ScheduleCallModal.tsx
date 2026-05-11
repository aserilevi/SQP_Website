"use client";

import { useEffect } from "react";
import { Eyebrow } from "./Eyebrow";

interface ScheduleCallModalProps {
  onClose: () => void;
}

// Stub modal. When Cal.com is provisioned, replace the body with:
// <Cal calLink="projectmedical/discovery" config={...} />
// using @calcom/embed-react
//
// Architecture: the booking flow collects no PHI. See architecture/call-booking-flow.md.

export function ScheduleCallModal({ onClose }: ScheduleCallModalProps) {
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
            <Eyebrow>Schedule a call</Eyebrow>
            <h2 className="font-display text-3xl mt-2 leading-tight text-pm-ink">
              15-minute triage call.
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
          <p className="text-pm-ink-70 text-sm mb-6 leading-relaxed">
            A 15-minute call with a Project Medical clinician. We will talk through the file
            at a high level: jurisdiction, settlement timeline, and what you are hoping to get
            out of the conversation. <strong className="text-pm-ink">We will not ask for claimant identifiers or any records on this call.</strong>
          </p>

          {/* TODO: Replace this stub with the Cal.com embed once provisioned.
              Reference: architecture/call-booking-flow.md
              Pre-call questions: name, firm, role, work email, direct phone,
              jurisdiction, rough settlement timeline, what they want from the call. */}
          <div className="border border-dashed border-pm-hair p-8 text-center">
            <Eyebrow>Embed placeholder</Eyebrow>
            <p className="mt-3 text-pm-ink-50 text-sm leading-relaxed">
              Cal.com booking widget will render here once the Cal link is provisioned.
              <br />
              Flow spec: <code className="text-pm-ink">architecture/call-booking-flow.md</code>
            </p>
          </div>
        </div>
        <div className="px-8 py-3.5 border-t border-pm-hair flex justify-between items-center font-mono text-[10px] text-pm-ink-50 uppercase tracking-wider">
          <span>No PHI collected · No BAA needed</span>
          <span>Powered by Cal.com</span>
        </div>
      </div>
    </div>
  );
}
