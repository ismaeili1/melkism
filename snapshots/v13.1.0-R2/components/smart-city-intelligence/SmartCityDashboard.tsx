"use client";

import CityOverview from "./CityOverview";
import UrbanIndicatorsPanel from "./UrbanIndicatorsPanel";
import MobilityPanel from "./MobilityPanel";
import InfrastructurePanel from "./InfrastructurePanel";
import UrbanEnvironmentPanel from "./UrbanEnvironmentPanel";
import UrbanRiskPanel from "./UrbanRiskPanel";

export default function SmartCityDashboard() {
  return (
    <section
      aria-label="Smart City Intelligence"
      style={{
        display: "grid",
        gap: "1.5rem",
      }}
    >
      <CityOverview />
      <UrbanIndicatorsPanel />
      <MobilityPanel />
      <InfrastructurePanel />
      <UrbanEnvironmentPanel />
      <UrbanRiskPanel />
    </section>
  );
}
