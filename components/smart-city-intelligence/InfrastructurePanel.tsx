import type { InfrastructureAssessment } from "@/lib/smart-city-intelligence/infrastructure.types";

interface InfrastructurePanelProps {
  assessment?: InfrastructureAssessment;
}

export default function InfrastructurePanel({
  assessment,
}: InfrastructurePanelProps) {
  if (!assessment) {
    return (
      <section aria-label="Infrastructure intelligence">
        <h2>Infrastructure Intelligence</h2>
        <p>No infrastructure assessment available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Infrastructure intelligence">
      <h2>Infrastructure Intelligence</h2>
      <p>Assets: {assessment.assets.length}</p>
      <p>Capacity risk: {assessment.capacityRisk}</p>
    </section>
  );
}