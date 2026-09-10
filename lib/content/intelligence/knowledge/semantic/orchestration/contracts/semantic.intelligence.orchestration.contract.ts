/**
 * MELKISM Semantic Intelligence Orchestration Contract
 *
 * v0.8.1
 */


import type {
 SemanticContextContract
} from "../../contracts/semantic.context.contract";


export interface SemanticIntelligenceOrchestrationContract {


 execute():

 Promise<SemanticContextContract | undefined>;


}

