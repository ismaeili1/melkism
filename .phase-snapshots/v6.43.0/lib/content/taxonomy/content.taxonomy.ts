/**
 * MELKISM Taxonomy
 *
 * v0.2.2.1
 *
 * Taxonomy is deliberately platform-native and independent
 * from MELKIST.
 */

export const TAXONOMY_DIMENSIONS = [
  "contentType",
  "topic",
  "country",
  "city",
  "market",
  "assetType",
  "audience",
  "language",
  "sourceType",
] as const;

export type TaxonomyDimension =
  (typeof TAXONOMY_DIMENSIONS)[number];

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

export const ASSET_TYPES = [
  "residential",
  "commercial",
  "office",
  "retail",
  "industrial",
  "logistics",
  "hospitality",
  "mixed-use",
  "land",
  "infrastructure",
] as const;

export type AssetType = (typeof ASSET_TYPES)[number];

export type ContentTaxonomy = {
  contentType: string;
  topic?: string;
  country?: string;
  city?: string;
  market?: string;
  assetType?: AssetType;
  audience?: string;
  language?: string;
  sourceType?: SourceType;
};