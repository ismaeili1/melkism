export type PropertyListingType =
  | "sale"
  | "rent"
  | "lease"
  | "investment";

export type PropertyCategory =
  | "apartment"
  | "villa"
  | "office"
  | "retail"
  | "land"
  | "industrial"
  | "mixed-use";

export type PropertyCondition =
  | "new"
  | "excellent"
  | "good"
  | "needs-renovation";

export type PropertyAvailability =
  | "available"
  | "reserved"
  | "sold"
  | "leased";

export type PropertyVerification =
  | "unverified"
  | "pending"
  | "verified"
  | "trusted";

export type MarketplaceLocale =
  | "fa"
  | "en"
  | "ar"
  | "tr";

export type PropertyLocation = {
  country: string;
  city: string;
  district: string;
};

export type PropertyListing = {
  id: string;
  title: string;
  description: string;
  listingType: PropertyListingType;
  category: PropertyCategory;
  condition: PropertyCondition;
  availability: PropertyAvailability;
  verification: PropertyVerification;
  location: PropertyLocation;
  areaM2: number;
  bedrooms?: number;
  bathrooms?: number;
  price: number;
  currency: string;
  publishedAt: string;
  featured: boolean;
};

export type PropertyMarketplaceQuery = {
  query?: string;
  locale?: MarketplaceLocale;
  listingType?: PropertyListingType;
  category?: PropertyCategory;
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  minAreaM2?: number;
  maxAreaM2?: number;
  verifiedOnly?: boolean;
  featuredOnly?: boolean;
  limit?: number;
};

export type PropertyMarketplaceResponse = {
  ok: true;
  source: "property-marketplace-foundation";
  query: PropertyMarketplaceQuery;
  total: number;
  listings: PropertyListing[];
};
