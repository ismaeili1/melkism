export const PROPERTY_PLATFORM_VERSION = "2.85.0";

export const PROPERTY_DEFAULT_PAGE = 1;
export const PROPERTY_DEFAULT_PAGE_SIZE = 24;
export const PROPERTY_MAX_PAGE_SIZE = 100;

export const PROPERTY_KINDS = [
  "residential",
  "commercial",
  "industrial",
  "land",
  "hospitality",
  "mixed_use",
  "institutional",
  "infrastructure",
  "special_use",
  "other",
] as const;

export const LISTING_PURPOSES = [
  "sale",
  "rent",
  "lease",
  "investment",
  "auction",
  "development",
  "exchange",
  "other",
] as const;