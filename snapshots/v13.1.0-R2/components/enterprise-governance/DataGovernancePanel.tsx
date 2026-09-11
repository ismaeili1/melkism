import type { DataGovernanceRecord } from "@/lib/enterprise-governance/data-governance.types";

interface DataGovernancePanelProps {
  records?: DataGovernanceRecord[];
}

export default function DataGovernancePanel({
  records = [],
}: DataGovernancePanelProps) {
  return (
    <section aria-label="Data governance">
      <h2>Data Governance</h2>
      <p>Governed resources: {records.length}</p>
    </section>
  );
}
