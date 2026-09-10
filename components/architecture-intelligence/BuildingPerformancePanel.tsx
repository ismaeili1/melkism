import type { BuildingPerformanceAssessment } from "@/lib/architecture-intelligence/building-performance.types";

interface BuildingPerformancePanelProps {
  result?: BuildingPerformanceAssessment;
}

export default function BuildingPerformancePanel({
  result,
}: BuildingPerformancePanelProps) {
  if (!result) {
    return (
      <section aria-label="Building performance">
        <h2>Building Performance</h2>
        <p>No performance assessment available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Building performance">
      <h2>Building Performance</h2>
      <p>Metrics: {result.metrics.length}</p>
      <p>Confidence: {result.confidence}</p>
    </section>
  );
}