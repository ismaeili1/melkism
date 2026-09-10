import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedEvolution,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedEvolution

}
from "./optimized.evolution.store";


export function optimizeEvolutionKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedEvolution({

id:crypto.randomUUID(),

createdAt:new Date(),

optimizationConfidence:0,

evolutionState:"initialized",

metadata:null,

...data

});

}


export function evaluateOptimizedEvolution(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedEvolution(agentId);

}
