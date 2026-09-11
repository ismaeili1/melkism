export type SecurityStatus =
  | "pass"
  | "warning"
  | "fail";

export type SecurityCheck = {
  name: string;
  status: SecurityStatus;
  message: string;
};

export type SecurityReport = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.6";
  timestamp: string;
  checks: SecurityCheck[];
};

export type SecurityValidationInput = {
  method: string;
  contentType?: string | null;
  origin?: string | null;
  requestPath: string;
};

export type SecurityValidationResult = {
  ok: boolean;
  status: SecurityStatus;
  message: string;
};
