export const GLOBAL_EXPANSION_VERSION = "2.92.0";

export const GLOBAL_DIRECTIONS = [
  "ltr",
  "rtl",
] as const;

export const GLOBAL_COVERAGE_STATUSES = [
  "not_available",
  "planned",
  "beta",
  "available",
  "limited",
  "restricted",
  "suspended",
] as const;

export const GLOBAL_READINESS_LEVELS = [
  "not_ready",
  "planning",
  "early",
  "ready",
  "operational",
] as const;