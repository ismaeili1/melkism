/**
 * MELKISM v6.35.0
 * Production acceptance and pre-launch constants.
 */

export const PRELAUNCH_PHASE =
  "v6.35.0";

export const PRELAUNCH_APP_NAME =
  "MELKISM";

export const PRELAUNCH_DOMAIN =
  "https://melkism.com";

export const PRELAUNCH_DEFAULT_LOCALE =
  "fa";

export const PRELAUNCH_SUPPORTED_LOCALES = [
  "fa",
  "en",
  "ar",
  "tr",
] as const;

export const PRELAUNCH_REQUIRED_GATES = [
  "foundation",
  "security",
  "observability",
  "performance",
  "search",
  "i18n",
  "deployment",
  "seo",
  "accessibility",
  "testing",
  "build",
] as const;

export const PRELAUNCH_HEALTH_PATH =
  "/api/health";

export const PRELAUNCH_READY_PATH =
  "/api/ready";

export const PRELAUNCH_PUBLIC_ROOT =
  "/fa";

export const PRELAUNCH_RELEASE_STAGE =
  "pre-release-candidate";

export const PRELAUNCH_DATABASE_POLICY =
  "no migration";

export const PRELAUNCH_GITHUB_POLICY =
  "unchanged";
