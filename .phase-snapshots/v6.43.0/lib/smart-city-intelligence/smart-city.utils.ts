export function clampUrbanScore(
  value: number,
  min = 0,
  max = 100
): number {
  if (!Number.isFinite(value)) {
    return min;
  }

  return Math.min(
    max,
    Math.max(min, value)
  );
}

export function calculateUrbanRiskScore(
  probability: number,
  impact: number
): number {
  if (
    !Number.isFinite(probability) ||
    !Number.isFinite(impact)
  ) {
    return 0;
  }

  return (
    Math.max(0, Math.min(1, probability)) *
    Math.max(0, Math.min(1, impact))
  );
}

export function calculateUrbanAverage(
  values: number[]
): number {
  const valid = values.filter((value) =>
    Number.isFinite(value)
  );

  if (valid.length === 0) {
    return 0;
  }

  return (
    valid.reduce(
      (sum, value) => sum + value,
      0
    ) / valid.length
  );
}

export function normalizeCitySlug(
  value: string
): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}