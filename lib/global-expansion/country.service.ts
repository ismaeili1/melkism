import {
  InMemoryCountryRepository,
  type CountryRepository,
} from "./country.repository";

import type {
  CountryRecord,
  CountryStatus,
} from "./country.types";

export type CreateCountryInput =
  Omit<CountryRecord, "createdAt" | "updatedAt">;

export class CountryService {
  constructor(
    private readonly repository: CountryRepository =
      new InMemoryCountryRepository()
  ) {}

  async create(
    input: CreateCountryInput
  ): Promise<CountryRecord> {
    const now = new Date().toISOString();

    return this.repository.create({
      ...input,
      createdAt: now,
      updatedAt: now,
    });
  }

  async getById(
    id: string
  ): Promise<CountryRecord | null> {
    return this.repository.getById(id);
  }

  async getByIso2(
    iso2: string
  ): Promise<CountryRecord | null> {
    return this.repository.getByIso2(iso2);
  }

  async changeStatus(
    id: string,
    status: CountryStatus
  ): Promise<CountryRecord | null> {
    const country =
      await this.repository.getById(id);

    if (!country) {
      return null;
    }

    return this.repository.update({
      ...country,
      status,
      updatedAt: new Date().toISOString(),
    });
  }
}