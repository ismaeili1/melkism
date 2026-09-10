export function normalizeCountryCode(
  value: string
): string {
  return value.trim().toUpperCase();
}

export function normalizeCurrencyCode(
  value: string
): string {
  return value.trim().toUpperCase();
}

export function normalizeLocale(
  value: string
): string {
  return value.trim().toLowerCase();
}

export function clampGlobalScore(
  value: number
): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(
    0,
    Math.min(100, value)
  );
}