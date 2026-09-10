import type {
  DatabaseProductionStatus,
  DatabaseProvider
} from "./database-production-readiness.types";

function resolveProvider(value: string): DatabaseProvider {
  if (value === "postgresql") {
    return "postgresql";
  }

  if (value === "mysql") {
    return "mysql";
  }

  if (value === "mongodb") {
    return "mongodb";
  }

  if (value === "sqlite") {
    return "sqlite";
  }

  return "unknown";
}

export function getDatabaseProductionStatus(): DatabaseProductionStatus {
  const provider = resolveProvider(
    process.env.MELKISM_DATABASE_PROVIDER ?? "unknown"
  );

  return {
    phase: "v6.18",
    schemaPresent: true,
    prismaDirectoryPresent: true,
    provider,
    clientGenerated: true,
    migrationDirectoryPresent: false,
    migrationCount: 0,
    connectionConfigured: false,
    connectionVerified: false,
    productionReady: false
  };
}
