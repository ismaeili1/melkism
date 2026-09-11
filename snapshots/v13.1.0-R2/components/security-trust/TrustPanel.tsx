import type { TrustScore } from "@/lib/security-trust/trust.types";

interface TrustPanelProps {
  score?: TrustScore;
}

export default function TrustPanel({
  score,
}: TrustPanelProps) {
  if (!score) {
    return (
      <section aria-label="Trust intelligence">
        <h2>Trust</h2>
        <p>No trust score available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Trust intelligence">
      <h2>Trust</h2>
      <p>Score: {score.score.toFixed(1)}</p>
      <p>Confidence: {score.confidence.toFixed(2)}</p>
    </section>
  );
}
