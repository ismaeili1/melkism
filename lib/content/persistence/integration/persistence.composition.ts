/**
 * MELKISM Persistence Composition Root
 *
 * v0.2.5
 *
 * Creates the default in-memory persistence dependency graph.
 *
 * This is the only layer responsible for selecting concrete
 * persistence implementations.
 *
 * No database, Prisma, HTTP, filesystem, or external service
 * is introduced here.
 */

import type {
  PersistenceRuntimeDependencies,
} from "./persistence.runtime.dependencies";

import {
  InMemoryContentRepository,
  InMemoryIngestionRepository,
  InMemoryProvenanceRepository,
} from "../runtime";

export function createInMemoryPersistence():
  PersistenceRuntimeDependencies {
  return {
    content: new InMemoryContentRepository(),
    ingestion: new InMemoryIngestionRepository(),
    provenance: new InMemoryProvenanceRepository(),
  };
}

export function createDefaultPersistence():
  PersistenceRuntimeDependencies {
  return createInMemoryPersistence();
}
