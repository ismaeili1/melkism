import type { PermissionAction } from "./permission.types";

export interface ResourceReference {
  type: string;
  id: string;
}

export interface AccessRequest {
  identityId?: string;
  resource: ResourceReference;
  action: PermissionAction;
  scope?: string;
  context?: Record<string, unknown>;
}

export interface AccessDecision {
  allowed: boolean;
  reason:
    | "allowed"
    | "anonymous"
    | "missing_permission"
    | "invalid_scope"
    | "policy_denied"
    | "identity_suspended"
    | "identity_disabled";
  evaluatedAt: string;
}