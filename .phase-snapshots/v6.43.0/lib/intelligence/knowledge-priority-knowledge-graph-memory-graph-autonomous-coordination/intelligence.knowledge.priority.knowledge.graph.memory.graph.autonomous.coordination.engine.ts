import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousCoordination,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousCoordination
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.coordination.store";


export function coordinateAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousCoordination({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphAutonomousCoordination(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousCoordination(agentId);

}
