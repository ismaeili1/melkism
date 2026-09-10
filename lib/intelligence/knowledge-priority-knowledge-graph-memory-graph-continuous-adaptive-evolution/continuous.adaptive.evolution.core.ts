import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptiveEvolution,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptiveEvolution

}
from "./continuous.adaptive.evolution.store";


export function runContinuousAdaptiveEvolutionCycle(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptiveEvolution({

id:crypto.randomUUID(),

createdAt:new Date(),

evolutionConfidence:0,

evolutionState:"initialized",

metadata:null,

...data

});

}


export function evaluateContinuousAdaptiveEvolution(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptiveEvolution(agentId);

}
