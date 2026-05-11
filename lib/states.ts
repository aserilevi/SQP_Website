import fs from "node:fs";
import path from "node:path";
import Papa from "papaparse";

export interface StateRow {
  state: string;
  abbr: string;
  slug: string;
  fee_schedule_short: string;
  fee_schedule_full: string;
  fee_schedule_agency: string;
  fee_schedule_url: string;
  pharmacy_basis: string;
  settlement_approval_agency_short: string;
  settlement_approval_agency_full: string;
  settlement_approval_quirk: string;
  cms_regional_office: string;
  quirk_1: string;
  quirk_2: string;
  quirk_3: string;
  metro_1: string;
  metro_2: string;
  metro_3: string;
  metro_4: string;
  metro_5: string;
  caselaw_citation: string;
  handwrite_recommended: "Y" | "N";
  verify_status: string;
  sources: string;
}

const HANDWRITTEN_SLUGS = new Set([
  "california",
  "new-york",
  "florida",
  "texas",
  "ohio",
  "washington",
  "north-dakota",
  "wyoming",
]);

let cache: StateRow[] | null = null;

export function getAllStates(): StateRow[] {
  if (cache) return cache;

  const csvPath = path.join(process.cwd(), "content", "states.csv");
  const csv = fs.readFileSync(csvPath, "utf8");
  const parsed = Papa.parse<StateRow>(csv, {
    header: true,
    skipEmptyLines: true,
  });

  cache = parsed.data.filter((r) => r.state && r.slug);
  return cache;
}

export function getStateBySlug(slug: string): StateRow | undefined {
  return getAllStates().find((r) => r.slug === slug);
}

export function isHandwritten(slug: string): boolean {
  return HANDWRITTEN_SLUGS.has(slug);
}

export function allSlugs(): string[] {
  return getAllStates().map((r) => r.slug);
}

export function metros(row: StateRow): string[] {
  return [row.metro_1, row.metro_2, row.metro_3, row.metro_4, row.metro_5].filter(Boolean);
}

export function quirks(row: StateRow): string[] {
  return [row.quirk_1, row.quirk_2, row.quirk_3].filter(Boolean);
}
