import type { Dictionary } from "@/lib/i18n/translations";
import type { Budget, Range } from "./config";

export const formatNumber = (n: number) => n.toLocaleString("en-US");

export const formatPrice = ([lo, hi]: Range, currency?: string) =>
  `${formatNumber(lo)} – ${formatNumber(hi)}${currency ? ` ${currency}` : ""}`;

export function formatBudget(budget: Budget, copy: Dictionary["finder"]["budget"]) {
  if (budget === "unsure") return copy.unsure;
  return `${formatNumber(budget)} ${copy.currency}`;
}
