import type { PropertyListing } from "./property-listing.types";

export interface ListingRepository {
  getById(id: string): Promise<PropertyListing | null>;
  getByPropertyId(propertyId: string): Promise<PropertyListing[]>;
  create(listing: PropertyListing): Promise<PropertyListing>;
  update(listing: PropertyListing): Promise<PropertyListing>;
}

export class InMemoryListingRepository implements ListingRepository {
  private readonly items = new Map<string, PropertyListing>();

  async getById(id: string): Promise<PropertyListing | null> {
    return this.items.get(id) ?? null;
  }

  async getByPropertyId(propertyId: string): Promise<PropertyListing[]> {
    return Array.from(this.items.values()).filter(
      (item) => item.propertyId === propertyId
    );
  }

  async create(listing: PropertyListing): Promise<PropertyListing> {
    this.items.set(listing.id, listing);
    return listing;
  }

  async update(listing: PropertyListing): Promise<PropertyListing> {
    this.items.set(listing.id, listing);
    return listing;
  }
}