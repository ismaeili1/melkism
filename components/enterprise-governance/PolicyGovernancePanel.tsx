import type { GovernancePolicy } from "@/lib/enterprise-governance/governance-policy.types";

interface PolicyGovernancePanelProps {
  policies?: GovernancePolicy[];
}

export default function PolicyGovernancePanel({
  policies = [],
}: PolicyGovernancePanelProps) {
  return (
    <section aria-label="Governance policies">
      <h2>Policies</h2>
      <p>Policies: {policies.length}</p>
    </section>
  );
}