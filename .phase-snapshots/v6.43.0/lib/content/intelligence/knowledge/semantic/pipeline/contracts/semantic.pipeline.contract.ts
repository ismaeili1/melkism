/**
 * MELKISM Semantic Intelligence Pipeline Contract
 *
 * v0.8.1
 */


import type {
 SemanticContextContract
} from "../../contracts/semantic.context.contract";



export interface SemanticPipelineContract {


 execute(
   context:
   SemanticContextContract
 ):
 Promise<Record<string,unknown>>;


}

