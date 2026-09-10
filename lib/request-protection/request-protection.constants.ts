export const REQUEST_PROTECTION_SERVICE = "MELKISM";

export const REQUEST_PROTECTION_VERSION = "v6.7";

export const DEFAULT_RATE_LIMIT_WINDOW_MS =
  60_000;

export const DEFAULT_RATE_LIMIT_MAX_REQUESTS =
  60;

export const MUTATION_RATE_LIMIT_MAX_REQUESTS =
  20;

export const MAX_PATH_LENGTH =
  2048;

export const MAX_ORIGIN_LENGTH =
  2048;

export const MAX_IDENTITY_LENGTH =
  256;

export const SAFE_METHODS = [
  "GET",
  "HEAD",
  "OPTIONS",
] as const;

export const MUTATION_METHODS = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
] as const;

export const ALL_ALLOWED_METHODS = [
  "GET",
  "HEAD",
  "OPTIONS",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
] as const;
