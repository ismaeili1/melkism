import type { ConstructionRisk } from "@/lib/construction-intelligence/construction-risk.types";

interface ConstructionRiskPanelProps {
  risks?: ConstructionRisk[];
}

export default function ConstructionRiskPanel({
  risks = [],
}: ConstructionRiskPanelProps) {
  return (
    <section aria-label="Construction risks">
      <h2>Risks</h2>

      {risks.length === 0 ? (
        <p>No construction risks available.</p>
      ) : (
        risks.map((risk) => (
          <article key={risk.id}>
            <h3>{risk.title}</h3>
            <p>{risk.description}</p>
            <p>Severity: {risk.severity}</p>
          </article>
        ))
      )}
    </section>
  );
}