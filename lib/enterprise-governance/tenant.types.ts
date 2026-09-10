export type TenantId = string;

export type TenantStatus =
  | "provisioning"
  | "active"
  | "suspended"
  | "inactive"
  | "archived";

export interface TenantRecord {
  id: TenantId;
  organizationId: string;
  name: string;
  slug: string;
  status: TenantStatus;
  region?: string;
  dataResidency?: string;
  plan?: string;
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, unknown>;
}