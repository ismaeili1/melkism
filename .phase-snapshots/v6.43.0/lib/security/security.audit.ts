import type {
  DependencyAuditSummary,
} from "./security.types";

export function summarizeDependencyAudit(
  audit:
    | Record<string, unknown>
    | null
    | undefined
): DependencyAuditSummary {
  const metadata =
    audit?.metadata as
      | Record<string, unknown>
      | undefined;

  const vulnerabilities =
    metadata?.vulnerabilities as
      | Record<string, unknown>
      | undefined;

  const read =
    (
      key: string
    ): number =>
      typeof vulnerabilities?.[key] ===
        "number"
        ? Number(
            vulnerabilities[key]
          )
        : 0;

  const info =
    read("info");

  const low =
    read("low");

  const moderate =
    read("moderate");

  const high =
    read("high");

  const critical =
    read("critical");

  return {
    info,
    low,
    moderate,
    high,
    critical,
    total:
      info +
      low +
      moderate +
      high +
      critical,
  };
}

export function hasCriticalOrHigh(
  summary:
    DependencyAuditSummary
): boolean {
  return (
    summary.critical > 0 ||
    summary.high > 0
  );
}

export function hasModerateOrAbove(
  summary:
    DependencyAuditSummary
): boolean {
  return (
    summary.critical > 0 ||
    summary.high > 0 ||
    summary.moderate > 0
  );
}
