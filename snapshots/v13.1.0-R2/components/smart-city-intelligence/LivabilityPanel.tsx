import type { LivabilityAssessment } from "@/lib/smart-city-intelligence/livability.types";

interface LivabilityPanelProps {
  assessment?: LivabilityAssessment;
}

export default function LivabilityPanel({
  assessment,
}: LivabilityPanelProps) {
  if (!assessment) {
    return (
      <section aria-label="Livability intelligence">
        <h2>Livability</h2>
        <p>No livability assessment available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Livability intelligence">
      <h2>Livability</h2>
      <p>
        Overall score: {assessment.overallScore}
      </p>
    </section>
  );
}
