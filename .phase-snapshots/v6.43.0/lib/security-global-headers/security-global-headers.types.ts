export type GlobalSecurityHeaderId =
  | "content-security-policy"
  | "referrer-policy"
  | "frame-protection"
  | "content-type-protection"
  | "permissions-policy"
  | "cache-control";

export type GlobalSecurityHeader = {
  id: GlobalSecurityHeaderId;
  key: string;
  value: string;
};

export type GlobalSecurityHeaderSet = {
  service: "MELKISM";
  version: "v6.13";
  headers: GlobalSecurityHeader[];
};

export type GlobalSecurityHeaderVerification = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.13";
  timestamp: string;
  expectedHeaders: string[];
  globalEnforcementEnabled: boolean;
  transportSecurityEnabled: boolean;
  status: "pass" | "warning" | "blocked";
};
