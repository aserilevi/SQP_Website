"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface PillBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  light?: boolean;
  children?: ReactNode;
}

export function PillBtn({
  children = "Submit a case",
  primary = true,
  light = false,
  className,
  ...rest
}: PillBtnProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-sans text-[15px] font-medium tracking-tight transition-colors cursor-pointer",
        primary
          ? "bg-pm-teal text-pm-paper hover:opacity-90 border-0"
          : light
          ? "bg-transparent text-pm-paper border-[1.5px] border-pm-paper hover:bg-pm-paper hover:text-pm-ink"
          : "bg-transparent text-pm-ink border-[1.5px] border-pm-ink hover:bg-pm-ink hover:text-pm-paper",
        className,
      )}
    >
      {children}
      <span className="text-base -mt-px">→</span>
    </button>
  );
}
