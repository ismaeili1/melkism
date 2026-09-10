import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCore,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCore

}
from "./general.intelligence.inference.core.store";


export function inferGeneralIntelligenceKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCore({

id:crypto.randomUUID(),

createdAt:new Date(),

confidenceEvaluation:0,

inferenceState:"initialized",

metadata:null,

...data

});

}


export function evaluateGeneralIntelligenceInference(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCore(agentId);

}
