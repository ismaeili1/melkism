import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore

}
from "./general.intelligence.reasoning.core.store";


export function reasonKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligence(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore({

id:crypto.randomUUID(),

createdAt:new Date(),

reasoningConfidence:0,

reasoningState:"initialized",

metadata:null,

...data

});

}


export function evaluateGeneralIntelligenceReasoning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore(agentId);

}
