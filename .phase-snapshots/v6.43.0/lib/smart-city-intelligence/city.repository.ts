import type { CityRecord } from "./city.types";

export interface CityRepository {
  getById(id: string): Promise<CityRecord | null>;
  getBySlug(slug: string): Promise<CityRecord | null>;
  create(city: CityRecord): Promise<CityRecord>;
  update(city: CityRecord): Promise<CityRecord>;
  list(limit?: number): Promise<CityRecord[]>;
}

export class InMemoryCityRepository
  implements CityRepository
{
  private readonly items = new Map<string, CityRecord>();

  async getById(id: string): Promise<CityRecord | null> {
    return this.items.get(id) ?? null;
  }

  async getBySlug(slug: string): Promise<CityRecord | null> {
    for (const city of this.items.values()) {
      if (city.slug === slug) {
        return city;
      }
    }

    return null;
  }

  async create(city: CityRecord): Promise<CityRecord> {
    this.items.set(city.id, city);
    return city;
  }

  async update(city: CityRecord): Promise<CityRecord> {
    this.items.set(city.id, city);
    return city;
  }

  async list(limit = 100): Promise<CityRecord[]> {
    return Array.from(this.items.values()).slice(0, limit);
  }
}