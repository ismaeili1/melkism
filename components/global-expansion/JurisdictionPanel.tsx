import type { JurisdictionRecord } from "@/lib/global-expansion/jurisdiction.types";

interface JurisdictionPanelProps {
  jurisdictions?: JurisdictionRecord[];
}

export default function JurisdictionPanel({
  jurisdictions = [],
}: JurisdictionPanelProps) {
  return (
    <section aria-label="Jurisdiction coverage">
      <h2>Jurisdictions</h2>
      <p>Jurisdictions: {jurisdictions.length}</p>
    </section>
  );
}