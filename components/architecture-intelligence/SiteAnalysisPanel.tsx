import type { SiteAnalysisResult } from "@/lib/architecture-intelligence/site-analysis.types";

interface SiteAnalysisPanelProps {
  result?: SiteAnalysisResult;
}

export default function SiteAnalysisPanel({
  result,
}: SiteAnalysisPanelProps) {
  if (!result) {
    return (
      <section aria-label="Site analysis">
        <h2>Site Analysis</h2>
        <p>No site analysis available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Site analysis">
      <h2>Site Analysis</h2>
      <p>Confidence: {result.confidence}</p>
      <p>
        Opportunities: {result.opportunities.length}
      </p>
      <p>
        Constraints: {result.constraints.length}
      </p>
    </section>
  );
}