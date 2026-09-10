export type ListingId = string;

export type ListingPurpose =
  | "sale"
  | "rent"
  | "lease"
  | "investment"
  | "auction"
  | "development"
  | "exchange"
  | "other";

export type ListingStatus =
  | "draft"
  | "published"
  | "paused"
  | "expired"
  | "closed"
  | "archived";

export interface PropertyListing {
  id: ListingId;
  propertyId: string;
  purpose: ListingPurpose;
  status: ListingStatus;
  title: string;
  description?: string;
  price?: number;
  currency?: string;
  publishedAt?: string;
  expiresAt?: string;
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, unknown>;
}