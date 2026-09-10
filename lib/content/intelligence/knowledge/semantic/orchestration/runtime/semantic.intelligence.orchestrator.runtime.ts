/**
 * MELKISM Semantic Intelligence Orchestrator Runtime
 *
 * v0.8.1
 */


import type {
 SemanticContextRuntime
} from "../../runtime/semantic.context.runtime";


import type {
 SemanticIntelligenceOrchestrationContract
} from "../contracts/semantic.intelligence.orchestration.contract";


import type {
 KnowledgeEntityId
} from "../../../contracts/knowledge.entity.contract";



export class SemanticIntelligenceOrchestratorRuntime

implements SemanticIntelligenceOrchestrationContract {



constructor(

 private readonly contextRuntime:
 SemanticContextRuntime,


 private readonly entityId:
 KnowledgeEntityId

){}



async execute(){


 return this.contextRuntime.resolve(
    this.entityId
 );


}



}
