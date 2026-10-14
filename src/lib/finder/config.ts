import type { PreviewName } from "@/components/sections/ProjectPreview";

/*
 * Project finder settings — which projects each business type is shown, which
 * features each kind offers, and which are pre-ticked. The finder never shows
 * a price or a time estimate: it only collects the visitor's answers and sends
 * them to WhatsApp. Labels and descriptions live in translations.ts under `finder`.
 */

export const WHATSAPP_NUMBER = "201128779577";

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

/** Which kinds of product offer each feature. */
export const features: Record<FeatureId, { kinds: KindId[] }> = {
  store: { kinds: ["website", "both"] },
  payments: { kinds: ["website", "both"] },
  accounts: { kinds: ["website", "both"] },
  booking: { kinds: ["website", "both"] },
  dashboard: { kinds: ["website"] },
  inventory: { kinds: ["system", "both"] },
  pos: { kinds: ["system", "both"] },
  branches: { kinds: ["system", "both"] },
  reports: { kinds: ["system", "both"] },
  desktop: { kinds: ["system", "both"] },
  bilingual: { kinds: ["website", "system", "both"] },
  ai: { kinds: ["website", "system", "both"] },
};

export const deadlines: DeadlineId[] = ["asap", "month", "quarter", "flexible"];
