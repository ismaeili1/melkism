import {
  InMemoryPropertyRepository,
  type PropertyRepository,
} from "./property.repository";
import type {
  PropertyRecord,
  PropertyStatus,
} from "./property.types";

export type CreatePropertyInput =
  Omit<PropertyRecord, "createdAt" | "updatedAt">;

export class PropertyService {
  constructor(
    private readonly repository: PropertyRepository = new InMemoryPropertyRepository()
  ) {}

  async create(input: CreatePropertyInput): Promise<PropertyRecord> {
    const now = new Date().toISOString();

    return this.repository.create({
      ...input,
      createdAt: now,
      updatedAt: now,
    });
  }

  async getById(id: string): Promise<PropertyRecord | null> {
    return this.repository.getById(id);
  }

  async getBySlug(slug: string): Promise<PropertyRecord | null> {
    return this.repository.getBySlug(slug);
  }

  async updateStatus(
    id: string,
    status: PropertyStatus
  ): Promise<PropertyRecord | null> {
    const property = await this.repository.getById(id);

    if (!property) {
      return null;
    }

    return this.repository.update({
      ...property,
      status,
      updatedAt: new Date().toISOString(),
    });
  }

  async list(limit = 50): Promise<PropertyRecord[]> {
    return this.repository.list(limit);
  }
}