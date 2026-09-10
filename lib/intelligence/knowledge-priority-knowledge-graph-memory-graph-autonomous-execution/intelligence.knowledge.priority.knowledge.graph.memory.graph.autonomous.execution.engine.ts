import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousExecution,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousExecution
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.execution.store";


export function executeAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousExecution({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphAutonomousExecution(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousExecution(agentId);

}
