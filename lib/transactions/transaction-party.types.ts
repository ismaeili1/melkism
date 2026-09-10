export type TransactionPartyRole =
  | "buyer"
  | "seller"
  | "tenant"
  | "landlord"
  | "lessor"
  | "lessee"
  | "agent"
  | "broker"
  | "developer"
  | "owner"
  | "representative"
  | "legal_advisor"
  | "financier"
  | "other";

export interface TransactionParty {
  id: string;
  role: TransactionPartyRole;
  displayName?: string;
  organizationId?: string;
  verified?: boolean;
  metadata?: Record<string, unknown>;
}