export type PropertyPartyRole =
  | "owner"
  | "agent"
  | "broker"
  | "developer"
  | "manager"
  | "tenant"
  | "buyer"
  | "seller"
  | "representative"
  | "other";

export interface PropertyPartyReference {
  id: string;
  role: PropertyPartyRole;
  displayName?: string;
  organizationId?: string;
  metadata?: Record<string, unknown>;
}