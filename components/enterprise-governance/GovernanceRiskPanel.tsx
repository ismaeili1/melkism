import type { GovernanceRisk } from "@/lib/enterprise-governance/governance-risk.types";

interface GovernanceRiskPanelProps {
  risks?: GovernanceRisk[];
}

export default function GovernanceRiskPanel({
  risks = [],
}: GovernanceRiskPanelProps) {
  return (
    <section aria-label="Governance risks">
      <h2>Governance Risks</h2>

      {risks.length === 0 ? (
        <p>No governance risks available.</p>
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