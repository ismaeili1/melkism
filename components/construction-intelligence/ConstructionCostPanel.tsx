import type { ConstructionCostAssessment } from "@/lib/construction-intelligence/construction-cost.types";

interface ConstructionCostPanelProps {
  assessment?: ConstructionCostAssessment;
}

export default function ConstructionCostPanel({
  assessment,
}: ConstructionCostPanelProps) {
  if (!assessment) {
    return (
      <section aria-label="Construction cost">
        <h2>Cost Intelligence</h2>
        <p>No construction cost assessment available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Construction cost">
      <h2>Cost Intelligence</h2>
      <p>
        Estimated total:{" "}
        {assessment.estimatedTotal.toLocaleString()}{" "}
        {assessment.currency}
      </p>
      <p>Risk: {assessment.riskLevel}</p>
    </section>
  );
}