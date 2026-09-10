import type {
  BusinessAccount,
  BusinessAccountType,
  BusinessSubscriptionQuery,
  BusinessSubscriptionResponse,
  Subscription,
  SubscriptionPlan,
} from "./business-subscription.types";

const ACCOUNTS: BusinessAccount[] = [
  {
    id: "business-1001",
    name: "MELKISM Professional Studio",
    slug: "melkism-professional-studio",
    accountType: "professional",
    verification: "verified",
    locale: "en",
    createdAt: "2026-08-20T09:00:00.000Z",
  },
  {
    id: "business-1002",
    name: "MELKISM Architecture Group",
    slug: "melkism-architecture-group",
    accountType: "agency",
    verification: "trusted",
    locale: "fa",
    createdAt: "2026-08-18T10:00:00.000Z",
  },
  {
    id: "business-1003",
    name: "MELKISM Urban Development",
    slug: "melkism-urban-development",
    accountType: "developer",
    verification: "verified",
    locale: "tr",
    createdAt: "2026-08-16T11:00:00.000Z",
  },
  {
    id: "business-1004",
    name: "MELKISM Research Network",
    slug: "melkism-research-network",
    accountType: "enterprise",
    verification: "trusted",
    locale: "ar",
    createdAt: "2026-08-14T12:00:00.000Z",
  },
];

const PLANS: SubscriptionPlan[] = [
  {
    id: "plan-free",
    tier: "free",
    name: "Free",
    description: "Core public MELKISM experience.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    currency: "USD",
    features: [
      "property-marketplace",
      "ai-search",
    ],
  },
  {
    id: "plan-professional",
    tier: "professional",
    name: "Professional",
    description: "Professional tools for individual practitioners.",
    monthlyPrice: 19,
    yearlyPrice: 190,
    currency: "USD",
    features: [
      "property-marketplace",
      "market-intelligence",
      "architecture-intelligence",
      "ai-search",
      "ai-recommendations",
      "professional-directory",
    ],
  },
  {
    id: "plan-business",
    tier: "business",
    name: "Business",
    description: "Business workspace for teams and agencies.",
    monthlyPrice: 79,
    yearlyPrice: 790,
    currency: "USD",
    features: [
      "property-marketplace",
      "market-intelligence",
      "architecture-intelligence",
      "ai-search",
      "ai-recommendations",
      "professional-directory",
      "analytics",
      "team-management",
    ],
  },
  {
    id: "plan-enterprise",
    tier: "enterprise",
    name: "Enterprise",
    description: "Scalable intelligence platform for organizations.",
    monthlyPrice: 249,
    yearlyPrice: 2490,
    currency: "USD",
    features: [
      "property-marketplace",
      "market-intelligence",
      "architecture-intelligence",
      "ai-search",
      "ai-recommendations",
      "professional-directory",
      "analytics",
      "team-management",
    ],
  },
];

const SUBSCRIPTIONS: Subscription[] = [
  {
    id: "subscription-1001",
    businessId: "business-1001",
    planId: "plan-professional",
    status: "active",
    interval: "monthly",
    startedAt: "2026-08-21T09:00:00.000Z",
  },
  {
    id: "subscription-1002",
    businessId: "business-1002",
    planId: "plan-business",
    status: "active",
    interval: "yearly",
    startedAt: "2026-08-19T09:00:00.000Z",
  },
  {
    id: "subscription-1003",
    businessId: "business-1003",
    planId: "plan-business",
    status: "trialing",
    interval: "monthly",
    startedAt: "2026-08-17T09:00:00.000Z",
  },
  {
    id: "subscription-1004",
    businessId: "business-1004",
    planId: "plan-enterprise",
    status: "active",
    interval: "yearly",
    startedAt: "2026-08-15T09:00:00.000Z",
  },
];

export function getBusinessSubscriptionData(
  query: BusinessSubscriptionQuery = {},
): BusinessSubscriptionResponse {
  const accounts = ACCOUNTS.filter((account) => {
    if (
      query.accountType &&
      account.accountType !== query.accountType
    ) {
      return false;
    }

    if (
      query.locale &&
      account.locale !== query.locale
    ) {
      return false;
    }

    return true;
  });

  const accountIds = new Set(
    accounts.map((account) => account.id),
  );

  const subscriptions = SUBSCRIPTIONS.filter(
    (subscription) =>
      accountIds.has(subscription.businessId),
  );

  return {
    ok: true,
    source: "business-subscription-foundation",
    accounts,
    plans: PLANS,
    subscriptions,
  };
}

export function getSubscriptionPlans(): SubscriptionPlan[] {
  return [...PLANS];
}

export function getBusinessAccounts(): BusinessAccount[] {
  return [...ACCOUNTS];
}

export function getSubscriptions(): Subscription[] {
  return [...SUBSCRIPTIONS];
}

export function getBusinessAccountTypes(): BusinessAccountType[] {
  return [
    "individual",
    "professional",
    "agency",
    "developer",
    "enterprise",
  ];
}
