export const TRANSACTION_CORE_VERSION = "2.86.0";

export const TRANSACTION_DEFAULT_CURRENCY = "USD";

export const TRANSACTION_STATUSES = [
  "draft",
  "initiated",
  "offer",
  "negotiation",
  "agreed",
  "contracted",
  "payment_pending",
  "closing",
  "completed",
  "cancelled",
  "expired",
  "disputed",
  "on_hold",
] as const;

export const OFFER_STATUSES = [
  "draft",
  "submitted",
  "countered",
  "accepted",
  "rejected",
  "withdrawn",
  "expired",
] as const;