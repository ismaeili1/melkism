import { validationError } from "@/lib/api/core/errors";

export function requireString(
  value: unknown,
  field: string
): string {
  if (
    typeof value !== "string" ||
    value.trim().length === 0
  ) {
    throw validationError(
      `${field} must be a non-empty string.`
    );
  }

  return value.trim();
}

export function requirePositiveInteger(
  value: unknown,
  field: string
): number {
  const parsed =
    typeof value === "number"
      ? value
      : Number(value);

  if (
    !Number.isInteger(parsed) ||
    parsed <= 0
  ) {
    throw validationError(
      `${field} must be a positive integer.`
    );
  }

  return parsed;
}

export function requireEnumValue<
  T extends string
>(
  value: unknown,
  field: string,
  allowed: readonly T[]
): T {
  if (
    typeof value !== "string" ||
    !allowed.includes(value as T)
  ) {
    throw validationError(
      `${field} contains an invalid value.`
    );
  }

  return value as T;
}
