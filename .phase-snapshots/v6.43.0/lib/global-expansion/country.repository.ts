import type { CountryRecord } from "./country.types";

export interface CountryRepository {
  getById(id: string): Promise<CountryRecord | null>;
  getByIso2(iso2: string): Promise<CountryRecord | null>;
  create(country: CountryRecord): Promise<CountryRecord>;
  update(country: CountryRecord): Promise<CountryRecord>;
  list(limit?: number): Promise<CountryRecord[]>;
}

export class InMemoryCountryRepository
  implements CountryRepository
{
  private readonly items = new Map<string, CountryRecord>();

  async getById(
    id: string
  ): Promise<CountryRecord | null> {
    return this.items.get(id) ?? null;
  }

  async getByIso2(
    iso2: string
  ): Promise<CountryRecord | null> {
    const normalized = iso2.trim().toUpperCase();

    for (const country of this.items.values()) {
      if (country.iso2.toUpperCase() === normalized) {
        return country;
      }
    }

    return null;
  }

  async create(
    country: CountryRecord
  ): Promise<CountryRecord> {
    this.items.set(country.id, country);
    return country;
  }

  async update(
    country: CountryRecord
  ): Promise<CountryRecord> {
    this.items.set(country.id, country);
    return country;
  }

  async list(
    limit = 100
  ): Promise<CountryRecord[]> {
    return Array.from(
      this.items.values()
    ).slice(0, limit);
  }
}