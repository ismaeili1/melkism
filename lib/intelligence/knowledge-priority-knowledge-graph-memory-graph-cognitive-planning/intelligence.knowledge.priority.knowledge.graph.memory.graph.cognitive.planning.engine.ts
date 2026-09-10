import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitivePlanning,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitivePlanning
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.planning.store";


export function planKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitivePlanning({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphCognitivePlanning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitivePlanning(agentId);

}
