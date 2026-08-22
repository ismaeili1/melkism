/**
 * MELKISM Persistence Integration
 *
 * v0.2.5
 */

export type {
  PersistenceRuntimeDependencies,
  PersistenceDependencyFactory,
} from "./persistence.runtime.dependencies";

export {
  createInMemoryPersistence,
  createDefaultPersistence,
} from "./persistence.composition";

export { IngestionPersistenceBridge } from "./ingestion.persistence.bridge";

export {
  IngestionPersistenceRuntime,
} from "./ingestion.persistence.runtime";
