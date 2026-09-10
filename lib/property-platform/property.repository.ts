import type { PropertyRecord } from "./property.types";

export interface PropertyRepository {
  getById(id: string): Promise<PropertyRecord | null>;
  getBySlug(slug: string): Promise<PropertyRecord | null>;
  create(property: PropertyRecord): Promise<PropertyRecord>;
  update(property: PropertyRecord): Promise<PropertyRecord>;
  list(limit?: number): Promise<PropertyRecord[]>;
}

export class InMemoryPropertyRepository implements PropertyRepository {
  private readonly items = new Map<string, PropertyRecord>();

  async getById(id: string): Promise<PropertyRecord | null> {
    return this.items.get(id) ?? null;
  }

  async getBySlug(slug: string): Promise<PropertyRecord | null> {
    for (const item of this.items.values()) {
      if (item.slug === slug) {
        return item;
      }
    }

    return null;
  }

  async create(property: PropertyRecord): Promise<PropertyRecord> {
    this.items.set(property.id, property);
    return property;
  }

  async update(property: PropertyRecord): Promise<PropertyRecord> {
    this.items.set(property.id, property);
    return property;
  }

  async list(limit = 50): Promise<PropertyRecord[]> {
    return Array.from(this.items.values()).slice(0, limit);
  }
}