export type AgreementId = string;

export type AgreementStatus =
  | "draft"
  | "review"
  | "accepted"
  | "signed"
  | "active"
  | "terminated"
  | "expired"
  | "cancelled";

export interface AgreementRecord {
  id: AgreementId;
  transactionId: string;
  title: string;
  status: AgreementStatus;
  version: number;
  effectiveAt?: string;
  expiresAt?: string;
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, unknown>;
}