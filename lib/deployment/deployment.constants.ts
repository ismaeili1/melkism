/**
 * MELKISM v6.32.0
 * Production deployment constants.
 */

export const DEPLOYMENT_APP_NAME = "MELKISM";

export const DEPLOYMENT_DOMAIN = "melkism.com";

export const DEPLOYMENT_SUPPORTED_LOCALES = [
  "fa",
  "en",
  "ar",
  "tr",
] as const;

export const DEPLOYMENT_DEFAULT_LOCALE = "fa";

export const DEPLOYMENT_HEALTH_PATH =
  "/api/health";

export const DEPLOYMENT_READY_PATH =
  "/api/ready";

export const DEPLOYMENT_BUILD_COMMAND =
  "npm run build";

export const DEPLOYMENT_START_COMMAND =
  "npm start";

export const DEPLOYMENT_TEST_COMMAND =
  "npm test";

export const DEPLOYMENT_LINT_COMMAND =
  "npm run lint";

export const DEPLOYMENT_PRISMA_VALIDATE_COMMAND =
  "npx prisma validate";

export const DEPLOYMENT_PRISMA_GENERATE_COMMAND =
  "npx prisma generate";

export const DEPLOYMENT_NO_EXTERNAL_DEPENDENCY_POLICY =
  true;

export const DEPLOYMENT_NO_RUNTIME_DATABASE_PROBE_POLICY =
  true;
