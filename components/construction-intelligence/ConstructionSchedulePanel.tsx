import type { ConstructionScheduleAssessment } from "@/lib/construction-intelligence/construction-schedule.types";

interface ConstructionSchedulePanelProps {
  assessment?: ConstructionScheduleAssessment;
}

export default function ConstructionSchedulePanel({
  assessment,
}: ConstructionSchedulePanelProps) {
  if (!assessment) {
    return (
      <section aria-label="Construction schedule">
        <h2>Schedule Intelligence</h2>
        <p>No construction schedule assessment available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Construction schedule">
      <h2>Schedule Intelligence</h2>
      <p>
        Progress: {assessment.overallProgressPercent.toFixed(1)}%
      </p>
      <p>Risk: {assessment.scheduleRisk}</p>
    </section>
  );
}