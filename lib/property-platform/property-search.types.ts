export interface PropertySearchInput {
  query?: string;
  propertyKind?: string;
  propertyType?: string;
  purpose?: string;
  countryCode?: string;
  regionCode?: string;
  cityCode?: string;
  districtCode?: string;
  minPrice?: number;
  maxPrice?: number;
  currency?: string;
  minArea?: number;
  maxArea?: number;
  bedrooms?: number;
  bathrooms?: number;
  latitude?: number;
  longitude?: number;
  radiusKm?: number;
  page?: number;
  pageSize?: number;
}

export interface PropertySearchCandidate {
  propertyId: string;
  listingId?: string;
  score: number;
  reasons: string[];
}

export interface PropertySearchResult {
  items: PropertySearchCandidate[];
  total: number;
  page: number;
  pageSize: number;
}