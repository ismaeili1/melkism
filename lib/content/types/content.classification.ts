/**
 * MELKISM Content Classification
 *
 * v0.2.2.1
 */

export const CONTENT_LAYERS = [
  "editorial",
  "research",
  "intelligence",
  "data",
] as const;

export type ContentLayer = (typeof CONTENT_LAYERS)[number];

export const CONTENT_STATUSES = [
  "draft",
  "review",
  "verified",
  "scheduled",
  "published",
  "archived",
] as const;

export type ContentStatus = (typeof CONTENT_STATUSES)[number];

export const AUDIENCE_TYPES = [
  "public",
  "consumer",
  "professional",
  "investor",
  "developer",
  "architect",
  "researcher",
  "academic",
  "policymaker",
  "industry",
] as const;

export type AudienceType = (typeof AUDIENCE_TYPES)[number];