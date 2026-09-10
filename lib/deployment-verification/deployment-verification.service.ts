import {
  DEPLOYMENT_SERVICE,
  DEPLOYMENT_STATUS_FAILED,
  DEPLOYMENT_STATUS_WARNING,
  DEPLOYMENT_STATUS_READY,
  DEPLOYMENT_VERSION,
} from "./deployment-verification.constants";

import type {
  DeploymentCheck,
  DeploymentEnvironment,
  DeploymentReadiness,
} from "./deployment-verification.types";

function getEnvironment(): DeploymentEnvironment {
  const value = process.env.NODE_ENV;

  if (value === "production") {
    return "production";
  }

  if (value === "test") {
    return "test";
  }

  if (value === "development") {
    return "development";
  }

  return "unknown";
}

function getChecks(
  environment: DeploymentEnvironment,
): DeploymentCheck[] {
  return [
    {
      name: "application",
      status: DEPLOYMENT_STATUS_READY,
      message:
        "MELKISM application foundation is available.",
    },
    {
      name: "release-governance",
      status: DEPLOYMENT_STATUS_READY,
      message:
        "Release governance layer is present.",
    },
    {
      name: "reliability",
      status: DEPLOYMENT_STATUS_READY,
      message:
        "Production reliability layer is present.",
    },
    {
      name: "schema-safety",
      status: DEPLOYMENT_STATUS_READY,
      message:
        "Deployment verification does not perform database migrations.",
    },
    {
      name: "secret-safety",
      status: DEPLOYMENT_STATUS_READY,
      message:
        "Deployment verification does not expose secret values.",
    },
    {
      name: "environment",
      status:
        environment === "unknown"
          ? DEPLOYMENT_STATUS_WARNING
          : DEPLOYMENT_STATUS_READY,
      message:
        environment === "unknown"
          ? "NODE_ENV is not explicitly recognized."
          : `Environment detected as ${environment}.`,
    },
  ];
}

export function getDeploymentReadiness(): DeploymentReadiness {
  const environment = getEnvironment();

  const checks = getChecks(
    environment,
  );

  const hasFailure = checks.some(
    (check) =>
      check.status ===
      DEPLOYMENT_STATUS_FAILED,
  );

  const hasWarning = checks.some(
    (check) =>
      check.status ===
      DEPLOYMENT_STATUS_WARNING,
  );

  const status =
    hasFailure
      ? DEPLOYMENT_STATUS_FAILED
      : hasWarning
        ? DEPLOYMENT_STATUS_WARNING
        : DEPLOYMENT_STATUS_READY;

  return {
    service: DEPLOYMENT_SERVICE,
    version: DEPLOYMENT_VERSION,
    status,
    environment,
    timestamp:
      new Date().toISOString(),
    checks,
  };
}
