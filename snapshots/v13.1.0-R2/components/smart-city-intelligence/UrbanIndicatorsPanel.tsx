import type { UrbanIndicator } from "@/lib/smart-city-intelligence/urban-indicator.types";

interface UrbanIndicatorsPanelProps {
  indicators?: UrbanIndicator[];
}

export default function UrbanIndicatorsPanel({
  indicators = [],
}: UrbanIndicatorsPanelProps) {
  return (
    <section aria-label="Urban indicators">
      <h2>Urban Indicators</h2>
      <p>Indicators tracked: {indicators.length}</p>
    </section>
  );
}
