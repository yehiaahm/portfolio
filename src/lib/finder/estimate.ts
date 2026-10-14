import {
  businesses,
  deadlines,
  features,
  kinds,
  type Budget,
  type BusinessId,
  type DeadlineId,
  type FeatureId,
  type KindId,
  type Range,
} from "./config";

export const FEATURE_ORDER = Object.keys(features) as FeatureId[];

export function featuresFor(kind: KindId): FeatureId[] {
  return FEATURE_ORDER.filter((id) => features[id].kinds.includes(kind));
}

/** The business's pre-ticked features that this kind actually offers. */
export function defaultFeatures(business: BusinessId, kind: KindId): FeatureId[] {
  const available = featuresFor(kind);
  return businesses[business].features.filter((id) => available.includes(id));
}

export function estimate(kind: KindId, selected: FeatureId[]): { price: Range; weeks: Range } {
  const base = kinds[kind];
  let [lo, hi] = base.price;
  let extraWeeks = 0;
  for (const id of selected) {
    lo += features[id].price[0];
    hi += features[id].price[1];
    extraWeeks += features[id].weeks;
  }
  return {
    price: [lo, hi],
    weeks: [Math.ceil(base.weeks[0] + extraWeeks), Math.ceil(base.weeks[1] + extraWeeks)],
  };
}

export type BudgetFit =
  | { status: "unsure" | "fits" | "close" | "below" }
  | { status: "phased"; now: FeatureId[]; later: FeatureId[]; price: Range };

export function budgetFit(kind: KindId, selected: FeatureId[], budget: Budget): BudgetFit {
  if (budget === "unsure") return { status: "unsure" };

  const max = budget;
  const { price } = estimate(kind, selected);
  if (max >= price[1]) return { status: "fits" };
  if (max >= price[0]) return { status: "close" };
  if (kinds[kind].price[0] > max) return { status: "below" };

  // Fit as many features as the budget allows into a first phase; the rest wait for phase two.
  const now: FeatureId[] = [];
  const later: FeatureId[] = [];
  let lo = kinds[kind].price[0];
  for (const id of selected) {
    if (lo + features[id].price[0] <= max) {
      now.push(id);
      lo += features[id].price[0];
    } else {
      later.push(id);
    }
  }
  return { status: "phased", now, later, price: estimate(kind, now).price };
}

export type DeadlineFit =
  | { status: "flexible" | "fits" | "tight" }
  | { status: "phased"; weeks: number };

export function deadlineFit(kind: KindId, selected: FeatureId[], deadline: DeadlineId): DeadlineFit {
  const target = deadlines[deadline];
  if (target === null) return { status: "flexible" };

  const { weeks } = estimate(kind, selected);
  if (target >= weeks[1]) return { status: "fits" };
  if (target >= weeks[0]) return { status: "tight" };
  return { status: "phased", weeks: kinds[kind].weeks[0] };
}
