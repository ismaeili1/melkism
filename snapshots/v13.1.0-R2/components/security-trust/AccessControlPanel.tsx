import type { AccessDecision } from "@/lib/security-trust/resource-access.types";

interface AccessControlPanelProps {
  decision?: AccessDecision;
}

export default function AccessControlPanel({
  decision,
}: AccessControlPanelProps) {
  if (!decision) {
    return (
      <section aria-label="Access control">
        <h2>Access Control</h2>
        <p>No access decision available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Access control">
      <h2>Access Control</h2>
      <p>
        Decision: {decision.allowed ? "allowed" : "denied"}
      </p>
      <p>Reason: {decision.reason}</p>
    </section>
  );
}
