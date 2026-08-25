/**
 * MELKISM Advanced Knowledge Query Composition
 *
 * v0.5.1
 */

import {
  KnowledgeQueryRuntime,
} from '../../runtime';

import {
  KnowledgeTraversalRuntime,
} from '../runtime';

import {
  AdvancedKnowledgeQueryRuntime,
} from '../runtime';

import type {
  IntelligenceStorageRuntime,
} from '../../../storage/runtime';

import type {
  KnowledgeGraphPersistenceRuntime,
} from '../../../knowledge/persistence/runtime';


export type AdvancedKnowledgeQueryDependencies = {

  queryRuntime:
    KnowledgeQueryRuntime;

  entityStorage:
    IntelligenceStorageRuntime;

  graphPersistence:
    KnowledgeGraphPersistenceRuntime;

};


export function createAdvancedKnowledgeQueryRuntime(
  dependencies:
    AdvancedKnowledgeQueryDependencies
):
  AdvancedKnowledgeQueryRuntime {

  const traversalRuntime =
    new KnowledgeTraversalRuntime(
      dependencies.graphPersistence,
      dependencies.entityStorage.findById.bind(
        dependencies.entityStorage
      ),
    );

  return new AdvancedKnowledgeQueryRuntime(
    dependencies.queryRuntime,
    traversalRuntime,
  );
}
