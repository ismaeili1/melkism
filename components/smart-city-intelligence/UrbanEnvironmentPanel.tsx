import type { UrbanEnvironmentAssessment } from "@/lib/smart-city-intelligence/urban-environment.types";

interface UrbanEnvironmentPanelProps {
  assessment?: UrbanEnvironmentAssessment;
}

export default function UrbanEnvironmentPanel({
  assessment,
}: UrbanEnvironmentPanelProps) {
  if (!assessment) {
    return (
      <section aria-label="Urban environment intelligence">
        <h2>Urban Environment</h2>
        <p>No environmental assessment available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Urban environment intelligence">
      <h2>Urban Environment</h2>
      <p>Metrics: {assessment.metrics.length}</p>
      <p>
        Environmental risk: {assessment.environmentalRisk}
      </p>
    </section>
  );
}