import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicy,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicy
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.policy.store";


export function createAutonomousKnowledgePriorityKnowledgeGraphMemoryGraphPolicy(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicy({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphAutonomousPolicy(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicy(agentId);

}
