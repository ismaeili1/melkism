import type { ArchitectureProject } from "./architecture-project.types";

export interface ArchitectureProjectRepository {
  getById(id: string): Promise<ArchitectureProject | null>;
  getByPropertyId(propertyId: string): Promise<ArchitectureProject[]>;
  create(project: ArchitectureProject): Promise<ArchitectureProject>;
  update(project: ArchitectureProject): Promise<ArchitectureProject>;
  list(limit?: number): Promise<ArchitectureProject[]>;
}

export class InMemoryArchitectureProjectRepository
  implements ArchitectureProjectRepository
{
  private readonly items = new Map<string, ArchitectureProject>();

  async getById(
    id: string
  ): Promise<ArchitectureProject | null> {
    return this.items.get(id) ?? null;
  }

  async getByPropertyId(
    propertyId: string
  ): Promise<ArchitectureProject[]> {
    return Array.from(this.items.values()).filter(
      (project) => project.propertyId === propertyId
    );
  }

  async create(
    project: ArchitectureProject
  ): Promise<ArchitectureProject> {
    this.items.set(project.id, project);
    return project;
  }

  async update(
    project: ArchitectureProject
  ): Promise<ArchitectureProject> {
    this.items.set(project.id, project);
    return project;
  }

  async list(
    limit = 100
  ): Promise<ArchitectureProject[]> {
    return Array.from(this.items.values()).slice(0, limit);
  }
}