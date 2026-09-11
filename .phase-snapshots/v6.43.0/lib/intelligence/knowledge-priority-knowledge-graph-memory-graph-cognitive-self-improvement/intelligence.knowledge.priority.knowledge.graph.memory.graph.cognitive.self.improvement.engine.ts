import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSelfImprovement,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSelfImprovement
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.self.improvement.store";


export function improveKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSelfImprovement({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphCognitiveSelfImprovement(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSelfImprovement(agentId);

}
