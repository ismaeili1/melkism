export type SecurityEventCategory =
  | "authentication"
  | "authorization"
  | "session"
  | "credential"
  | "identity"
  | "fraud"
  | "abuse"
  | "policy"
  | "system"
  | "other";

export type SecurityEventSeverity =
  | "info"
  | "low"
  | "medium"
  | "high"
  | "critical";

export interface SecurityEvent {
  id: string;
  category: SecurityEventCategory;
  severity: SecurityEventSeverity;
  type: string;
  identityId?: string;
  sessionId?: string;
  resourceType?: string;
  resourceId?: string;
  message: string;
  occurredAt: string;
  metadata?: Record<string, unknown>;
}