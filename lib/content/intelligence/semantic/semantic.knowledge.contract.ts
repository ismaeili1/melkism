/**
 * MELKISM Semantic Knowledge Contract
 *
 * v0.5.0
 *
 * Defines a content-centric semantic knowledge representation.
 *
 * This contract composes existing intelligence boundaries.
 * It does not replace:
 *
 * - SemanticContent
 * - ContentEntity
 * - KnowledgeGraph
 *
 * It does not depend on:
 *
 * - database
 * - AI provider
 * - graph database
 * - search engine
 */

import type {
  SemanticContent,
} from '../contracts';

import type {
  ContentEntity,
} from '../entities';


export type SemanticKnowledge = {

  contentId:
    string;


  semantic:
    SemanticContent;


  entities:
    readonly ContentEntity[];


  knowledgeNodeIds:
    readonly string[];


  relationshipIds:
    readonly string[];


  metadata?:
    Record<string, unknown>;

};


export interface SemanticKnowledgeContract {

  build(
    contentId: string,
    semantic: SemanticContent,
    entities: readonly ContentEntity[],
    knowledgeNodeIds: readonly string[],
    relationshipIds: readonly string[]
  ): Promise<SemanticKnowledge>;


  getByContentId(
    contentId: string
  ): Promise<SemanticKnowledge | null>;

}
