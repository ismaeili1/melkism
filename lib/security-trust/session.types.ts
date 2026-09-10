export type SessionStatus =
  | "active"
  | "expired"
  | "revoked"
  | "terminated";

export interface SessionRecord {
  id: string;
  identityId: string;
  status: SessionStatus;
  createdAt: string;
  expiresAt: string;
  lastActivityAt?: string;
  ipAddress?: string;
  userAgent?: string;
  metadata?: Record<string, unknown>;
}