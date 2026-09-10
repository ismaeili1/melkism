import {

saveGeneralIntelligenceInferenceCore,

getAgentGeneralIntelligenceInferenceCore

}
from "./general.inference.core.store";


export function inferGeneralIntelligenceKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveGeneralIntelligenceInferenceCore({

id:crypto.randomUUID(),

createdAt:new Date(),

inferenceConfidence:0,

generalIntelligenceState:"initialized",

metadata:null,

...data

});

}


export function evaluateGeneralIntelligenceInference(
agentId:string
){

return getAgentGeneralIntelligenceInferenceCore(agentId);

}
