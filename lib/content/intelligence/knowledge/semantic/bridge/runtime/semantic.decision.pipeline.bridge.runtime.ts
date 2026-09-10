/**
 * MELKISM Semantic Decision Pipeline Bridge Runtime
 *
 * v0.8.1
 */


import {
 SemanticDecisionIntegrationRuntime
}
from "../../decision/integration/semantic.decision.integration.runtime";


import type {
 SemanticDecisionResult
}
from "../../decision/contracts/semantic.decision.contract";


import type {
 SemanticDecisionPipelineBridgeContract
}
from "../contracts/semantic.decision.pipeline.bridge.contract";



export class SemanticDecisionPipelineBridgeRuntime
implements SemanticDecisionPipelineBridgeContract {



private readonly decision:
SemanticDecisionIntegrationRuntime;



constructor(){

 this.decision =
 new SemanticDecisionIntegrationRuntime();

}



async execute(
 contextId:
 string,

 query:
 string

):
Promise<SemanticDecisionResult>{


 return this.decision.executeDecision({

   id:
   "decision-" + contextId,


   contextId,


   query

 });


}



}


