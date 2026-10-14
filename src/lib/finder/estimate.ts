import { businesses, features, type BusinessId, type FeatureId, type KindId } from "./config";

export const FEATURE_ORDER = Object.keys(features) as FeatureId[];

export function featuresFor(kind: KindId): FeatureId[] {
  return FEATURE_ORDER.filter((id) => features[id].kinds.includes(kind));
}

/** The business's pre-ticked features that this kind actually offers. */
export function defaultFeatures(business: BusinessId, kind: KindId): FeatureId[] {
  const available = featuresFor(kind);
  return businesses[business].features.filter((id) => available.includes(id));
}
