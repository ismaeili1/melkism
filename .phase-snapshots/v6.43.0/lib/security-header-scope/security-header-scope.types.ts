export type SecurityHeaderScopeStatus =
  | "pass"
  | "warning"
  | "blocked";

export type SecurityHeaderScopeVerification = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.14";
  timestamp: string;
  status: SecurityHeaderScopeStatus;
  globalHeaders: string[];
  apiOnlyHeaders: string[];
  globalCacheControlEnabled: boolean;
  apiCacheControlEnabled: boolean;
  hstsEnabled: boolean;
};
