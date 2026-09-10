export type RoleId = string;

export type SystemRole =
  | "anonymous"
  | "user"
  | "verified_user"
  | "agent"
  | "broker"
  | "architect"
  | "developer"
  | "investor"
  | "organization_admin"
  | "moderator"
  | "analyst"
  | "operator"
  | "security_admin"
  | "system_admin"
  | "service";

export interface RoleAssignment {
  id: string;
  identityId: string;
  role: SystemRole;
  scope?: string;
  grantedAt: string;
  expiresAt?: string;
  grantedBy?: string;
}