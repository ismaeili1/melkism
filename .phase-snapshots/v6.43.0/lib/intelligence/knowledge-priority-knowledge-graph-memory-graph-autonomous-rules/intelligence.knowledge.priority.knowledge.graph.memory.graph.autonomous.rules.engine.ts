import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousRules,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousRules
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.rules.store";


export function createAutonomousKnowledgePriorityKnowledgeGraphMemoryGraphRule(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousRules({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphAutonomousRules(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousRules(agentId);

}
