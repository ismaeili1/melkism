import type { AuditRecord } from "@/lib/security-trust/audit.types";

interface AuditPanelProps {
  records?: AuditRecord[];
}

export default function AuditPanel({
  records = [],
}: AuditPanelProps) {
  return (
    <section aria-label="Audit trail">
      <h2>Audit Trail</h2>
      <p>Audit records: {records.length}</p>
    </section>
  );
}
