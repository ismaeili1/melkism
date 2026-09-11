export type DatabaseProvider =
  | "postgresql"
  | "mysql"
  | "mongodb"
  | "sqlite"
  | "unknown";

export type DatabaseProductionStatus = {
  phase: "v6.18";
  schemaPresent: boolean;
  prismaDirectoryPresent: boolean;
  provider: DatabaseProvider;
  clientGenerated: boolean;
  migrationDirectoryPresent: boolean;
  migrationCount: number;
  connectionConfigured: boolean;
  connectionVerified: boolean;
  productionReady: boolean;
};

export type DatabaseReadinessCheck = {
  name: string;
  status: "pass" | "warn" | "fail";
  detail: string;
};
