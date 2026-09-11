/**
 * MELKISM Semantic Retrieval Bridge Runtime
 *
 * v0.8.1
 */


import type {
 SemanticContextRuntime
} from "../runtime/semantic.context.runtime";


import type {
 SemanticRetrievalBridgeContract
} from "./semantic.retrieval.bridge.contract";


import type {
 KnowledgeEntityId
} from "../../contracts/knowledge.entity.contract";



export class SemanticRetrievalBridgeRuntime
implements SemanticRetrievalBridgeContract {



constructor(
 private readonly contextRuntime:
 SemanticContextRuntime,

 public readonly entityId:
 KnowledgeEntityId

){}



enrich(
 query:string
){


 const context =
 this.contextRuntime.resolve(
    this.entityId
 );


 if(!context){

    return undefined;

 }


 return {

   ...context,

   metadata:{
     ...(context.metadata ?? {}),
     query
   }

 };


}



}
