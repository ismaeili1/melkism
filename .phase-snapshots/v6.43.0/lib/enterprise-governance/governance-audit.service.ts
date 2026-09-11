import type {
  GovernanceAuditEvent,
  GovernanceAuditEventType,
} from "./governance-audit.types";

export interface CreateGovernanceAuditInput {
  eventType: GovernanceAuditEventType;
  actorIdentityId?: string;
  organizationId?: string;
  tenantId?: string;
  targetType?: string;
  targetId?: string;
  summary: string;
  metadata?: Record<string, unknown>;
}

export class GovernanceAuditService {
  create(
    input: CreateGovernanceAuditInput
  ): GovernanceAuditEvent {
    return {
      id: crypto.randomUUID(),
      eventType: input.eventType,
      actorIdentityId: input.actorIdentityId,
      organizationId: input.organizationId,
      tenantId: input.tenantId,
      targetType: input.targetType,
      targetId: input.targetId,
      summary: input.summary,
      occurredAt: new Date().toISOString(),
      metadata: input.metadata,
    };
  }
}