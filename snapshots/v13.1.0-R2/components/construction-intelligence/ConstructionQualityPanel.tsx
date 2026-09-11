import type { ConstructionQualityAssessment } from "@/lib/construction-intelligence/construction-quality.types";

interface ConstructionQualityPanelProps {
  assessment?: ConstructionQualityAssessment;
}

export default function ConstructionQualityPanel({
  assessment,
}: ConstructionQualityPanelProps) {
  if (!assessment) {
    return (
      <section aria-label="Construction quality">
        <h2>Quality Intelligence</h2>
        <p>No construction quality assessment available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Construction quality">
      <h2>Quality Intelligence</h2>
      <p>Quality score: {assessment.qualityScore}</p>
      <p>Inspected items: {assessment.inspectedItems}</p>
    </section>
  );
}
