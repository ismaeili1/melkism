import type {
  SecurityEvent,
  SecurityEventCategory,
  SecurityEventSeverity,
} from "./security-event.types";

export interface CreateSecurityEventInput {
  category: SecurityEventCategory;
  severity: SecurityEventSeverity;
  type: string;
  identityId?: string;
  sessionId?: string;
  resourceType?: string;
  resourceId?: string;
  message: string;
  metadata?: Record<string, unknown>;
}

export class SecurityEventService {
  create(
    input: CreateSecurityEventInput
  ): SecurityEvent {
    return {
      id: crypto.randomUUID(),
      category: input.category,
      severity: input.severity,
      type: input.type,
      identityId: input.identityId,
      sessionId: input.sessionId,
      resourceType: input.resourceType,
      resourceId: input.resourceId,
      message: input.message,
      occurredAt: new Date().toISOString(),
      metadata: input.metadata,
    };
  }
}