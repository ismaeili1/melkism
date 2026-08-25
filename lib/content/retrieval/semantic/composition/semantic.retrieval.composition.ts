/**
 * MELKISM Semantic Retrieval Composition
 *
 * v0.5.2
 *
 * Composes SemanticRetrievalRuntime with the
 * existing Knowledge Query and Traversal boundaries.
 */

import {
  SemanticRetrievalRuntime,
  DefaultSemanticRetrievalScoringStrategy,
} from '../runtime';

import type {
  KnowledgeQueryRuntime,
} from '../../../../content/intelligence/query/runtime';

import {
  KnowledgeTraversalRuntime,
} from '../../../../content/intelligence/query/advanced/runtime';

import type {
  IntelligenceStorageRuntime,
} from '../../../../content/intelligence/storage/runtime';

import type {
  KnowledgeGraphPersistenceRuntime,
} from '../../../../content/intelligence/knowledge/persistence/runtime';


export type SemanticRetrievalDependencies = {

  knowledgeQuery:
    KnowledgeQueryRuntime;

  entityStorage:
    IntelligenceStorageRuntime;

  graphPersistence:
    KnowledgeGraphPersistenceRuntime;

};


export function createSemanticRetrievalRuntime(
  dependencies:
    SemanticRetrievalDependencies
):
  SemanticRetrievalRuntime {

  const traversal =
    new KnowledgeTraversalRuntime(
      dependencies.graphPersistence,
      dependencies.entityStorage.findById.bind(
        dependencies.entityStorage
      ),
    );


  const scoring =
    new DefaultSemanticRetrievalScoringStrategy();


  return new SemanticRetrievalRuntime(
    dependencies.knowledgeQuery,
    traversal,
    scoring,
  );
}


export function createDefaultSemanticRetrievalRuntime(
  dependencies:
    SemanticRetrievalDependencies
):
  SemanticRetrievalRuntime {

  return createSemanticRetrievalRuntime(
    dependencies
  );
}
