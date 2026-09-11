export type IdentityId = string;

export type IdentityType =
  | "user"
  | "organization"
  | "service"
  | "system";

export type IdentityStatus =
  | "pending"
  | "active"
  | "suspended"
  | "disabled"
  | "archived";

export interface IdentityRecord {
  id: IdentityId;
  type: IdentityType;
  status: IdentityStatus;
  displayName?: string;
  email?: string;
  organizationId?: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, unknown>;
}