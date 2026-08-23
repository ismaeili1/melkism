/**
 * MELKISM Ranking Strategy Contract
 *
 * v0.3.2
 *
 * Defines the ranking boundary
 * for retrieval results.
 *
 * This contract does not know:
 *
 * - search engine
 * - database
 * - AI model
 * - vector database
 *
 * Concrete ranking strategies
 * are implemented separately.
 */



export type RankingContext = {

  query: string;

  language?: string;

  metadata?:
  Record<string, unknown>;

};



export type RankingCandidate = {

  id: string;

  title: string;

  content?: string;

  metadata?:
  Record<string, unknown>;

};



export type RankedResult = {

  id: string;

  score: number;

};



export interface RankingStrategyContract {


  rank(
    candidates:
    readonly RankingCandidate[],

    context:
    RankingContext

  ):
  Promise<readonly RankedResult[]>;


}
