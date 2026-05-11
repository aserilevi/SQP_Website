import Link from "next/link";

interface LogoProps {
  variant?: "wordmark-mark" | "wordmark";
  light?: boolean;
  scale?: number;
}

export function Logo({ variant = "wordmark-mark", light = false, scale = 1 }: LogoProps) {
  const wordmark = (
    <span
      className="font-display whitespace-nowrap"
      style={{
        fontSize: 26 * scale,
        color: light ? "var(--color-pm-paper)" : "var(--color-pm-ink)",
        letterSpacing: "-0.02em",
        lineHeight: 1,
      }}
    >
      Project Medical
    </span>
  );

  if (variant === "wordmark") {
    return (
      <Link href="/" className="inline-block">
        {wordmark}
      </Link>
    );
  }

  // wordmark-mark
  return (
    <Link href="/" className="inline-flex items-center gap-2.5">
      <svg
        width={22 * scale}
        height={22 * scale}
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <path d="M3 11 L11 3 L19 11 L11 19 Z" stroke="var(--color-pm-teal)" strokeWidth="1.6" />
        <path
          d="M11 7 L11 15 M7 11 L15 11"
          stroke="var(--color-pm-teal)"
          strokeWidth="1.6"
          strokeLinecap="square"
        />
      </svg>
      {wordmark}
    </Link>
  );
}
