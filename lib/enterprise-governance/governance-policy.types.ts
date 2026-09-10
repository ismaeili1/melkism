export type GovernancePolicyType =
  | "access"
  | "data"
  | "privacy"
  | "security"
  | "risk"
  | "compliance"
  | "retention"
  | "operations"
  | "quality"
  | "financial"
  | "vendor"
  | "other";

export type GovernancePolicyStatus =
  | "draft"
  | "review"
  | "approved"
  | "active"
  | "suspended"
  | "retired";

export interface GovernancePolicy {
  id: string;
  organizationId?: string;
  tenantId?: string;
  name: string;
  type: GovernancePolicyType;
  status: GovernancePolicyStatus;
  version: number;
  description?: string;
  priority: number;
  effectiveAt?: string;
  expiresAt?: string;
  ownerIdentityId?: string;
  controls?: string[];
  createdAt: string;
  updatedAt: string;
}