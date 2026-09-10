export const APPLICATION_SECURITY_SERVICE = "MELKISM";

export const APPLICATION_SECURITY_VERSION = "v6.6";

export const SECURITY_ALLOWED_METHODS = [
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "OPTIONS",
] as const;

export const SECURITY_MUTATION_METHODS = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
] as const;

export const SECURITY_SAFE_METHODS = [
  "GET",
  "OPTIONS",
  "HEAD",
] as const;

export const SECURITY_MAX_REQUEST_PATH_LENGTH = 2048;

export const SECURITY_ALLOWED_CONTENT_TYPES = [
  "application/json",
  "application/x-www-form-urlencoded",
  "multipart/form-data",
] as const;
