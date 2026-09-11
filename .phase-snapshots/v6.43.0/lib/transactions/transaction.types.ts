export type TransactionId = string;

export type TransactionPurpose =
  | "sale"
  | "rent"
  | "lease"
  | "purchase"
  | "investment"
  | "development"
  | "auction"
  | "exchange"
  | "other";

export type TransactionStatus =
  | "draft"
  | "initiated"
  | "offer"
  | "negotiation"
  | "agreed"
  | "contracted"
  | "payment_pending"
  | "closing"
  | "completed"
  | "cancelled"
  | "expired"
  | "disputed"
  | "on_hold";

export type TransactionPriority =
  | "low"
  | "normal"
  | "high"
  | "critical";

export interface TransactionRecord {
  id: TransactionId;
  propertyId: string;
  listingId?: string;
  purpose: TransactionPurpose;
  status: TransactionStatus;
  priority: TransactionPriority;
  currency: string;
  amount?: number;
  jurisdiction?: string;
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, unknown>;
}