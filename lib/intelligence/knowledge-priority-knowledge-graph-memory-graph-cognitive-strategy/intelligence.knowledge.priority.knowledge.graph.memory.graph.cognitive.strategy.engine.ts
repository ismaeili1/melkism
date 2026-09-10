import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveStrategy,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveStrategy
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.strategy.store";


export function strategizeKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveStrategy({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphCognitiveStrategy(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveStrategy(agentId);

}
