import type { ConstructionProject } from "./construction-project.types";

export interface ConstructionProjectRepository {
  getById(id: string): Promise<ConstructionProject | null>;
  getByPropertyId(propertyId: string): Promise<ConstructionProject[]>;
  create(project: ConstructionProject): Promise<ConstructionProject>;
  update(project: ConstructionProject): Promise<ConstructionProject>;
  list(limit?: number): Promise<ConstructionProject[]>;
}

export class InMemoryConstructionProjectRepository
  implements ConstructionProjectRepository
{
  private readonly items = new Map<string, ConstructionProject>();

  async getById(
    id: string
  ): Promise<ConstructionProject | null> {
    return this.items.get(id) ?? null;
  }

  async getByPropertyId(
    propertyId: string
  ): Promise<ConstructionProject[]> {
    return Array.from(this.items.values()).filter(
      (project) => project.propertyId === propertyId
    );
  }

  async create(
    project: ConstructionProject
  ): Promise<ConstructionProject> {
    this.items.set(project.id, project);
    return project;
  }

  async update(
    project: ConstructionProject
  ): Promise<ConstructionProject> {
    this.items.set(project.id, project);
    return project;
  }

  async list(
    limit = 100
  ): Promise<ConstructionProject[]> {
    return Array.from(this.items.values()).slice(0, limit);
  }
}