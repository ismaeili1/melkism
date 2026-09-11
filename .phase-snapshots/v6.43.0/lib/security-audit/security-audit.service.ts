import {
  SECURITY_AUDIT_MAX_ACTION_LENGTH,
  SECURITY_AUDIT_MAX_EVENTS,
  SECURITY_AUDIT_MAX_PATH_LENGTH,
  SECURITY_AUDIT_MAX_REQUEST_ID_LENGTH,
  SECURITY_AUDIT_SERVICE,
  SECURITY_AUDIT_VERSION,
} from "./security-audit.constants";

import type {
  CreateSecurityAuditEventInput,
  SecurityAuditEvent,
  SecurityAuditSummary,
} from "./security-audit.types";

const events: SecurityAuditEvent[] = [];

let sequence = 0;

function createId(): string {
  sequence += 1;

  return `audit-${Date.now()}-${sequence}`;
}

function sanitizeText(
  value: string | undefined,
  maxLength: number,
): string | undefined {
  if (
    value === undefined
  ) {
    return undefined;
  }

  const normalized =
    value
      .trim()
      .replace(
        /[\r\n\t]+/g,
        " ",
      );

  if (!normalized) {
    return undefined;
  }

  return normalized.slice(
    0,
    maxLength,
  );
}

function sanitizeAction(
  value: string,
): string {
  return (
    sanitizeText(
      value,
      SECURITY_AUDIT_MAX_ACTION_LENGTH,
    ) ?? "unknown"
  );
}

function sanitizePath(
  value: string | undefined,
): string | undefined {
  if (!value) {
    return undefined;
  }

  const normalized =
    sanitizeText(
      value,
      SECURITY_AUDIT_MAX_PATH_LENGTH,
    );

  if (!normalized) {
    return undefined;
  }

  const queryIndex =
    normalized.indexOf("?");

  const hashIndex =
    normalized.indexOf("#");

  const indexes = [
    queryIndex,
    hashIndex,
  ].filter(
    (index) => index >= 0,
  );

  if (indexes.length === 0) {
    return normalized;
  }

  const firstIndex =
    Math.min(...indexes);

  return normalized.slice(
    0,
    firstIndex,
  );
}

function sanitizeRequestId(
  value: string | undefined,
): string | undefined {
  return sanitizeText(
    value,
    SECURITY_AUDIT_MAX_REQUEST_ID_LENGTH,
  );
}

function retainLimit(): void {
  if (
    events.length <=
    SECURITY_AUDIT_MAX_EVENTS
  ) {
    return;
  }

  events.splice(
    0,
    events.length -
      SECURITY_AUDIT_MAX_EVENTS,
  );
}

export function recordSecurityAuditEvent(
  input: CreateSecurityAuditEventInput,
): SecurityAuditEvent {
  const event: SecurityAuditEvent = {
    id: createId(),
    timestamp:
      new Date().toISOString(),
    level: input.level,
    category: input.category,
    action:
      sanitizeAction(
        input.action,
      ),
    success:
      input.success,
    actorType:
      input.actorType,
    requestId:
      sanitizeRequestId(
        input.requestId,
      ),
    path:
      sanitizePath(
        input.path,
      ),
  };

  events.push(event);

  retainLimit();

  return {
    ...event,
  };
}

export function getSecurityAuditSummary(): SecurityAuditSummary {
  let infoEvents = 0;
  let warningEvents = 0;
  let criticalEvents = 0;
  let failedEvents = 0;

  for (
    const event of events
  ) {
    if (
      event.level === "info"
    ) {
      infoEvents += 1;
    }

    if (
      event.level === "warning"
    ) {
      warningEvents += 1;
    }

    if (
      event.level === "critical"
    ) {
      criticalEvents += 1;
    }

    if (!event.success) {
      failedEvents += 1;
    }
  }

  return {
    ok: criticalEvents === 0,
    service:
      SECURITY_AUDIT_SERVICE,
    version:
      SECURITY_AUDIT_VERSION,
    timestamp:
      new Date().toISOString(),
    totalEvents:
      events.length,
    infoEvents,
    warningEvents,
    criticalEvents,
    failedEvents,
  };
}

export function getSecurityAuditCount(): number {
  return events.length;
}
