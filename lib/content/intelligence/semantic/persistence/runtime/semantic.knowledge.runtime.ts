/**
 * MELKISM Semantic Knowledge Runtime
 *
 * v0.5.0
 *
 * Runtime boundary for SemanticKnowledge
 * persistence and retrieval.
 */

import type {
  SemanticKnowledge,
} from '../../semantic.knowledge.contract';

import type {
  SemanticKnowledgePersistenceContract,
} from '../contracts';

import type {
  SemanticKnowledgeContract,
} from '../../semantic.knowledge.contract';


export class SemanticKnowledgeRuntime
  implements SemanticKnowledgeContract {

  constructor(
    private readonly persistence:
      SemanticKnowledgePersistenceContract
  ) {}


  async build(
    contentId:
      string,

    semantic:
      SemanticKnowledge['semantic'],

    entities:
      SemanticKnowledge['entities'],

    knowledgeNodeIds:
      SemanticKnowledge['knowledgeNodeIds'],

    relationshipIds:
      SemanticKnowledge['relationshipIds']
  ):
    Promise<SemanticKnowledge> {

    const knowledge:
      SemanticKnowledge = {

      contentId,

      semantic,

      entities,

      knowledgeNodeIds,

      relationshipIds,

    };


    return this.persistence.save(
      knowledge
    );
  }


  async getByContentId(
    contentId:
      string
  ):
    Promise<SemanticKnowledge | null> {

    return this.persistence.findByContentId(
      contentId
    );
  }


  async findByContentId(
    contentId:
      string
  ):
    Promise<SemanticKnowledge | null> {

    return this.getByContentId(
      contentId
    );
  }

}
