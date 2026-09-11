export type GovernanceResponsibility =
  | "security"
  | "privacy"
  | "data"
  | "risk"
  | "compliance"
  | "finance"
  | "operations"
  | "quality"
  | "architecture"
  | "construction"
  | "property"
  | "transactions"
  | "technology";

export interface ResponsibilityAssignment {
  id: string;
  identityId?: string;
  organizationId?: string;
  tenantId?: string;
  responsibility: GovernanceResponsibility;
  scope?: string;
  active: boolean;
  assignedAt: string;
  expiresAt?: string;
}