export function clampConstructionProgress(
  value: number
): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.min(100, Math.max(0, value));
}

export function calculateRiskScore(
  probability: number,
  impact: number
): number {
  if (
    !Number.isFinite(probability) ||
    !Number.isFinite(impact)
  ) {
    return 0;
  }

  return Math.max(
    0,
    Math.min(1, probability) *
      Math.max(0, Math.min(1, impact))
  );
}

export function calculateCostVariance(
  estimated: number,
  actual: number
): number {
  if (
    !Number.isFinite(estimated) ||
    !Number.isFinite(actual)
  ) {
    return 0;
  }

  return actual - estimated;
}