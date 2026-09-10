import {
  InMemoryCityRepository,
  type CityRepository,
} from "./city.repository";

import type {
  CityRecord,
  CityStatus,
} from "./city.types";

export type CreateCityInput =
  Omit<CityRecord, "createdAt" | "updatedAt">;

export class CityService {
  constructor(
    private readonly repository: CityRepository =
      new InMemoryCityRepository()
  ) {}

  async create(
    input: CreateCityInput
  ): Promise<CityRecord> {
    const now = new Date().toISOString();

    return this.repository.create({
      ...input,
      createdAt: now,
      updatedAt: now,
    });
  }

  async getById(
    id: string
  ): Promise<CityRecord | null> {
    return this.repository.getById(id);
  }

  async getBySlug(
    slug: string
  ): Promise<CityRecord | null> {
    return this.repository.getBySlug(slug);
  }

  async changeStatus(
    id: string,
    status: CityStatus
  ): Promise<CityRecord | null> {
    const city = await this.repository.getById(id);

    if (!city) {
      return null;
    }

    return this.repository.update({
      ...city,
      status,
      updatedAt: new Date().toISOString(),
    });
  }

  async list(
    limit = 100
  ): Promise<CityRecord[]> {
    return this.repository.list(limit);
  }
}