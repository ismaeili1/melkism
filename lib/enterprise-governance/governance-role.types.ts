export type GovernanceRole =
  | "owner"
  | "executive"
  | "governance_admin"
  | "compliance_officer"
  | "security_officer"
  | "data_steward"
  | "risk_manager"
  | "auditor"
  | "operator"
  | "analyst"
  | "manager"
  | "member"
  | "viewer"
  | "service";

export interface GovernanceRoleAssignment {
  id: string;
  identityId: string;
  organizationId?: string;
  tenantId?: string;
  role: GovernanceRole;
  scope?: string;
  grantedAt: string;
  expiresAt?: string;
  grantedBy?: string;
}