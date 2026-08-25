/**
 * MELKISM Semantic Retrieval Runtime
 *
 * v0.5.2
 *
 * Foundation runtime connecting Semantic Retrieval
 * with Semantic Knowledge and Knowledge Query boundaries.
 */

import type {
  SemanticRetrievalContract,
  SemanticRetrievalRequest,
  SemanticRetrievalResult,
} from '../semantic.retrieval.contract';

import type {
  KnowledgeQueryRuntime,
} from '../../../../content/intelligence/query/runtime';

import type {
  KnowledgeTraversalRuntime,
} from '../../../../content/intelligence/query/advanced/runtime';


export type SemanticRetrievalScoringStrategy = {

  score(
    request:
      SemanticRetrievalRequest,

    context:
      SemanticRetrievalResult['context']
  ):
    number;

};


export class DefaultSemanticRetrievalScoringStrategy
  implements SemanticRetrievalScoringStrategy {

  score(
    request:
      SemanticRetrievalRequest,

    context:
      SemanticRetrievalResult['context']
  ):
    number {

    let score = 0;


    if (
      request.contentId &&
      context.knowledge
    ) {
      score += 0.6;
    }


    if (
      request.entityId &&
      context.entities.length > 0
    ) {
      score += 0.2;
    }


    if (
      context.paths.length > 0
    ) {
      score += 0.2;
    }


    return Math.min(
      1,
      score
    );
  }

}


export class SemanticRetrievalRuntime
  implements SemanticRetrievalContract {

  constructor(
    private readonly knowledgeQuery:
      KnowledgeQueryRuntime,

    private readonly traversal:
      KnowledgeTraversalRuntime,

    private readonly scoring:
      SemanticRetrievalScoringStrategy =
        new DefaultSemanticRetrievalScoringStrategy()
  ) {}


  async retrieve(
    request:
      SemanticRetrievalRequest
  ):
    Promise<
      readonly SemanticRetrievalResult[]
    > {

    const knowledge =
      request.contentId
        ? await this.knowledgeQuery.findByContentId(
            request.contentId
          )
        : null;


    const entities = [];


    if (request.entityId) {

      const entity =
        await this.knowledgeQuery.findEntityById(
          request.entityId
        );


      if (entity) {
        entities.push(
          entity
        );
      }
    }


    const paths = [];


    if (request.entityId) {

      const traversalResult =
        await this.traversal.traverse({

          startEntityId:
            request.entityId,

          maxDepth:
            request.maxDepth ?? 1,

          direction:
            'OUTGOING',

          maxResults:
            request.maxResults,

        });


      paths.push(
        ...traversalResult.paths
      );
    }


    const context = {

      knowledge,

      entities,

      paths,

    };


    const contentId =
      request.contentId ??
      request.entityId ??
      'semantic-retrieval';


    const score =
      this.scoring.score(
        request,
        context
      );


    const result:
      SemanticRetrievalResult = {

      contentId,

      score,

      context,

      matchedTerms:
        request.query
          .trim()
          .split(/\s+/)
          .filter(Boolean),

    };


    if (
      request.maxResults === 0
    ) {
      return [];
    }


    return [result];
  }

}
