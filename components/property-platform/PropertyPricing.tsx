import type { PropertyPricing as PropertyPricingModel } from "@/lib/property-platform/property.types";

interface PropertyPricingProps {
  pricing?: PropertyPricingModel;
}

export default function PropertyPricing({
  pricing,
}: PropertyPricingProps) {
  if (!pricing) {
    return <div>No pricing information available.</div>;
  }

  const values: string[] = [];

  if (pricing.salePrice !== undefined) {
    values.push(
      `Sale: ${pricing.salePrice.toLocaleString()} ${pricing.currency}`
    );
  }

  if (pricing.rentPrice !== undefined) {
    values.push(
      `Rent: ${pricing.rentPrice.toLocaleString()} ${pricing.currency}`
    );
  }

  return (
    <section aria-label="Property pricing">
      {values.length > 0
        ? values.map((value) => <div key={value}>{value}</div>)
        : "No pricing information available."}
    </section>
  );
}