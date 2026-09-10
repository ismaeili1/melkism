import type {

KnowledgeReasoningInput,

KnowledgeReasoningResult,

ReasoningDecision

} from "./knowledge.reasoning.types";



export class KnowledgeReasoningEngine {



reason(

input:KnowledgeReasoningInput

):KnowledgeReasoningResult {



let decision:ReasoningDecision="insight";



if(input.confidence<0.3){

decision="warning";

}

else if(input.confidence>=0.8){

decision="recommendation";

}



return {


id:crypto.randomUUID(),


decision,


confidence:input.confidence,


insight:

`${input.description} evaluated by intelligence reasoning core`,


nodes:input.nodes,


createdAt:new Date()


};



}



}

