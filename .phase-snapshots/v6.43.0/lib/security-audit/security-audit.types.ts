export type SecurityAuditLevel =
  | "info"
  | "warning"
  | "critical";

export type SecurityAuditCategory =
  | "authentication"
  | "authorization"
  | "request"
  | "rate-limit"
  | "csrf"
  | "origin"
  | "system"
  | "deployment";

export type SecurityAuditEvent = {
  id: string;
  timestamp: string;
  level: SecurityAuditLevel;
  category: SecurityAuditCategory;
  action: string;
  success: boolean;
  actorType:
    | "anonymous"
    | "user"
    | "service";
  requestId?: string;
  path?: string;
};

export type SecurityAuditSummary = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.8";
  timestamp: string;
  totalEvents: number;
  infoEvents: number;
  warningEvents: number;
  criticalEvents: number;
  failedEvents: number;
};

export type CreateSecurityAuditEventInput = {
  level: SecurityAuditLevel;
  category: SecurityAuditCategory;
  action: string;
  success: boolean;
  actorType:
    | "anonymous"
    | "user"
    | "service";
  requestId?: string;
  path?: string;
};
