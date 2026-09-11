import type { ComplianceAssessment } from "@/lib/enterprise-governance/compliance.types";

interface CompliancePanelProps {
  assessment?: ComplianceAssessment;
}

export default function CompliancePanel({
  assessment,
}: CompliancePanelProps) {
  if (!assessment) {
    return (
      <section aria-label="Compliance governance">
        <h2>Compliance</h2>
        <p>No compliance assessment available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Compliance governance">
      <h2>Compliance</h2>
      <p>Framework: {assessment.framework}</p>
      <p>Status: {assessment.status}</p>
      <p>Score: {assessment.score.toFixed(1)}</p>
    </section>
  );
}
