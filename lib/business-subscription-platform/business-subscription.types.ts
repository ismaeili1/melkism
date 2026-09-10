export type BusinessAccountType =
  | "individual"
  | "professional"
  | "agency"
  | "developer"
  | "enterprise";

export type BusinessVerification =
  | "unverified"
  | "pending"
  | "verified"
  | "trusted";

export type SubscriptionTier =
  | "free"
  | "professional"
  | "business"
  | "enterprise";

export type SubscriptionStatus =
  | "inactive"
  | "trialing"
  | "active"
  | "past_due"
  | "cancelled"
  | "expired";

export type SubscriptionInterval =
  | "monthly"
  | "yearly";

export type BusinessLocale =
  | "fa"
  | "en"
  | "ar"
  | "tr";

export type BusinessFeature =
  | "property-marketplace"
  | "market-intelligence"
  | "architecture-intelligence"
  | "ai-search"
  | "ai-recommendations"
  | "professional-directory"
  | "analytics"
  | "team-management";

export type BusinessAccount = {
  id: string;
  name: string;
  slug: string;
  accountType: BusinessAccountType;
  verification: BusinessVerification;
  locale: BusinessLocale;
  createdAt: string;
};

export type SubscriptionPlan = {
  id: string;
  tier: SubscriptionTier;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  currency: string;
  features: BusinessFeature[];
};

export type Subscription = {
  id: string;
  businessId: string;
  planId: string;
  status: SubscriptionStatus;
  interval: SubscriptionInterval;
  startedAt: string;
  expiresAt?: string;
};

export type BusinessSubscriptionQuery = {
  locale?: BusinessLocale;
  accountType?: BusinessAccountType;
};

export type BusinessSubscriptionResponse = {
  ok: true;
  source: "business-subscription-foundation";
  accounts: BusinessAccount[];
  plans: SubscriptionPlan[];
  subscriptions: Subscription[];
};
