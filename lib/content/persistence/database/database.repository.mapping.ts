/**
 * MELKISM Database Repository Mapping Contract
 *
 * v0.2.6
 *
 * Defines the repository mapping boundary between the
 * database adapter and the persistence repositories.
 *
 * No concrete database technology is referenced here.
 */

import type {
  ContentRepository,
  IngestionRepository,
  ProvenanceRepository,
} from "../repositories";

export type DatabaseRepositoryMapping = {
  content: ContentRepository;
  ingestion: IngestionRepository;
  provenance: ProvenanceRepository;
};

export interface DatabaseRepositoryFactory {
  createRepositories(): DatabaseRepositoryMapping;
}