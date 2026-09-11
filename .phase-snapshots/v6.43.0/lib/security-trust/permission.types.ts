export type PermissionAction =
  | "read"
  | "create"
  | "update"
  | "delete"
  | "publish"
  | "approve"
  | "execute"
  | "manage"
  | "admin";

export interface Permission {
  id: string;
  resource: string;
  action: PermissionAction;
  description?: string;
}

export interface PermissionAssignment {
  id: string;
  identityId: string;
  permissionId: string;
  scope?: string;
  grantedAt: string;
  expiresAt?: string;
}