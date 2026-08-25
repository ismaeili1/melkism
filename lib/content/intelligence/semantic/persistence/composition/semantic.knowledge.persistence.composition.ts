/**
 * MELKISM Semantic Knowledge Persistence Composition
 *
 * v0.5.0
 */

import {
  SemanticKnowledgeMemoryPersistenceAdapter,
} from '../adapters';

import {
  SemanticKnowledgeRuntime,
} from '../runtime';


export function createSemanticKnowledgeRuntime():
  SemanticKnowledgeRuntime {

  const adapter =
    new SemanticKnowledgeMemoryPersistenceAdapter();

  return new SemanticKnowledgeRuntime(
    adapter
  );
}


export function createDefaultSemanticKnowledgeRuntime():
  SemanticKnowledgeRuntime {

  return createSemanticKnowledgeRuntime();
}
