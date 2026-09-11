import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousOperation,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousOperation
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.operation.store";


export function operateAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousOperation({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphAutonomousOperation(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousOperation(agentId);

}
