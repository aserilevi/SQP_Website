import Link from "next/link";
import { Logo } from "./Logo";
import { Eyebrow } from "./Eyebrow";

const SECTIONS: Array<{ title: string; items: { label: string; href: string }[] }> = [
  {
    title: "Service",
    items: [
      { label: "MSA service", href: "/msa" },
      { label: "Jurisdictions", href: "/wcmsa" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Methodology", href: "/msa" },
      { label: "WCMSA Reference Guide (CMS)", href: "https://www.cms.gov/medicare/coordination-benefits-recovery/workers-compensation-medicare-set-aside-arrangements/wcmsa-reference-guide" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-pm-navy text-pm-paper px-10 lg:px-20 pt-16 pb-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-pm-hair-dark">
          <div>
            <Logo variant="wordmark-mark" light />
            <p className="mt-4 max-w-xs text-sm text-[#bdc4d6] leading-relaxed">
              Clinician-authored Workers&apos; Comp Medicare Set-Asides. One product, seven business days.
            </p>
          </div>
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <Eyebrow light>{s.title}</Eyebrow>
              <ul className="mt-4 flex flex-col gap-2.5">
                {s.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="text-sm text-pm-paper opacity-85 hover:opacity-100"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs text-[#bdc4d6]">
          <span>© {new Date().getFullYear()} Project Medical LLC. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/legal" className="hover:text-pm-paper">
              Legal
            </Link>
            <Link href="/privacy" className="hover:text-pm-paper">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
