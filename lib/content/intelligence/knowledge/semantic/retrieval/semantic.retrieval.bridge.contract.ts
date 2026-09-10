/**
 * MELKISM Semantic Retrieval Bridge Contract
 *
 * v0.8.1
 */


import type {
 KnowledgeEntityId
} from "../../contracts/knowledge.entity.contract";


import type {
 SemanticContextContract
} from "../contracts/semantic.context.contract";



export interface SemanticRetrievalBridgeContract {


 entityId:
   KnowledgeEntityId;


 enrich(
   query:string
 ):
   SemanticContextContract | undefined;


}

