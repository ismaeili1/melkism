export type GovernanceDecisionType =
  | "policy"
  | "risk"
  | "compliance"
  | "data_access"
  | "vendor"
  | "operational"
  | "financial"
  | "security"
  | "privacy"
  | "other";

export type GovernanceDecisionStatus =
  | "proposed"
  | "approved"
  | "rejected"
  | "deferred"
  | "expired";

export interface GovernanceDecision {
  id: string;
  organizationId?: string;
  tenantId?: string;
  type: GovernanceDecisionType;
  title: string;
  rationale: string;
  status: GovernanceDecisionStatus;
  requestedBy?: string;
  decidedBy?: string;
  createdAt: string;
  decidedAt?: string;
  expiresAt?: string;
  evidenceRefs?: string[];
}