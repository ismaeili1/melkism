"use client";

import IdentitySecurityPanel from "./IdentitySecurityPanel";
import AccessControlPanel from "./AccessControlPanel";
import AuditPanel from "./AuditPanel";
import TrustPanel from "./TrustPanel";
import SecurityRiskPanel from "./SecurityRiskPanel";

export default function SecurityDashboard() {
  return (
    <section
      aria-label="Security and Trust"
      style={{
        display: "grid",
        gap: "1.5rem",
      }}
    >
      <IdentitySecurityPanel />
      <AccessControlPanel />
      <AuditPanel />
      <TrustPanel />
      <SecurityRiskPanel />
    </section>
  );
}