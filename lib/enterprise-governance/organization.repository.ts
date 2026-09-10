import type { OrganizationRecord } from "./organization.types";

export interface OrganizationRepository {
  getById(id: string): Promise<OrganizationRecord | null>;
  getBySlug(slug: string): Promise<OrganizationRecord | null>;
  create(
    organization: OrganizationRecord
  ): Promise<OrganizationRecord>;
  update(
    organization: OrganizationRecord
  ): Promise<OrganizationRecord>;
  list(limit?: number): Promise<OrganizationRecord[]>;
}

export class InMemoryOrganizationRepository
  implements OrganizationRepository
{
  private readonly items = new Map<
    string,
    OrganizationRecord
  >();

  async getById(
    id: string
  ): Promise<OrganizationRecord | null> {
    return this.items.get(id) ?? null;
  }

  async getBySlug(
    slug: string
  ): Promise<OrganizationRecord | null> {
    for (const organization of this.items.values()) {
      if (organization.slug === slug) {
        return organization;
      }
    }

    return null;
  }

  async create(
    organization: OrganizationRecord
  ): Promise<OrganizationRecord> {
    this.items.set(organization.id, organization);
    return organization;
  }

  async update(
    organization: OrganizationRecord
  ): Promise<OrganizationRecord> {
    this.items.set(organization.id, organization);
    return organization;
  }

  async list(
    limit = 100
  ): Promise<OrganizationRecord[]> {
    return Array.from(
      this.items.values()
    ).slice(0, limit);
  }
}