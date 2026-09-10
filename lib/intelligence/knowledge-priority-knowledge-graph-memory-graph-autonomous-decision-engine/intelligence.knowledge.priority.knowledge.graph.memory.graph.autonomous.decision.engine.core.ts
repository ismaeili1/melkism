import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousDecisionEngine,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousDecisionEngine
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.decision.engine.store";


export function decideAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousDecisionEngine({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphAutonomousDecisionEngine(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousDecisionEngine(agentId);

}
