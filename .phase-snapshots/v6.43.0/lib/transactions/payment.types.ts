export type PaymentId = string;

export type PaymentStatus =
  | "pending"
  | "authorized"
  | "processing"
  | "completed"
  | "failed"
  | "refunded"
  | "cancelled";

export type PaymentPurpose =
  | "deposit"
  | "installment"
  | "rent"
  | "purchase"
  | "fee"
  | "tax"
  | "commission"
  | "closing"
  | "other";

export interface PaymentRecord {
  id: PaymentId;
  transactionId: string;
  purpose: PaymentPurpose;
  amount: number;
  currency: string;
  status: PaymentStatus;
  providerReference?: string;
  scheduledAt?: string;
  processedAt?: string;
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, unknown>;
}