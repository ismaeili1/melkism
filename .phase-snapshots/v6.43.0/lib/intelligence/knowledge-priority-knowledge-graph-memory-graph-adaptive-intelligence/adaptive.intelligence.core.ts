import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligence,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligence
}
from "./adaptive.intelligence.store";


export function adaptKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligence({

id:crypto.randomUUID(),

createdAt:new Date(),

adaptationScore:0,

metadata:null,

...data

});

}


export function evaluateAdaptiveIntelligence(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligence(agentId);

}
