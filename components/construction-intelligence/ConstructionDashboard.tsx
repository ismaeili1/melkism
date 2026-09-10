"use client";

import ConstructionOverview from "./ConstructionOverview";
import ConstructionProgressPanel from "./ConstructionProgressPanel";
import ConstructionRiskPanel from "./ConstructionRiskPanel";
import ConstructionCostPanel from "./ConstructionCostPanel";

export default function ConstructionDashboard() {
  return (
    <section
      aria-label="Construction Intelligence"
      style={{
        display: "grid",
        gap: "1.5rem",
      }}
    >
      <ConstructionOverview />
      <ConstructionProgressPanel />
      <ConstructionRiskPanel />
      <ConstructionCostPanel />
    </section>
  );
}