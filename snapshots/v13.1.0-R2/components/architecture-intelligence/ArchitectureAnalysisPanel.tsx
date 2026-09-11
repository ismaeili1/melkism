"use client";

import { useState } from "react";

export default function ArchitectureAnalysisPanel() {
  const [active, setActive] = useState("design");

  return (
    <section aria-label="Architecture analysis">
      <h2>Analysis</h2>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {[
          "design",
          "site",
          "spatial",
          "climate",
          "performance",
        ].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setActive(item)}
            aria-pressed={active === item}
          >
            {item}
          </button>
        ))}
      </div>

      <p>Active analysis: {active}</p>
    </section>
  );
}
