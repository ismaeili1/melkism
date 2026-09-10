export function clampRiskScore(
  value: number
): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.min(
    1,
    Math.max(0, value)
  );
}

export function isExpired(
  expiresAt: string,
  now = new Date()
): boolean {
  const expiration =
    new Date(expiresAt).getTime();

  if (!Number.isFinite(expiration)) {
    return true;
  }

  return expiration <= now.getTime();
}

export function normalizeSecurityIdentifier(
  value: string
): string {
  return value.trim().toLowerCase();
}