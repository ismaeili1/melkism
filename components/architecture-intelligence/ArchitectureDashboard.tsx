"use client";

import ArchitectureOverview from "./ArchitectureOverview";
import ArchitectureAnalysisPanel from "./ArchitectureAnalysisPanel";
import ArchitectureRecommendations from "./ArchitectureRecommendations";

export default function ArchitectureDashboard() {
  return (
    <section
      aria-label="Architecture Intelligence"
      style={{
        display: "grid",
        gap: "1.5rem",
      }}
    >
      <ArchitectureOverview />
      <ArchitectureAnalysisPanel />
      <ArchitectureRecommendations />
    </section>
  );
}