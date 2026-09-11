import {
  SECURITY_MAX_ENV_NAME_LENGTH,
  SECURITY_SENSITIVE_ENV_PATTERNS,
} from "./security.constants";

import type {
  EnvironmentAuditReport,
} from "./security.types";

function isSensitiveName(
  name: string
): boolean {
  const upper =
    name.toUpperCase();

  return SECURITY_SENSITIVE_ENV_PATTERNS.some(
    (pattern) =>
      upper.includes(pattern)
  );
}

export function auditEnvironment():
  EnvironmentAuditReport {
  const results = Object.keys(
    process.env
  )
    .filter(
      (name) =>
        name.length <=
        SECURITY_MAX_ENV_NAME_LENGTH
    )
    .sort()
    .map(
      (name) => ({
        name,
        present:
          process.env[name] !==
          undefined,
        sensitive:
          isSensitiveName(name),
      })
    );

  return {
    results,
  };
}

export function isProductionEnvironment():
  boolean {
  return (
    process.env.NODE_ENV ===
    "production"
  );
}

export function hasRuntimeSecret():
  boolean {
  return (
    typeof process.env.AUTH_SECRET ===
      "string" ||
    typeof process.env.NEXTAUTH_SECRET ===
      "string"
  );
}
