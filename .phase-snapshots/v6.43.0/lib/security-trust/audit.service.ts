import type {
  AuditAction,
  AuditRecord,
} from "./audit.types";

export interface CreateAuditInput {
  action: AuditAction;
  actorIdentityId?: string;
  targetType?: string;
  targetId?: string;
  success: boolean;
  correlationId?: string;
  ipAddress?: string;
  userAgent?: string;
  metadata?: Record<string, unknown>;
}

export class AuditService {
  create(
    input: CreateAuditInput
  ): AuditRecord {
    return {
      id: crypto.randomUUID(),
      action: input.action,
      actorIdentityId: input.actorIdentityId,
      targetType: input.targetType,
      targetId: input.targetId,
      success: input.success,
      occurredAt: new Date().toISOString(),
      correlationId: input.correlationId,
      ipAddress: input.ipAddress,
      userAgent: input.userAgent,
      metadata: input.metadata,
    };
  }
}