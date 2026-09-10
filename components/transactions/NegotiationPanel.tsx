import type { NegotiationRecord } from "@/lib/transactions/negotiation.types";

interface NegotiationPanelProps {
  negotiation?: NegotiationRecord;
}

export default function NegotiationPanel({
  negotiation,
}: NegotiationPanelProps) {
  if (!negotiation) {
    return (
      <section aria-label="Negotiation">
        <h2>Negotiation</h2>
        <p>No active negotiation.</p>
      </section>
    );
  }

  return (
    <section aria-label="Negotiation">
      <h2>Negotiation</h2>
      <p>Status: {negotiation.status}</p>
      <p>Round: {negotiation.round}</p>
    </section>
  );
}