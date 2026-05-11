import { ReactNode } from "react";
import clsx from "clsx";

interface EyebrowProps {
  children: ReactNode;
  light?: boolean;
  className?: string;
}

export function Eyebrow({ children, light, className }: EyebrowProps) {
  return (
    <div
      className={clsx(
        "font-mono text-[11px] uppercase font-medium leading-none",
        light ? "text-[#9fc7c5]" : "text-pm-teal",
        className,
      )}
      style={{ letterSpacing: "0.14em" }}
    >
      {children}
    </div>
  );
}
