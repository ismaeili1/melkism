export type GovernanceAuditEventType =
  | "policy_change"
  | "role_change"
  | "organization_change"
  | "tenant_change"
  | "compliance_change"
  | "data_classification_change"
  | "risk_change"
  | "decision_change"
  | "control_change"
  | "other";

export interface GovernanceAuditEvent {
  id: string;
  eventType: GovernanceAuditEventType;
  actorIdentityId?: string;
  organizationId?: string;
  tenantId?: string;
  targetType?: string;
  targetId?: string;
  summary: string;
  occurredAt: string;
  metadata?: Record<string, unknown>;
}