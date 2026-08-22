/**
 * MELKISM Persistence Repository Interfaces
 *
 * v0.2.5
 *
 * Repository abstraction layer.
 *
 * Repositories expose the persistence contracts to future
 * runtime integrations without coupling the runtime to a
 * persistence technology.
 *
 * No Prisma, database, HTTP, or filesystem implementation
 * belongs in this layer.
 */

import type {
  ContentPersistenceContract,
} from "../content";

import type {
  IngestionPersistenceContract,
} from "../ingestion";

import type {
  ProvenancePersistenceContract,
} from "../provenance";

export type ContentRepository =
  ContentPersistenceContract;

export type IngestionRepository =
  IngestionPersistenceContract;

export type ProvenanceRepository =
  ProvenancePersistenceContract;

export type ContentPersistenceRepository =
  ContentRepository;

export type IngestionPersistenceRepository =
  IngestionRepository;

export type ProvenancePersistenceRepository =
  ProvenanceRepository;

export type PersistenceRepositories = {
  content: ContentRepository;
  ingestion: IngestionRepository;
  provenance: ProvenanceRepository;
};
