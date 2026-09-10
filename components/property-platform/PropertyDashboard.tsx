"use client";

import PropertySearchPanel from "./PropertySearchPanel";
import PropertyResults from "./PropertyResults";

export default function PropertyDashboard() {
  return (
    <section
      aria-label="Property Platform"
      style={{
        display: "grid",
        gap: "1.5rem",
      }}
    >
      <PropertySearchPanel />
      <PropertyResults />
    </section>
  );
}