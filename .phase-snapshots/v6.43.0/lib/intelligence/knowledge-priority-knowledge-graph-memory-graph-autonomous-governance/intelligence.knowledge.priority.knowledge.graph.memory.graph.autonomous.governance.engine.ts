import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousGovernance,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousGovernance
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.governance.store";


export function governAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousGovernance({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphAutonomousGovernance(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousGovernance(agentId);

}
