import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore

}
from "./general.intelligence.reasoning.store";


export function reasonGeneralIntelligenceKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore({

id:crypto.randomUUID(),

createdAt:new Date(),

reasoningConfidence:0,

reasoningStatus:"initialized",

metadata:null,

...data

});

}



export function evaluateGeneralIntelligenceReasoning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore(agentId);

}
