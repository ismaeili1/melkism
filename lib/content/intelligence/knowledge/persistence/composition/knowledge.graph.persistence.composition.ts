/**
 * MELKISM Knowledge Graph Persistence Composition
 *
 * v0.4.2
 *
 * Creates the default knowledge graph persistence
 * dependency graph.
 *
 * The composition layer selects concrete adapters.
 * Higher layers depend on runtime boundaries.
 */

import {
  KnowledgeGraphMemoryPersistenceAdapter,
} from '../adapters';

import {
  KnowledgeGraphPersistenceRuntime,
} from '../runtime';


export type KnowledgeGraphPersistenceDependencies = {
  persistence:
    KnowledgeGraphPersistenceRuntime;
};


export function createKnowledgeGraphPersistenceRuntime():
  KnowledgeGraphPersistenceRuntime {

  const adapter =
    new KnowledgeGraphMemoryPersistenceAdapter();

  return new KnowledgeGraphPersistenceRuntime(
    adapter
  );
}


export function createDefaultKnowledgeGraphPersistence():
  KnowledgeGraphPersistenceRuntime {

  return createKnowledgeGraphPersistenceRuntime();
}


export function createKnowledgeGraphPersistenceDependencies():
  KnowledgeGraphPersistenceDependencies {

  return {
    persistence:
      createKnowledgeGraphPersistenceRuntime(),
  };
}
