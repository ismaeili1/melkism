import type {
  BusinessFeature,
  BusinessLocale,
  SubscriptionTier,
} from "./business-subscription.types";

export const BUSINESS_LOCALES: BusinessLocale[] = [
  "fa",
  "en",
  "ar",
  "tr",
];

export const SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  "free",
  "professional",
  "business",
  "enterprise",
];

export const BUSINESS_FEATURES: BusinessFeature[] = [
  "property-marketplace",
  "market-intelligence",
  "architecture-intelligence",
  "ai-search",
  "ai-recommendations",
  "professional-directory",
  "analytics",
  "team-management",
];

export const DEFAULT_SUBSCRIPTION_CURRENCY = "USD";
