/**
 * MELKISM Explainable Reasoning Integration Contract
 *
 * v0.8.3
 */


import type {
 SemanticExplanationContract
}
from "../contracts/semantic.explanation.contract";


import type {
 SemanticReasoningTraceContract
}
from "../contracts/semantic.reasoning.trace.contract";



export interface SemanticExplanationIntegrationContract {


reasoningId:
string;


explanation:
SemanticExplanationContract;


trace:
SemanticReasoningTraceContract[];


}

