/**
 * MELKISM Semantic Retrieval Ranking Integration
 *
 * v0.5.3
 *
 * Connects SemanticRetrievalRuntime to the deterministic
 * ranking boundary.
 */

import type {
  SemanticRetrievalRequest,
  SemanticRetrievalResult,
} from '../../semantic';

import type {
  SemanticRetrievalRuntime,
} from '../../semantic/runtime';

import type {
  DeterministicRankingRuntime,
} from '../runtime';

import type {
  RankedRetrievalResult,
  RetrievalRankingRequest,
  RetrievalRankingSignals,
} from '../retrieval.ranking.contract';


export class SemanticRetrievalRankingIntegration {

  constructor(
    private readonly retrieval:
      SemanticRetrievalRuntime,

    private readonly ranking:
      DeterministicRankingRuntime
  ) {}


  async retrieveAndRank(
    request:
      SemanticRetrievalRequest
  ):
    Promise<
      readonly RankedRetrievalResult[]
    > {

    const results =
      await this.retrieval.retrieve(
        request
      );


    const rankingRequests:
      RetrievalRankingRequest[] =
        results.map(
          (result) => ({

            result,

            signals:
              this.extractSignals(
                result,
                request
              ),

          })
        );


    return this.ranking.rank(
      rankingRequests
    );
  }


  scoreResult(
    result:
      SemanticRetrievalResult,

    request:
      SemanticRetrievalRequest
  ):
    number {

    const rankingRequest:
      RetrievalRankingRequest = {

      result,

      signals:
        this.extractSignals(
          result,
          request
        ),

    };


    return this.ranking.score(
      rankingRequest
    );
  }


  private extractSignals(
    result:
      SemanticRetrievalResult,

    request:
      SemanticRetrievalRequest
  ):
    RetrievalRankingSignals {

    const queryTerms =
      request.query
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);


    const matchedTerms =
      result.matchedTerms
        .map(
          term =>
            term.toLowerCase()
        );


    const matchedCount =
      queryTerms.filter(
        term =>
          matchedTerms.includes(
            term
          )
      ).length;


    const termMatchScore =
      queryTerms.length === 0
        ? 0
        : matchedCount /
          queryTerms.length;


    const entityContextScore =
      result.context.entities.length >
      0
        ? 1
        : 0;


    const graphContextScore =
      result.context.paths.length >
      0
        ? 1
        : 0;


    return {

      semanticScore:
        Math.max(
          0,
          Math.min(
            1,
            result.score
          )
        ),

      termMatchScore:
        Math.max(
          0,
          Math.min(
            1,
            termMatchScore
          )
        ),

      entityContextScore,

      graphContextScore,

    };
  }

}
