import type { MobilityAssessment } from "@/lib/smart-city-intelligence/mobility.types";

interface MobilityPanelProps {
  assessment?: MobilityAssessment;
}

export default function MobilityPanel({
  assessment,
}: MobilityPanelProps) {
  if (!assessment) {
    return (
      <section aria-label="Mobility intelligence">
        <h2>Mobility Intelligence</h2>
        <p>No mobility assessment available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Mobility intelligence">
      <h2>Mobility Intelligence</h2>
      <p>
        Accessibility score: {assessment.accessibilityScore}
      </p>
      <p>
        Congestion: {assessment.congestionLevel}
      </p>
    </section>
  );
}