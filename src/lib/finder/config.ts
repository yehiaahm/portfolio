import type { PreviewName } from "@/components/sections/ProjectPreview";

/*
 * Project finder settings — the one file to edit for prices, timelines and
 * which projects each business type is shown. All prices are in EGP.
 * Labels and descriptions live in translations.ts under `finder`.
 *
 * NOTE: the prices below are starting placeholders — replace them with your own.
 */

export const WHATSAPP_NUMBER = "201128779577";

export type Range = [number, number];

export type BusinessId = "pharmacy" | "fashion" | "retail" | "fitness" | "startup" | "other";
export type KindId = "website" | "system" | "both";
export type FeatureId =
  | "store"
  | "payments"
  | "accounts"
  | "booking"
  | "dashboard"
  | "bilingual"
  | "inventory"
  | "pos"
  | "branches"
  | "reports"
  | "desktop"
  | "ai";
/** What the client typed in EGP, or "unsure" if they skipped the question. */
export type Budget = number | "unsure";
export type DeadlineId = "asap" | "month" | "quarter" | "flexible";

/** What each business type sees: matching projects, the recommended kind, and pre-ticked features. */
export const businesses: Record<
  BusinessId,
  { projects: PreviewName[]; kind: KindId; features: FeatureId[] }
> = {
  pharmacy: {
    projects: ["Pharmacy E-commerce & ERP", "AnimaSys"],
    kind: "both",
    features: ["store", "inventory", "pos"],
  },
  fashion: {
    projects: ["MERRIER", "VOID"],
    kind: "website",
    features: ["store", "payments", "dashboard"],
  },
  retail: {
    projects: ["AnimaSys", "Pharmacy E-commerce & ERP"],
    kind: "system",
    features: ["inventory", "pos", "reports"],
  },
  fitness: {
    projects: ["AI Fitness & Nutrition Coaching Platform"],
    kind: "website",
    features: ["accounts", "payments"],
  },
  startup: {
    projects: ["PetMate", "AI Fitness & Nutrition Coaching Platform"],
    kind: "website",
    features: ["accounts", "dashboard"],
  },
  other: {
    projects: ["Pharmacy E-commerce & ERP", "MERRIER"],
    kind: "website",
    features: [],
  },
};

/** Base price and timeline (in weeks) for each kind, before any features. */
export const kinds: Record<KindId, { price: Range; weeks: Range }> = {
  website: { price: [10_000, 18_000], weeks: [2, 3] },
  system: { price: [25_000, 40_000], weeks: [4, 6] },
  both: { price: [32_000, 50_000], weeks: [5, 8] },
};

/** Add-on features: which kinds offer them, their price range, and the weeks they add. */
export const features: Record<FeatureId, { kinds: KindId[]; price: Range; weeks: number }> = {
  store: { kinds: ["website", "both"], price: [15_000, 25_000], weeks: 2 },
  payments: { kinds: ["website", "both"], price: [4_000, 7_000], weeks: 0.5 },
  accounts: { kinds: ["website", "both"], price: [5_000, 8_000], weeks: 1 },
  booking: { kinds: ["website", "both"], price: [6_000, 10_000], weeks: 1 },
  dashboard: { kinds: ["website"], price: [8_000, 12_000], weeks: 1 },
  inventory: { kinds: ["system", "both"], price: [8_000, 12_000], weeks: 1 },
  pos: { kinds: ["system", "both"], price: [8_000, 12_000], weeks: 1 },
  branches: { kinds: ["system", "both"], price: [8_000, 15_000], weeks: 1.5 },
  reports: { kinds: ["system", "both"], price: [5_000, 8_000], weeks: 1 },
  desktop: { kinds: ["system", "both"], price: [8_000, 15_000], weeks: 1.5 },
  bilingual: { kinds: ["website", "system", "both"], price: [3_000, 5_000], weeks: 0.5 },
  ai: { kinds: ["website", "system", "both"], price: [10_000, 20_000], weeks: 2 },
};

/** Quick-pick amounts shown under the budget input (EGP). */
export const budgetSuggestions = [15_000, 30_000, 60_000, 100_000];

/** How many weeks each deadline option means. `null` = flexible. */
export const deadlines: Record<DeadlineId, number | null> = {
  asap: 2,
  month: 4,
  quarter: 12,
  flexible: null,
};
