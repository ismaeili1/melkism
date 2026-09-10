import type { CurrencyDefinition } from "@/lib/global-expansion/currency.types";

interface CurrencyCoveragePanelProps {
  currencies?: CurrencyDefinition[];
}

export default function CurrencyCoveragePanel({
  currencies = [],
}: CurrencyCoveragePanelProps) {
  return (
    <section aria-label="Currency coverage">
      <h2>Currency Coverage</h2>
      <p>Supported currencies: {currencies.length}</p>
    </section>
  );
}