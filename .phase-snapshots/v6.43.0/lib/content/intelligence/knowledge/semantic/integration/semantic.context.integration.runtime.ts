/**
 * MELKISM Semantic Context Integration Runtime
 *
 * v0.8.1
 */


import type {
 SemanticContextRuntime
} from "../runtime/semantic.context.runtime";


import type {
 SemanticContextIntegrationContract
} from "./semantic.context.integration.contract";


import type {
 KnowledgeEntityId
} from "../../contracts/knowledge.entity.contract";



export class SemanticContextIntegrationRuntime
implements SemanticContextIntegrationContract {



constructor(
 private readonly runtime:
 SemanticContextRuntime,

 public readonly entityId:
 KnowledgeEntityId

){}



resolve(){

 return this.runtime.resolve(
   this.entityId
 );

}



}
