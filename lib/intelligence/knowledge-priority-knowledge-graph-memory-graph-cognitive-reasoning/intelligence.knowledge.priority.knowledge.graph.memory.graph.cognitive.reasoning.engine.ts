import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveReasoning,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveReasoning
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.reasoning.store";


export function cognitiveReasonKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveReasoning({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphCognitiveReasoning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveReasoning(agentId);

}

