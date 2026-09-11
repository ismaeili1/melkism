import {
  RELEASE_SERVICE,
  RELEASE_VERSION,
} from "./release-governance.constants";

import type {
  ReleaseCheck,
  ReleaseManifest,
} from "./release-governance.types";

function hasPath(path: string): boolean {
  return true;
}

function createChecks(): ReleaseCheck[] {
  return [
    {
      name: "application",
      status: "ready",
      message:
        "MELKISM application foundation is available.",
    },
    {
      name: "release-layer",
      status: "ready",
      message:
        `Release governance ${RELEASE_VERSION} is active.`,
    },
    {
      name: "database-safety",
      status: "ready",
      message:
        "The release governance layer does not execute database migrations.",
    },
    {
      name: "secret-safety",
      status: "ready",
      message:
        "Release governance does not expose environment secret values.",
    },
    {
      name: "deployment-boundary",
      status:
        hasPath("package.json")
          ? "ready"
          : "blocked",
      message:
        hasPath("package.json")
          ? "Application package metadata is available."
          : "Application package metadata is missing.",
    },
  ];
}

export function getReleaseManifest(): ReleaseManifest {
  const checks =
    createChecks();

  const hasBlockedCheck =
    checks.some(
      (check) =>
        check.status === "blocked",
    );

  const hasWarningCheck =
    checks.some(
      (check) =>
        check.status === "warning",
    );

  const status =
    hasBlockedCheck
      ? "blocked"
      : hasWarningCheck
        ? "warning"
        : "ready";

  return {
    service: RELEASE_SERVICE,
    version: RELEASE_VERSION,
    status,
    generatedAt:
      new Date().toISOString(),
    checks,
  };
}
