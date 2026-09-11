export const ENTERPRISE_GOVERNANCE_VERSION = "2.91.0";

export const GOVERNANCE_POLICY_STATUSES = [
  "draft",
  "review",
  "approved",
  "active",
  "suspended",
  "retired",
] as const;

export const GOVERNANCE_RISK_SEVERITIES = [
  "low",
  "medium",
  "high",
  "critical",
] as const;

export const DATA_CLASSIFICATIONS = [
  "public",
  "internal",
  "confidential",
  "restricted",
  "highly_restricted",
] as const;