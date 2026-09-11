import {
  InMemoryListingRepository,
  type ListingRepository,
} from "./listing.repository";
import type { PropertyListing } from "./property-listing.types";

export class ListingService {
  constructor(
    private readonly repository: ListingRepository = new InMemoryListingRepository()
  ) {}

  async create(
    input: Omit<PropertyListing, "createdAt" | "updatedAt">
  ): Promise<PropertyListing> {
    const now = new Date().toISOString();

    return this.repository.create({
      ...input,
      createdAt: now,
      updatedAt: now,
    });
  }

  async getById(id: string): Promise<PropertyListing | null> {
    return this.repository.getById(id);
  }

  async getByPropertyId(propertyId: string): Promise<PropertyListing[]> {
    return this.repository.getByPropertyId(propertyId);
  }

  async update(listing: PropertyListing): Promise<PropertyListing> {
    return this.repository.update({
      ...listing,
      updatedAt: new Date().toISOString(),
    });
  }
}