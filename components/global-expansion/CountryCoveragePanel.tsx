import type { MarketCoverage } from "@/lib/global-expansion/market-coverage.types";

interface CountryCoveragePanelProps {
  coverage?: MarketCoverage[];
}

export default function CountryCoveragePanel({
  coverage = [],
}: CountryCoveragePanelProps) {
  return (
    <section aria-label="Country coverage">
      <h2>Country & Market Coverage</h2>
      <p>Markets: {coverage.length}</p>
    </section>
  );
}