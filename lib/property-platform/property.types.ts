export type PropertyId = string;

export type PropertyKind =
  | "residential"
  | "commercial"
  | "industrial"
  | "land"
  | "hospitality"
  | "mixed_use"
  | "institutional"
  | "infrastructure"
  | "special_use"
  | "other";

export type PropertyStatus =
  | "draft"
  | "active"
  | "inactive"
  | "archived"
  | "under_review"
  | "verified"
  | "rejected";

export interface PropertyIdentity {
  id: PropertyId;
  externalId?: string;
  sourceId?: string;
  kind: PropertyKind;
  status: PropertyStatus;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyRecord extends PropertyIdentity {
  classification: PropertyClassification;
  location: PropertyLocation;
  attributes: PropertyAttributes;
  pricing?: PropertyPricing;
  availability?: PropertyAvailability;
  media: PropertyMediaReference[];
  metadata?: Record<string, unknown>;
}

export interface PropertyClassification {
  propertyType: string;
  subtype?: string;
  category?: string;
  usage?: string;
  tenureType?: string;
}

export interface PropertyLocation {
  countryCode: string;
  countryName?: string;
  regionCode?: string;
  regionName?: string;
  cityCode?: string;
  cityName?: string;
  districtCode?: string;
  districtName?: string;
  postalCode?: string;
  addressLine?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
}

export interface PropertyAttributes {
  buildingArea?: number;
  landArea?: number;
  bedrooms?: number;
  bathrooms?: number;
  floors?: number;
  yearBuilt?: number;
  parkingSpaces?: number;
  units?: number;
  condition?: string;
  furnishing?: string;
  energyRating?: string;
  features?: string[];
}

export interface PropertyPricing {
  currency: string;
  salePrice?: number;
  rentPrice?: number;
  rentPeriod?: "daily" | "weekly" | "monthly" | "yearly";
  pricePerArea?: number;
  isNegotiable?: boolean;
}

export interface PropertyAvailability {
  available: boolean;
  availableFrom?: string;
  availableTo?: string;
  status?: "available" | "reserved" | "occupied" | "unavailable";
}

export interface PropertyMediaReference {
  id: string;
  type: "image" | "video" | "document" | "panorama" | "virtual_tour" | "other";
  url: string;
  title?: string;
  alt?: string;
  sortOrder?: number;
}