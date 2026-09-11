import type {
  PropertySearchInput,
  PropertySearchResult,
} from "./property-search.types";
import type { PropertyRepository } from "./property.repository";

export class PropertyDiscoveryService {
  constructor(private readonly repository: PropertyRepository) {}

  async search(input: PropertySearchInput): Promise<PropertySearchResult> {
    const page = Math.max(1, input.page ?? 1);
    const pageSize = Math.min(100, Math.max(1, input.pageSize ?? 24));

    const all = await this.repository.list(1000);

    const query = input.query?.trim().toLowerCase();

    const filtered = all.filter((property) => {
      if (
        query &&
        !property.title.toLowerCase().includes(query) &&
        !property.slug.toLowerCase().includes(query)
      ) {
        return false;
      }

      if (
        input.propertyKind &&
        property.kind !== input.propertyKind
      ) {
        return false;
      }

      if (
        input.propertyType &&
        property.classification.propertyType !== input.propertyType
      ) {
        return false;
      }

      if (
        input.cityCode &&
        property.location.cityCode !== input.cityCode
      ) {
        return false;
      }

      if (
        input.countryCode &&
        property.location.countryCode !== input.countryCode
      ) {
        return false;
      }

      if (
        input.minPrice !== undefined &&
        property.pricing?.salePrice !== undefined &&
        property.pricing.salePrice < input.minPrice
      ) {
        return false;
      }

      if (
        input.maxPrice !== undefined &&
        property.pricing?.salePrice !== undefined &&
        property.pricing.salePrice > input.maxPrice
      ) {
        return false;
      }

      if (
        input.bedrooms !== undefined &&
        (property.attributes.bedrooms ?? 0) < input.bedrooms
      ) {
        return false;
      }

      return true;
    });

    const start = (page - 1) * pageSize;
    const pageItems = filtered.slice(start, start + pageSize);

    return {
      items: pageItems.map((property) => ({
        propertyId: property.id,
        score: 1,
        reasons: ["base_property_match"],
      })),
      total: filtered.length,
      page,
      pageSize,
    };
  }
}