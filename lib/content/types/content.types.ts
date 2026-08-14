/**
 * MELKISM Content Types
 *
 * v0.2.2.1
 *
 * These are platform-level content domains.
 * They are intentionally independent from MELKIST.
 */

export const CONTENT_TYPES = [
  "news",
  "articles",
  "research",
  "reports",
  "markets",
  "trends",
  "data",
  "cities",
  "countries",
] as const;

export type ContentType = (typeof CONTENT_TYPES)[number];

export function isContentType(
  value: string,
): value is ContentType {
  return (CONTENT_TYPES as readonly string[]).includes(value);
}