/**
 * MELKISM Retrieval Ranking Contract
 *
 * v0.5.3
 *
 * Defines relevance scoring and ranking boundaries
 * for retrieval results.
 *
 * This contract does not depend on:
 *
 * - AI provider
 * - machine learning model
 * - vector database
 * - embedding provider
 */

import type {
  SemanticRetrievalResult,
} from '../semantic';


export type RetrievalRankingSignals = {

  semanticScore:
    number;


  termMatchScore:
    number;


  entityContextScore:
    number;


  graphContextScore:
    number;

};


export type RetrievalRankingWeights = {

  semantic:
    number;


  termMatch:
    number;


  entityContext:
    number;


  graphContext:
    number;

};


export type RetrievalRankingRequest = {

  result:
    SemanticRetrievalResult;


  signals:
    RetrievalRankingSignals;


  weights?:
    RetrievalRankingWeights;

};


export type RankedRetrievalResult = {

  result:
    SemanticRetrievalResult;


  score:
    number;


  signals:
    RetrievalRankingSignals;

};


export interface RetrievalRankingContract {

  score(
    request:
      RetrievalRankingRequest
  ):
    number;


  rank(
    requests:
      readonly RetrievalRankingRequest[]
  ):
    readonly RankedRetrievalResult[];

}
