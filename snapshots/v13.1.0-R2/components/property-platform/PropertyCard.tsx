import type { PropertyRecord } from "@/lib/property-platform/property.types";

interface PropertyCardProps {
  property: PropertyRecord;
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <article>
      <h3>{property.title}</h3>

      <p>
        {property.location.cityName ?? property.location.countryName ?? ""}
      </p>

      <p>
        {property.classification.propertyType}
      </p>

      <p>
        {property.status}
      </p>
    </article>
  );
}
