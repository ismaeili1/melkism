import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveDecision,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveDecision
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.decision.store";


export function decideKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveDecision({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphCognitiveDecision(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveDecision(agentId);

}
