import type { SecurityRisk } from "@/lib/security-trust/security-risk.types";

interface SecurityRiskPanelProps {
  risks?: SecurityRisk[];
}

export default function SecurityRiskPanel({
  risks = [],
}: SecurityRiskPanelProps) {
  return (
    <section aria-label="Security risks">
      <h2>Security Risks</h2>

      {risks.length === 0 ? (
        <p>No security risks available.</p>
      ) : (
        risks.map((risk) => (
          <article key={risk.id}>
            <h3>{risk.category}</h3>
            <p>
              Severity: {risk.severity}
            </p>
            <p>
              Score: {risk.score.toFixed(2)}
            </p>
          </article>
        ))
      )}
    </section>
  );
}