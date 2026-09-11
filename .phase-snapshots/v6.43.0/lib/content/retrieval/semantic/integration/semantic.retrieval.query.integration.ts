/**
 * MELKISM Semantic Retrieval Query Integration
 *
 * v0.5.2
 *
 * Stable integration boundary for consumers of
 * semantic retrieval.
 */

import type {
  SemanticRetrievalRequest,
  SemanticRetrievalResult,
} from '../semantic.retrieval.contract';

import type {
  SemanticRetrievalRuntime,
} from '../runtime';


export class SemanticRetrievalQueryIntegration {

  constructor(
    private readonly retrieval:
      SemanticRetrievalRuntime
  ) {}


  async retrieve(
    request:
      SemanticRetrievalRequest
  ):
    Promise<
      readonly SemanticRetrievalResult[]
    > {

    return this.retrieval.retrieve(
      request
    );
  }


  async retrieveByContent(
    contentId:
      string,

    query:
      string
  ):
    Promise<
      readonly SemanticRetrievalResult[]
    > {

    return this.retrieve({
      contentId,
      query,
    });
  }


  async retrieveByEntity(
    entityId:
      string,

    query:
      string,

    maxDepth?:
      number,

    maxResults?:
      number
  ):
    Promise<
      readonly SemanticRetrievalResult[]
    > {

    return this.retrieve({

      entityId,

      query,

      maxDepth,

      maxResults,

    });
  }

}
