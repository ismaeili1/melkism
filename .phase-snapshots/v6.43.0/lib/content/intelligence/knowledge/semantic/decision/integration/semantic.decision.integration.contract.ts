/**
 * MELKISM Semantic Decision Integration Contract
 *
 * v0.8.1
 */


import type {
 SemanticDecisionRequest,
 SemanticDecisionResult
}
from "../contracts/semantic.decision.contract";



export interface SemanticDecisionIntegrationContract {


 executeDecision(
 request:
 SemanticDecisionRequest
 ):
 Promise<SemanticDecisionResult>;


}

