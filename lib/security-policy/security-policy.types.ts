export type SecurityPolicyStatus =
  | "pass"
  | "warning"
  | "blocked";

export type SecurityHeaderId =
  | "content-security-policy"
  | "referrer-policy"
  | "frame-protection"
  | "content-type-protection"
  | "permissions-policy"
  | "transport-security"
  | "cache-control";

export type SecurityHeaderPolicy = {
  id: SecurityHeaderId;
  header: string;
  value: string;
  status: SecurityPolicyStatus;
  scope: "api" | "controlled-response" | "reference";
  description: string;
};

export type SecurityPolicy = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.10";
  timestamp: string;
  status: SecurityPolicyStatus;
  headers: SecurityHeaderPolicy[];
  totalHeaders: number;
  passedHeaders: number;
  warningHeaders: number;
  blockedHeaders: number;
};

export type SecurityPolicyHeaderInput = {
  includeTransportSecurity?: boolean;
};
