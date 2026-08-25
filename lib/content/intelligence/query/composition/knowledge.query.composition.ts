/**
 * MELKISM Knowledge Query Composition
 *
 * v0.5.0
 *
 * Builds the dependency graph for KnowledgeQueryRuntime.
 *
 * The semantic knowledge provider remains injectable because
 * semantic knowledge persistence is introduced separately.
 */

import {
  KnowledgeQueryRuntime,
} from '../runtime';

import type {
  SemanticKnowledgeProvider,
} from '../runtime';

import type {
  IntelligenceStorageRuntime,
} from '../../storage/runtime';

import type {
  KnowledgeGraphPersistenceRuntime,
} from '../../knowledge/persistence/runtime';


export type KnowledgeQueryDependencies = {

  semanticKnowledge:
    SemanticKnowledgeProvider;

  entityStorage:
    IntelligenceStorageRuntime;

  graphPersistence:
    KnowledgeGraphPersistenceRuntime;

};


export function createKnowledgeQueryRuntime(
  dependencies:
    KnowledgeQueryDependencies
):
  KnowledgeQueryRuntime {

  return new KnowledgeQueryRuntime(
    dependencies.semanticKnowledge,
    dependencies.entityStorage,
    dependencies.graphPersistence,
  );
}


export function createDefaultKnowledgeQuery(
  dependencies:
    KnowledgeQueryDependencies
):
  KnowledgeQueryRuntime {

  return createKnowledgeQueryRuntime(
    dependencies,
  );
}
