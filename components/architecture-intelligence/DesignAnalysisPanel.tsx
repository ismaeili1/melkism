import type { DesignAnalysisResult } from "@/lib/architecture-intelligence/design-analysis.types";

interface DesignAnalysisPanelProps {
  result?: DesignAnalysisResult;
}

export default function DesignAnalysisPanel({
  result,
}: DesignAnalysisPanelProps) {
  if (!result) {
    return (
      <section aria-label="Design analysis">
        <h2>Design Analysis</h2>
        <p>No design analysis available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Design analysis">
      <h2>Design Analysis</h2>
      <p>Overall score: {result.overallScore}</p>
      <p>
        Confidence: {result.overallConfidence}
      </p>
    </section>
  );
}