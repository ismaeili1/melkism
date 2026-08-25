/**
 * MELKISM Deterministic Ranking Runtime
 *
 * v0.5.3
 *
 * Deterministic weighted ranking implementation.
 */

import type {
  RankedRetrievalResult,
  RetrievalRankingContract,
  RetrievalRankingRequest,
  RetrievalRankingSignals,
  RetrievalRankingWeights,
} from '../retrieval.ranking.contract';


export const DEFAULT_RETRIEVAL_RANKING_WEIGHTS:
  RetrievalRankingWeights = {

  semantic:
    0.40,

  termMatch:
    0.25,

  entityContext:
    0.20,

  graphContext:
    0.15,

};


function normalize(
  value:
    number
):
  number {

  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(
    0,
    Math.min(
      1,
      value
    )
  );
}


function weightedScore(
  signals:
    RetrievalRankingSignals,

  weights:
    RetrievalRankingWeights
):
  number {

  const semantic =
    normalize(
      signals.semanticScore
    ) *
    normalize(
      weights.semantic
    );


  const termMatch =
    normalize(
      signals.termMatchScore
    ) *
    normalize(
      weights.termMatch
    );


  const entityContext =
    normalize(
      signals.entityContextScore
    ) *
    normalize(
      weights.entityContext
    );


  const graphContext =
    normalize(
      signals.graphContextScore
    ) *
    normalize(
      weights.graphContext
    );


  const totalWeight =
    normalize(
      weights.semantic
    ) +
    normalize(
      weights.termMatch
    ) +
    normalize(
      weights.entityContext
    ) +
    normalize(
      weights.graphContext
    );


  if (
    totalWeight ===
    0
  ) {
    return 0;
  }


  return Math.max(
    0,
    Math.min(
      1,
      (
        semantic +
        termMatch +
        entityContext +
        graphContext
      ) /
      totalWeight
    )
  );
}


export class DeterministicRankingRuntime
  implements RetrievalRankingContract {

  constructor(
    private readonly defaultWeights:
      RetrievalRankingWeights =
        DEFAULT_RETRIEVAL_RANKING_WEIGHTS
  ) {}


  score(
    request:
      RetrievalRankingRequest
  ):
    number {

    const weights =
      request.weights ??
      this.defaultWeights;


    return weightedScore(
      request.signals,
      weights
    );
  }


  rank(
    requests:
      readonly RetrievalRankingRequest[]
  ):
    readonly RankedRetrievalResult[] {

    const ranked =
      requests.map(
        (request) => ({

          result:
            request.result,

          score:
            this.score(
              request
            ),

          signals:
            request.signals,

        })
      );


    return ranked
      .map(
        (item, index) => ({
          item,
          index,
        })
      )
      .sort(
        (left, right) => {

          if (
            right.item.score !==
            left.item.score
          ) {

            return (
              right.item.score -
              left.item.score
            );
          }


          if (
            left.item.result.contentId !==
            right.item.result.contentId
          ) {

            return left.item.result.contentId
              .localeCompare(
                right.item.result.contentId
              );
          }


          return (
            left.index -
            right.index
          );
        }
      )
      .map(
        ({ item }) =>
          item
      );
  }

}
