"use client";

import { ReactNode, MouseEventHandler } from "react";
import clsx from "clsx";
import Link from "next/link";

interface ArrowLnkProps {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler;
  light?: boolean;
  accent?: boolean;
  className?: string;
}

export function ArrowLnk({ children, href, onClick, light, accent, className }: ArrowLnkProps) {
  const classes = clsx(
    "inline-flex items-center gap-2 font-sans text-[15px] font-medium cursor-pointer no-underline",
    accent ? "text-pm-teal" : light ? "text-pm-paper" : "text-pm-ink",
    className,
  );

  const inner = (
    <>
      {children} <span className="text-pm-teal font-normal">→</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} type="button">
      {inner}
    </button>
  );
}
