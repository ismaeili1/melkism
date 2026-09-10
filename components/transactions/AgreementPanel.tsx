import type { AgreementRecord } from "@/lib/transactions/agreement.types";

interface AgreementPanelProps {
  agreement?: AgreementRecord;
}

export default function AgreementPanel({
  agreement,
}: AgreementPanelProps) {
  if (!agreement) {
    return (
      <section aria-label="Agreement">
        <h2>Agreement</h2>
        <p>No agreement available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Agreement">
      <h2>{agreement.title}</h2>
      <p>Status: {agreement.status}</p>
      <p>Version: {agreement.version}</p>
    </section>
  );
}