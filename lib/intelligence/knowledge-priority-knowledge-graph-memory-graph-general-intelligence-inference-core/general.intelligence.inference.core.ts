import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCore,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCore

}
from "./general.intelligence.inference.store";


export function inferGeneralIntelligenceKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCore({

id:crypto.randomUUID(),

createdAt:new Date(),

inferenceConfidence:0,

intelligenceState:"initialized",

metadata:null,

...data

});

}


export function evaluateGeneralIntelligenceInference(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCore(agentId);

}
