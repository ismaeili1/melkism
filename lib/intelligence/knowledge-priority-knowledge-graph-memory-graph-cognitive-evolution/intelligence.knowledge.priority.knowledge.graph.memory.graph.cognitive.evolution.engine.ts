import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveEvolution,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveEvolution
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.evolution.store";


export function evolveKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveEvolution({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphCognitiveEvolution(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveEvolution(agentId);

}
