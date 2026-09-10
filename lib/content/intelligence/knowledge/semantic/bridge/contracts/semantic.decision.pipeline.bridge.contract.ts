/**
 * MELKISM Semantic Decision Pipeline Bridge Contract
 *
 * v0.8.1
 */


import type {
 SemanticDecisionResult
}
from "../../decision/contracts/semantic.decision.contract";



export interface SemanticDecisionPipelineBridgeContract {


 execute(
 contextId:
 string,

 query:
 string

 ):
 Promise<SemanticDecisionResult>;


}


