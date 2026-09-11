export function clampGovernanceScore(
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

export function calculateGovernanceRiskScore(
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

export function normalizeGovernanceSlug(
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