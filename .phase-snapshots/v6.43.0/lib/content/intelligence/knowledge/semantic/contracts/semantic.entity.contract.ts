/**
 * MELKISM Semantic Entity Contract
 *
 * v0.8.1
 */

import type {
 KnowledgeEntityId
} from "../../contracts/knowledge.entity.contract";


import type {
 SemanticMetadataContract
} from "./semantic.metadata.contract";


export interface SemanticEntityContract {


 id:
   KnowledgeEntityId;


 metadata:
   SemanticMetadataContract;


 createdAt?:
   string;


 updatedAt?:
   string;

}
