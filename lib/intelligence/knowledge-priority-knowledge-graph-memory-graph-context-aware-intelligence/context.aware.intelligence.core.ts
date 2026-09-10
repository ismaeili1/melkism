import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphContextAwareIntelligence,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContextAwareIntelligence
}
from "./context.aware.intelligence.store";


export function understandKnowledgePriorityKnowledgeGraphMemoryGraphContext(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphContextAwareIntelligence({

id:crypto.randomUUID(),

createdAt:new Date(),

contextScore:0,

metadata:null,

...data

});

}


export function evaluateContextAwareIntelligence(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContextAwareIntelligence(agentId);

}
