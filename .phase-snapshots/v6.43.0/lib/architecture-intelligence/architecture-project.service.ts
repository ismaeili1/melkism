import {
  InMemoryArchitectureProjectRepository,
  type ArchitectureProjectRepository,
} from "./architecture-project.repository";

import type {
  ArchitectureProject,
  ArchitectureProjectStatus,
} from "./architecture-project.types";

export type CreateArchitectureProjectInput =
  Omit<ArchitectureProject, "createdAt" | "updatedAt">;

export class ArchitectureProjectService {
  constructor(
    private readonly repository: ArchitectureProjectRepository =
      new InMemoryArchitectureProjectRepository()
  ) {}

  async create(
    input: CreateArchitectureProjectInput
  ): Promise<ArchitectureProject> {
    const now = new Date().toISOString();

    return this.repository.create({
      ...input,
      createdAt: now,
      updatedAt: now,
    });
  }

  async getById(
    id: string
  ): Promise<ArchitectureProject | null> {
    return this.repository.getById(id);
  }

  async getByPropertyId(
    propertyId: string
  ): Promise<ArchitectureProject[]> {
    return this.repository.getByPropertyId(propertyId);
  }

  async changeStatus(
    id: string,
    status: ArchitectureProjectStatus
  ): Promise<ArchitectureProject | null> {
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
  ): Promise<ArchitectureProject[]> {
    return this.repository.list(limit);
  }
}