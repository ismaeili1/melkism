/**
 * MELKISM Explainable Reasoning Integration Runtime
 *
 * v0.8.3
 */


import {
 SemanticExplanationRuntime
}
from "../runtime/semantic.explanation.runtime";


import type {
 SemanticExplanationIntegrationContract
}
from "./semantic.explanation.integration.contract";



export class SemanticExplanationIntegrationRuntime {



private readonly runtime:
SemanticExplanationRuntime;



constructor(){

 this.runtime =
 new SemanticExplanationRuntime();

}



integrate(
 reasoningId:string,
 summary:string,
 confidence:number,
 evidenceIds:string[]
):
SemanticExplanationIntegrationContract {



return {


 reasoningId,


 explanation:
 this.runtime.explain(
   reasoningId,
   summary,
   confidence,
   evidenceIds
 ),


 trace:
 this.runtime.trace(
   reasoningId
 )


};


}



}

