/**
 * MELKISM Semantic Decision Integration Runtime
 *
 * v0.8.1
 */


import {
 SemanticDecisionRuntime
}
from "../runtime/semantic.decision.runtime";


import type {
 SemanticDecisionRequest,
 SemanticDecisionResult
}
from "../contracts/semantic.decision.contract";


import type {
 SemanticDecisionIntegrationContract
}
from "./semantic.decision.integration.contract";



export class SemanticDecisionIntegrationRuntime
implements SemanticDecisionIntegrationContract {



private readonly runtime:
SemanticDecisionRuntime;



constructor(){

 this.runtime =
 new SemanticDecisionRuntime();

}



async executeDecision(
 request:
 SemanticDecisionRequest
):
Promise<SemanticDecisionResult>{


 return this.runtime.decide(
   request
 );


}



}

