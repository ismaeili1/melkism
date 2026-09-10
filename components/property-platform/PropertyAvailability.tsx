import type { PropertyAvailability } from "@/lib/property-platform/property.types";

interface PropertyAvailabilityProps {
  availability?: PropertyAvailability;
}

export default function PropertyAvailability({
  availability,
}: PropertyAvailabilityProps) {
  if (!availability) {
    return <div>Availability information unavailable.</div>;
  }

  return (
    <section aria-label="Property availability">
      <strong>
        {availability.status ?? (availability.available ? "available" : "unavailable")}
      </strong>
    </section>
  );
}