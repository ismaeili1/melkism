import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategy,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategy
}
from "./autonomous.strategy.store";


export function strategizeAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategy({

id:crypto.randomUUID(),

createdAt:new Date(),

confidenceScore:0,

impactScore:0,

metadata:null,

...data

});

}


export function evaluateAutonomousStrategy(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategy(agentId);

}
