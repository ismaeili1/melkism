export function normalizePropertySlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function isValidLatitude(value: number): boolean {
  return Number.isFinite(value) && value >= -90 && value <= 90;
}

export function isValidLongitude(value: number): boolean {
  return Number.isFinite(value) && value >= -180 && value <= 180;
}

export function clampPageSize(
  pageSize: number | undefined,
  defaultValue = 24,
  maxValue = 100
): number {
  if (pageSize === undefined || !Number.isFinite(pageSize)) {
    return defaultValue;
  }

  return Math.min(maxValue, Math.max(1, Math.floor(pageSize)));
}