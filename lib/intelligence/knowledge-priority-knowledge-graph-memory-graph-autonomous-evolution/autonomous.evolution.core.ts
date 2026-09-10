import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolution,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolution

}
from "./autonomous.evolution.store";


export function evolveAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolution({

id:crypto.randomUUID(),

createdAt:new Date(),

evolutionConfidence:0,

evolutionState:"initialized",

metadata:null,

...data

});

}



export function evaluateAutonomousEvolution(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolution(agentId);

}
