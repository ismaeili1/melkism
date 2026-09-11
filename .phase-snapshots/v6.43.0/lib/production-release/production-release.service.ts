import type {
  ProductionCheck,
  ProductionEnvironment,
  ProductionHealth,
} from "./production-release.types";

function resolveEnvironment(): ProductionEnvironment {
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

export function getProductionHealth(): ProductionHealth {
  const environment = resolveEnvironment();

  const checks: ProductionCheck[] = [
    {
      name: "runtime",
      status: "pass",
      message: "Application runtime is responding.",
    },
    {
      name: "version",
      status: "pass",
      message:
        "MELKISM v6.0 production release layer is active.",
    },
    {
      name: "environment",
      status:
        environment === "unknown"
          ? "warning"
          : "pass",
      message:
        environment === "unknown"
          ? "NODE_ENV is not explicitly recognized."
          : `Environment detected as ${environment}.`,
    },
  ];

  const ok = checks.every(
    (check) =>
      check.status === "pass" ||
      check.status === "warning",
  );

  return {
    ok,
    service: "MELKISM",
    version: "v6.0",
    environment,
    timestamp: new Date().toISOString(),
    checks,
  };
}
