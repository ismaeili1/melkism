/**
 * MELKISM Semantic Knowledge Persistence Contract
 *
 * v0.5.0
 *
 * Technology-independent persistence boundary
 * for SemanticKnowledge records.
 */

import type {
  SemanticKnowledge,
} from '../../semantic.knowledge.contract';


export interface SemanticKnowledgePersistenceContract {

  save(
    knowledge:
      SemanticKnowledge
  ):
    Promise<SemanticKnowledge>;


  findByContentId(
    contentId:
      string
  ):
    Promise<SemanticKnowledge | null>;


  removeByContentId(
    contentId:
      string
  ):
    Promise<boolean>;


  clear():
    Promise<void>;

}
