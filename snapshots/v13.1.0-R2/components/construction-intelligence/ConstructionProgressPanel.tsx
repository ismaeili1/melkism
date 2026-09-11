import type { ConstructionProgressAssessment } from "@/lib/construction-intelligence/construction-progress.types";

interface ConstructionProgressPanelProps {
  assessment?: ConstructionProgressAssessment;
}

export default function ConstructionProgressPanel({
  assessment,
}: ConstructionProgressPanelProps) {
  if (!assessment) {
    return (
      <section aria-label="Construction progress">
        <h2>Progress</h2>
        <p>No construction progress assessment available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Construction progress">
      <h2>Progress</h2>
      <p>
        Current progress: {assessment.currentProgressPercent}%
      </p>
      <p>Status: {assessment.status}</p>
    </section>
  );
}
