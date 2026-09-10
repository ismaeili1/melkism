import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore

}
from "./general.reasoning.core.store";


export function reasonGeneralIntelligenceKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore({

id:crypto.randomUUID(),

createdAt:new Date(),

reasoningConfidence:0,

coordinationState:"initialized",

metadata:null,

...data

});

}


export function evaluateGeneralIntelligenceReasoning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore(agentId);

}
