"use client";

import GlobalOverview from "./GlobalOverview";
import CountryCoveragePanel from "./CountryCoveragePanel";
import LocaleCoveragePanel from "./LocaleCoveragePanel";
import CurrencyCoveragePanel from "./CurrencyCoveragePanel";
import JurisdictionPanel from "./JurisdictionPanel";
import ExpansionReadinessPanel from "./ExpansionReadinessPanel";

export default function GlobalExpansionDashboard() {
  return (
    <section
      aria-label="Global Expansion"
      style={{
        display: "grid",
        gap: "1.5rem",
      }}
    >
      <GlobalOverview />
      <CountryCoveragePanel />
      <LocaleCoveragePanel />
      <CurrencyCoveragePanel />
      <JurisdictionPanel />
      <ExpansionReadinessPanel />
    </section>
  );
}