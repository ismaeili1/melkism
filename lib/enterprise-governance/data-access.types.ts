export type GovernanceDataAction =
  | "read"
  | "create"
  | "update"
  | "delete"
  | "export"
  | "share"
  | "publish"
  | "admin";

export interface GovernanceDataAccessRequest {
  identityId?: string;
  tenantId?: string;
  resourceType: string;
  resourceId?: string;
  action: GovernanceDataAction;
  purpose?: string;
  scope?: string;
}

export interface GovernanceDataAccessDecision {
  allowed: boolean;
  reason:
    | "allowed"
    | "anonymous"
    | "tenant_mismatch"
    | "classification_restricted"
    | "policy_denied"
    | "purpose_required"
    | "review_required";
  evaluatedAt: string;
}