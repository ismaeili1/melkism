import type { PropertyLocation as PropertyLocationModel } from "@/lib/property-platform/property.types";

interface PropertyLocationProps {
  location: PropertyLocationModel;
}

export default function PropertyLocation({
  location,
}: PropertyLocationProps) {
  return (
    <address>
      {location.addressLine && <div>{location.addressLine}</div>}
      {location.districtName && <div>{location.districtName}</div>}
      {location.cityName && <div>{location.cityName}</div>}
      {location.regionName && <div>{location.regionName}</div>}
      <div>{location.countryName ?? location.countryCode}</div>
    </address>
  );
}
