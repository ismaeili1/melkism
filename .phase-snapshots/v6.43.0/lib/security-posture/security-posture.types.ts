export type SecurityPostureStatus =
  | "pass"
  | "warning"
  | "blocked";

export type SecurityControlId =
  | "application-security"
  | "request-protection"
  | "csrf-protection"
  | "origin-validation"
  | "rate-limiting"
  | "security-audit"
  | "secret-safety"
  | "schema-safety";

export type SecurityControl = {
  id: SecurityControlId;
  name: string;
  version: string;
  status: SecurityPostureStatus;
  description: string;
};

export type SecurityPosture = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.9";
  timestamp: string;
  status: SecurityPostureStatus;
  controls: SecurityControl[];
  totalControls: number;
  passedControls: number;
  warningControls: number;
  blockedControls: number;
  auditEvents: number;
};
