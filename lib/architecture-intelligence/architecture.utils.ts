export function clampArchitectureScore(
  value: number,
  min = 0,
  max = 100
): number {
  if (!Number.isFinite(value)) {
    return min;
  }

  return Math.min(max, Math.max(min, value));
}

export function normalizeArchitectureProjectTitle(
  value: string
): string {
  return value.trim().replace(/\s+/g, " ");
}

export function calculateAverageScore(
  values: number[]
): number {
  const valid = values.filter((value) =>
    Number.isFinite(value)
  );

  if (valid.length === 0) {
    return 0;
  }

  return (
    valid.reduce((sum, value) => sum + value, 0) /
    valid.length
  );
}