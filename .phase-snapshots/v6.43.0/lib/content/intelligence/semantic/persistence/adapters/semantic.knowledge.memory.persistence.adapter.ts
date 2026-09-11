/**
 * MELKISM Semantic Knowledge Memory Persistence Adapter
 *
 * v0.5.0
 */

import type {
  SemanticKnowledge,
} from '../../semantic.knowledge.contract';

import type {
  SemanticKnowledgePersistenceContract,
} from '../contracts';


export class SemanticKnowledgeMemoryPersistenceAdapter
  implements SemanticKnowledgePersistenceContract {

  private readonly records =
    new Map<string, SemanticKnowledge>();


  async save(
    knowledge:
      SemanticKnowledge
  ):
    Promise<SemanticKnowledge> {

    this.records.set(
      knowledge.contentId,
      knowledge
    );

    return knowledge;
  }


  async findByContentId(
    contentId:
      string
  ):
    Promise<SemanticKnowledge | null> {

    return (
      this.records.get(
        contentId
      )
      ??
      null
    );
  }


  async removeByContentId(
    contentId:
      string
  ):
    Promise<boolean> {

    return this.records.delete(
      contentId
    );
  }


  async clear():
    Promise<void> {

    this.records.clear();
  }

}
