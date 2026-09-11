/**
 * MELKISM Semantic Query Intelligence Runtime
 *
 * v0.8.1
 */


import type {
 SemanticContextRuntime
} from "../runtime/semantic.context.runtime";


import type {
 SemanticQueryIntelligenceContract
} from "./semantic.query.intelligence.contract";


import type {
 KnowledgeEntityId
} from "../../contracts/knowledge.entity.contract";



export class SemanticQueryIntelligenceRuntime
implements SemanticQueryIntelligenceContract {



constructor(

 private readonly contextRuntime:
 SemanticContextRuntime,


 public readonly query:
 string,


 private readonly entityId:
 KnowledgeEntityId

){}



analyze(){

 return this.contextRuntime.resolve(
    this.entityId
 );

}



}
