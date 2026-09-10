import {
  InMemoryOrganizationRepository,
  type OrganizationRepository,
} from "./organization.repository";

import type {
  OrganizationRecord,
  OrganizationStatus,
} from "./organization.types";

export type CreateOrganizationInput =
  Omit<OrganizationRecord, "createdAt" | "updatedAt">;

export class OrganizationService {
  constructor(
    private readonly repository: OrganizationRepository =
      new InMemoryOrganizationRepository()
  ) {}

  async create(
    input: CreateOrganizationInput
  ): Promise<OrganizationRecord> {
    const now = new Date().toISOString();

    return this.repository.create({
      ...input,
      createdAt: now,
      updatedAt: now,
    });
  }

  async getById(
    id: string
  ): Promise<OrganizationRecord | null> {
    return this.repository.getById(id);
  }

  async getBySlug(
    slug: string
  ): Promise<OrganizationRecord | null> {
    return this.repository.getBySlug(slug);
  }

  async changeStatus(
    id: string,
    status: OrganizationStatus
  ): Promise<OrganizationRecord | null> {
    const organization =
      await this.repository.getById(id);

    if (!organization) {
      return null;
    }

    return this.repository.update({
      ...organization,
      status,
      updatedAt: new Date().toISOString(),
    });
  }

  async list(
    limit = 100
  ): Promise<OrganizationRecord[]> {
    return this.repository.list(limit);
  }
}