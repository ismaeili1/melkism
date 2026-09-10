/**
 * MELKISM Semantic Context Integration Contract
 *
 * v0.8.1
 */


import type {
 KnowledgeEntityId
} from "../../contracts/knowledge.entity.contract";


import type {
 SemanticContextContract
} from "../contracts/semantic.context.contract";



export interface SemanticContextIntegrationContract {


 entityId:
   KnowledgeEntityId;



 resolve():
   SemanticContextContract | undefined;


}

