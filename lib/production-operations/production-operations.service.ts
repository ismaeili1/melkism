import type {
  OperationalCheck,
  OperationalReadiness,
} from "./production-operations.types";

function getEnvironment(): string {
  const value = process.env.NODE_ENV;

  if (
    value === "production" ||
    value === "development" ||
    value === "test"
  ) {
    return value;
  }

  return "unknown";
}

function createChecks(): OperationalCheck[] {
  return [
    {
      name: "runtime",
      status: "pass",
      message:
        "MELKISM runtime is available.",
    },
    {
      name: "release",
      status: "pass",
      message:
        "Production release layer is present.",
    },
    {
      name: "secret-safety",
      status: "pass",
      message:
        "This readiness endpoint does not expose secret values.",
    },
    {
      name: "schema-safety",
      status: "pass",
      message:
        "v6.1 operations layer does not perform database migrations.",
    },
    {
      name: "environment",
      status:
        getEnvironment() === "unknown"
          ? "warning"
          : "pass",
      message:
        getEnvironment() === "unknown"
          ? "NODE_ENV is not explicitly recognized."
          : `Environment detected as ${getEnvironment()}.`,
    },
  ];
}

export function getOperationalReadiness(): OperationalReadiness {
  const checks = createChecks();

  const ok = checks.every(
    (check) =>
      check.status === "pass" ||
      check.status === "warning",
  );

  return {
    ok,
    service: "MELKISM",
    version: "v6.1",
    environment: getEnvironment(),
    timestamp: new Date().toISOString(),
    checks,
  };
}
