import {
  InMemoryConstructionProjectRepository,
  type ConstructionProjectRepository,
} from "./construction-project.repository";

import type {
  ConstructionProject,
  ConstructionProjectStatus,
} from "./construction-project.types";

export type CreateConstructionProjectInput =
  Omit<ConstructionProject, "createdAt" | "updatedAt">;

export class ConstructionProjectService {
  constructor(
    private readonly repository: ConstructionProjectRepository =
      new InMemoryConstructionProjectRepository()
  ) {}

  async create(
    input: CreateConstructionProjectInput
  ): Promise<ConstructionProject> {
    const now = new Date().toISOString();

    return this.repository.create({
      ...input,
      createdAt: now,
      updatedAt: now,
    });
  }

  async getById(
    id: string
  ): Promise<ConstructionProject | null> {
    return this.repository.getById(id);
  }

  async getByPropertyId(
    propertyId: string
  ): Promise<ConstructionProject[]> {
    return this.repository.getByPropertyId(propertyId);
  }

  async changeStatus(
    id: string,
    status: ConstructionProjectStatus
  ): Promise<ConstructionProject | null> {
    const project = await this.repository.getById(id);

    if (!project) {
      return null;
    }

    return this.repository.update({
      ...project,
      status,
      updatedAt: new Date().toISOString(),
    });
  }

  async list(
    limit = 100
  ): Promise<ConstructionProject[]> {
    return this.repository.list(limit);
  }
}