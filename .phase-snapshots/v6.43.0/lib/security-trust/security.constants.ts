export const SECURITY_TRUST_VERSION = "2.90.0";

export const SECURITY_RISK_SEVERITIES = [
  "low",
  "medium",
  "high",
  "critical",
] as const;

export const SECURITY_POLICY_EFFECTS = [
  "allow",
  "deny",
  "challenge",
  "review",
] as const;

export const DEFAULT_SESSION_DURATION_SECONDS = 3600;

export const DEFAULT_REFRESH_TOKEN_DURATION_SECONDS =
  60 * 60 * 24 * 30;