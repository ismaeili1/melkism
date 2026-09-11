/**
 * MELKISM Persistence Runtime Dependencies
 *
 * v0.2.5
 *
 * Defines the persistence dependencies that may be supplied
 * to runtime components.
 *
 * This layer intentionally depends only on repository
 * abstractions and not on a concrete persistence technology.
 */

import type {
  ContentRepository,
  IngestionRepository,
  ProvenanceRepository,
} from "../repositories";

export type PersistenceRuntimeDependencies = {
  content: ContentRepository;
  ingestion: IngestionRepository;
  provenance: ProvenanceRepository;
};

export type PersistenceDependencyFactory = () =>
  PersistenceRuntimeDependencies;
