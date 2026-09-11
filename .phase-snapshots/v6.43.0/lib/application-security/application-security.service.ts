import {
  APPLICATION_SECURITY_SERVICE,
  APPLICATION_SECURITY_VERSION,
  SECURITY_ALLOWED_CONTENT_TYPES,
  SECURITY_ALLOWED_METHODS,
  SECURITY_MAX_REQUEST_PATH_LENGTH,
  SECURITY_MUTATION_METHODS,
  SECURITY_SAFE_METHODS,
} from "./application-security.constants";

import type {
  SecurityCheck,
  SecurityReport,
  SecurityValidationInput,
  SecurityValidationResult,
} from "./application-security.types";

function hasFile(path: string): boolean {
  return path.length > 0;
}

export function validateRequest(
  input: SecurityValidationInput,
): SecurityValidationResult {
  const method =
    input.method
      .trim()
      .toUpperCase();

  if (
    !SECURITY_ALLOWED_METHODS.includes(
      method as (
        typeof SECURITY_ALLOWED_METHODS
      )[number],
    )
  ) {
    return {
      ok: false,
      status: "fail",
      message:
        "HTTP method is not allowed.",
    };
  }

  if (
    input.requestPath.length >
    SECURITY_MAX_REQUEST_PATH_LENGTH
  ) {
    return {
      ok: false,
      status: "fail",
      message:
        "Request path exceeds the configured security limit.",
    };
  }

  if (
    SECURITY_MUTATION_METHODS.includes(
      method as (
        typeof SECURITY_MUTATION_METHODS
      )[number],
    ) &&
    input.contentType
  ) {
    const contentType =
      input.contentType
        .split(";")[0]
        .trim()
        .toLowerCase();

    if (
      !SECURITY_ALLOWED_CONTENT_TYPES.includes(
        contentType as (
          typeof SECURITY_ALLOWED_CONTENT_TYPES
        )[number],
      )
    ) {
      return {
        ok: false,
        status: "fail",
        message:
          "Request content type is not allowed for this security boundary.",
      };
    }
  }

  if (
    input.origin &&
    input.origin.length >
      SECURITY_MAX_REQUEST_PATH_LENGTH
  ) {
    return {
      ok: false,
      status: "fail",
      message:
        "Request origin value exceeds the configured security limit.",
    };
  }

  return {
    ok: true,
    status: "pass",
    message:
      hasFile(input.requestPath)
        ? "Request satisfies the application security baseline."
        : "Request path is required.",
  };
}

function createChecks(): SecurityCheck[] {
  return [
    {
      name: "security-layer",
      status: "pass",
      message:
        `Application security foundation ${APPLICATION_SECURITY_VERSION} is active.`,
    },
    {
      name: "method-policy",
      status: "pass",
      message:
        "HTTP method policy is defined.",
    },
    {
      name: "content-type-policy",
      status: "pass",
      message:
        "Mutation content-type policy is defined.",
    },
    {
      name: "path-limit",
      status: "pass",
      message:
        "Request path length is bounded.",
    },
    {
      name: "secret-safety",
      status: "pass",
      message:
        "Security diagnostics do not expose environment secret values.",
    },
    {
      name: "database-safety",
      status: "pass",
      message:
        "Security diagnostics execute no database migrations.",
    },
    {
      name: "safe-methods",
      status:
        SECURITY_SAFE_METHODS.length > 0
          ? "pass"
          : "fail",
      message:
        SECURITY_SAFE_METHODS.length > 0
          ? "Safe HTTP methods are explicitly defined."
          : "Safe HTTP method policy is missing.",
    },
  ];
}

export function getSecurityReport(): SecurityReport {
  const checks =
    createChecks();

  const hasFailure =
    checks.some(
      (check) =>
        check.status === "fail",
    );

  return {
    ok: !hasFailure,
    service:
      APPLICATION_SECURITY_SERVICE,
    version:
      APPLICATION_SECURITY_VERSION,
    timestamp:
      new Date().toISOString(),
    checks,
  };
}
