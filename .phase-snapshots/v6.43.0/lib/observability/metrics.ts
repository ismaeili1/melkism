import {
  MAX_METRIC_COUNTERS,
  MAX_METRIC_NAMES,
} from "./observability.constants";

import type {
  MetricsSnapshot,
} from "./observability.types";

const counters =
  new Map<string, number>();

function normalizeMetricName(
  name: string
): string {
  return name
    .trim()
    .replace(
      /[^a-zA-Z0-9_.:-]/g,
      "_"
    )
    .slice(0, 128);
}

export function incrementMetric(
  name: string,
  amount = 1
): void {
  const normalized =
    normalizeMetricName(name);

  if (!normalized) {
    return;
  }

  if (
    !counters.has(
      normalized
    ) &&
    counters.size >=
      MAX_METRIC_NAMES
  ) {
    return;
  }

  const current =
    counters.get(
      normalized
    ) ?? 0;

  const next =
    current +
    Math.max(0, amount);

  counters.set(
    normalized,
    Math.min(
      next,
      MAX_METRIC_COUNTERS
    )
  );
}

export function getMetric(
  name: string
): number {
  const normalized =
    normalizeMetricName(name);

  return (
    counters.get(
      normalized
    ) ?? 0
  );
}

export function getMetrics():
  MetricsSnapshot {
  return {
    counters:
      Array.from(
        counters.entries()
      )
        .sort(
          (
            a,
            b
          ) =>
            a[0].localeCompare(
              b[0]
            )
        )
        .map(
          (
            [name, count]
          ) => ({
            name,
            count,
          })
        ),
  };
}

export function resetMetrics():
  void {
  counters.clear();
}
