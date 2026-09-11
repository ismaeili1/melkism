import type { ClimateContext } from "@/lib/architecture-intelligence/climate-analysis.types";

interface ClimateDesignPanelProps {
  climate?: ClimateContext;
}

export default function ClimateDesignPanel({
  climate,
}: ClimateDesignPanelProps) {
  if (!climate) {
    return (
      <section aria-label="Climate design">
        <h2>Climate Design</h2>
        <p>No climate context available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Climate design">
      <h2>Climate Design</h2>
      <p>Climate zone: {climate.zone}</p>
    </section>
  );
}
