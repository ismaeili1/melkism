/**
 * MELKISM Semantic Reasoning Integration Contract
 *
 * v0.8.2
 */


import type {
 SemanticReasoningResult
}
from "../contracts/semantic.reasoning.contract";



export interface SemanticReasoningIntegrationContract {


 executeReasoning():

 SemanticReasoningResult;


}

