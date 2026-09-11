import type { UrbanRisk } from "@/lib/smart-city-intelligence/urban-risk.types";

interface UrbanRiskPanelProps {
  risks?: UrbanRisk[];
}

export default function UrbanRiskPanel({
  risks = [],
}: UrbanRiskPanelProps) {
  return (
    <section aria-label="Urban risks">
      <h2>Urban Risks</h2>

      {risks.length === 0 ? (
        <p>No urban risks available.</p>
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
