export type OfferId = string;

export type OfferStatus =
  | "draft"
  | "submitted"
  | "countered"
  | "accepted"
  | "rejected"
  | "withdrawn"
  | "expired";

export interface OfferRecord {
  id: OfferId;
  transactionId: string;
  createdByPartyId: string;
  amount: number;
  currency: string;
  status: OfferStatus;
  expiresAt?: string;
  conditions?: string[];
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, unknown>;
}