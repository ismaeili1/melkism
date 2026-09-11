import type { GovernanceDecision } from "@/lib/enterprise-governance/governance-decision.types";

interface GovernanceDecisionPanelProps {
  decisions?: GovernanceDecision[];
}

export default function GovernanceDecisionPanel({
  decisions = [],
}: GovernanceDecisionPanelProps) {
  return (
    <section aria-label="Governance decisions">
      <h2>Governance Decisions</h2>

      {decisions.length === 0 ? (
        <p>No governance decisions available.</p>
      ) : (
        decisions.map((decision) => (
          <article key={decision.id}>
            <h3>{decision.title}</h3>
            <p>{decision.rationale}</p>
            <p>Status: {decision.status}</p>
          </article>
        ))
      )}
    </section>
  );
}
