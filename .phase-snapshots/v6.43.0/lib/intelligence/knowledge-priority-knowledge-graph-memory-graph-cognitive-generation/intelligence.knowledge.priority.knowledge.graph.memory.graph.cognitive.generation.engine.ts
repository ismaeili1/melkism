import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveGeneration,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveGeneration
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.generation.store";


export function cognitiveGenerateKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveGeneration({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphCognitiveGeneration(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveGeneration(agentId);

}

