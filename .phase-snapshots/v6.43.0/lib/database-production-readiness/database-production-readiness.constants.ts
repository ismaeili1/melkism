export const DATABASE_PRODUCTION_READINESS_POLICY = {
  phase: "v6.18",
  requiredSchemaPath: "prisma/schema.prisma",
  requiredCommands: [
    "prisma validate",
    "prisma generate"
  ],
  prohibitedAutomaticOperations: [
    "prisma migrate dev",
    "prisma migrate deploy",
    "prisma db push",
    "prisma db pull",
    "prisma migrate reset"
  ],
  sensitiveEnvironmentVariables: [
    "DATABASE_URL",
    "DIRECT_URL",
    "DATABASE_DIRECT_URL"
  ]
} as const;
