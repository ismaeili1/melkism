import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAdaptation,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAdaptation
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.adaptation.store";


export function cognitiveAdaptKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAdaptation({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphCognitiveAdaptation(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAdaptation(agentId);

}

