import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveOptimization,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveOptimization
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.optimization.store";


export function optimizeKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveOptimization({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphCognitiveOptimization(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveOptimization(agentId);

}
