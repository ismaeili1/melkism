export type SecurityHeaderName =
  | "Content-Security-Policy"
  | "Referrer-Policy"
  | "X-Frame-Options"
  | "X-Content-Type-Options"
  | "Permissions-Policy"
  | "Strict-Transport-Security";

export type SecurityHeaderMap =
  Record<
    SecurityHeaderName,
    string
  >;

export type EnvironmentAuditResult = {
  name: string;
  present: boolean;
  sensitive: boolean;
};

export type EnvironmentAuditReport = {
  results: EnvironmentAuditResult[];
};

export type DependencyAuditSummary = {
  info: number;
  low: number;
  moderate: number;
  high: number;
  critical: number;
  total: number;
};
