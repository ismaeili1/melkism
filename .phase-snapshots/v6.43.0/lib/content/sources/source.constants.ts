/**
 * MELKISM Source Types
 *
 * v0.2.2.2
 *
 * Defines the broad origin category of a source.
 * Independent from MELKIST.
 */

export const SOURCE_TYPES = [
  "official",
  "government",
  "academic",
  "research-institute",
  "international-organization",
  "industry",
  "media",
  "professional",
  "other",
] as const;

export type SourceType = (typeof SOURCE_TYPES)[number];

export const SOURCE_AUTHORITY_LEVELS = [
  "primary",
  "authoritative",
  "recognized",
  "secondary",
  "community",
  "unknown",
] as const;

export type SourceAuthorityLevel =
  (typeof SOURCE_AUTHORITY_LEVELS)[number];

export const SOURCE_VERIFICATION_STATUSES = [
  "unverified",
  "pending",
  "verified",
  "rejected",
  "suspended",
] as const;

export type SourceVerificationStatus =
  (typeof SOURCE_VERIFICATION_STATUSES)[number];

export const SOURCE_ACCESS_METHODS = [
  "rss",
  "atom",
  "api",
  "web",
  "feed",
  "manual",
] as const;

export type SourceAccessMethod =
  (typeof SOURCE_ACCESS_METHODS)[number];