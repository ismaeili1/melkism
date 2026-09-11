export interface PropertyGeoPoint {
  latitude: number;
  longitude: number;
}

export interface PropertyAddress {
  countryCode: string;
  countryName?: string;
  regionCode?: string;
  regionName?: string;
  cityCode?: string;
  cityName?: string;
  districtCode?: string;
  districtName?: string;
  postalCode?: string;
  addressLine?: string;
}

export interface PropertyLocationRecord {
  address: PropertyAddress;
  point?: PropertyGeoPoint;
  timezone?: string;
  accuracy?: "exact" | "building" | "street" | "district" | "city" | "region" | "country" | "unknown";
}