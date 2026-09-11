import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphContinuousEvolution,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContinuousEvolution

}
from "./continuous.evolution.store";


export function evolveContinuousKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphContinuousEvolution({

id:crypto.randomUUID(),

createdAt:new Date(),

continuousEvolutionConfidence:0,

evolutionState:"initialized",

metadata:null,

...data

});

}


export function evaluateContinuousEvolution(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContinuousEvolution(agentId);

}
