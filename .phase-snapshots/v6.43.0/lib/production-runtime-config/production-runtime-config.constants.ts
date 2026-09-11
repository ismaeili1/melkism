export const PRODUCTION_RUNTIME_CONFIG_POLICY = {
  phase: "v6.17",
  expectedEnvironment: "production",
  requiredPackageScripts: ["build", "start"],
  browserPrefix: "NEXT_PUBLIC_",
  forbiddenSecretExposurePrefixes: [
    "DATABASE_",
    "SECRET_",
    "PRIVATE_",
    "PASSWORD_",
    "TOKEN_",
    "API_SECRET_"
  ]
} as const;
