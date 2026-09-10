import type { PropertyRecord } from "@/lib/property-platform/property.types";

interface PropertyOverviewProps {
  property: PropertyRecord;
}

export default function PropertyOverview({
  property,
}: PropertyOverviewProps) {
  return (
    <section>
      <h1>{property.title}</h1>

      <p>
        Property ID: {property.id}
      </p>

      <p>
        Type: {property.classification.propertyType}
      </p>

      <p>
        Country: {property.location.countryCode}
      </p>
    </section>
  );
}