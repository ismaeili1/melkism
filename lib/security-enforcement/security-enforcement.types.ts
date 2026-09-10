export type SecurityEnforcementStatus =
  | "pass"
  | "warning"
  | "blocked";

export type SecurityEnforcementMode =
  | "api"
  | "controlled-response";

export type SecurityEnforcementResult = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.11";
  timestamp: string;
  mode: SecurityEnforcementMode;
  status: SecurityEnforcementStatus;
  appliedHeaders: string[];
  rejectedHeaders: string[];
};

export type SecurityEnforcementInput = {
  mode: SecurityEnforcementMode;
  allowTransportSecurity?: boolean;
};
