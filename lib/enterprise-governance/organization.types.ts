export type OrganizationId = string;

export type OrganizationType =
  | "company"
  | "brokerage"
  | "developer"
  | "architecture_firm"
  | "construction_company"
  | "consultancy"
  | "investment_fund"
  | "public_entity"
  | "nonprofit"
  | "research"
  | "partner"
  | "other";

export type OrganizationStatus =
  | "pending"
  | "active"
  | "suspended"
  | "inactive"
  | "archived";

export interface OrganizationRecord {
  id: OrganizationId;
  name: string;
  slug: string;
  type: OrganizationType;
  status: OrganizationStatus;
  legalName?: string;
  countryCode?: string;
  ownerIdentityId?: string;
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, unknown>;
}