"use client";

import OrganizationGovernancePanel from "./OrganizationGovernancePanel";
import PolicyGovernancePanel from "./PolicyGovernancePanel";
import CompliancePanel from "./CompliancePanel";
import DataGovernancePanel from "./DataGovernancePanel";
import GovernanceRiskPanel from "./GovernanceRiskPanel";
import GovernanceDecisionPanel from "./GovernanceDecisionPanel";

export default function GovernanceDashboard() {
  return (
    <section
      aria-label="Enterprise Governance"
      style={{
        display: "grid",
        gap: "1.5rem",
      }}
    >
      <OrganizationGovernancePanel />
      <PolicyGovernancePanel />
      <CompliancePanel />
      <DataGovernancePanel />
      <GovernanceRiskPanel />
      <GovernanceDecisionPanel />
    </section>
  );
}
