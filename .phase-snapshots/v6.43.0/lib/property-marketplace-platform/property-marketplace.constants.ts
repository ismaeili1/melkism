import type {
  MarketplaceLocale,
  PropertyCategory,
  PropertyListingType,
} from "./property-marketplace.types";

export const PROPERTY_MARKETPLACE_LOCALES: MarketplaceLocale[] = [
  "fa",
  "en",
  "ar",
  "tr",
];

export const PROPERTY_LISTING_TYPES: PropertyListingType[] = [
  "sale",
  "rent",
  "lease",
  "investment",
];

export const PROPERTY_CATEGORIES: PropertyCategory[] = [
  "apartment",
  "villa",
  "office",
  "retail",
  "land",
  "industrial",
  "mixed-use",
];

export const PROPERTY_MARKETPLACE_DEFAULT_LIMIT = 12;
export const PROPERTY_MARKETPLACE_MAX_LIMIT = 50;
