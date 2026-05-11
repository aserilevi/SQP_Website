"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { PillBtn } from "./PillBtn";
import { useModal } from "./ModalContext";

const NAV = [
  { href: "/msa", label: "MSA service" },
  { href: "/wcmsa", label: "Jurisdictions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const { open } = useModal();

  return (
    <header className="sticky top-0 z-40 bg-pm-paper border-b border-pm-hair">
      {/* Utility bar */}
      <div className="border-b border-pm-hair">
        <div className="mx-auto max-w-[1280px] px-10 lg:px-20 h-8 flex items-center justify-end gap-6 text-xs text-pm-ink-50">
          <Link href="/contact" className="hover:text-pm-ink">
            Help with my case <span className="text-pm-teal">›</span>
          </Link>
          <span className="text-pm-hair">|</span>
          <button
            onClick={() => open("schedule")}
            className="hover:text-pm-ink cursor-pointer"
          >
            Schedule a call
          </button>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto max-w-[1280px] px-10 lg:px-20 h-20 flex items-center gap-10">
        <Logo variant="wordmark-mark" />
        <nav className="hidden md:flex gap-7 ml-8 text-[15px] text-pm-ink font-medium">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-pm-teal transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto">
          <PillBtn onClick={() => open("submit")}>Submit a case</PillBtn>
        </div>
      </div>
    </header>
  );
}
