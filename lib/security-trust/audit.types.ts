export type AuditAction =
  | "create"
  | "read"
  | "update"
  | "delete"
  | "login"
  | "logout"
  | "access_granted"
  | "access_denied"
  | "permission_changed"
  | "role_changed"
  | "verification_changed"
  | "security_event"
  | "policy_decision"
  | "other";

export interface AuditRecord {
  id: string;
  action: AuditAction;
  actorIdentityId?: string;
  targetType?: string;
  targetId?: string;
  success: boolean;
  occurredAt: string;
  correlationId?: string;
  ipAddress?: string;
  userAgent?: string;
  metadata?: Record<string, unknown>;
}