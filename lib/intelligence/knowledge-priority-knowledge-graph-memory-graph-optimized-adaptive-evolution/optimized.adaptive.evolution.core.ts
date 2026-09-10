import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedAdaptiveEvolution,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedAdaptiveEvolution

}
from "./optimized.adaptive.evolution.store";


export function optimizeAdaptiveEvolutionKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedAdaptiveEvolution({

id:crypto.randomUUID(),

createdAt:new Date(),

optimizationConfidence:0,

optimizationState:"initialized",

metadata:null,

...data

});

}


export function evaluateOptimizedAdaptiveEvolution(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedAdaptiveEvolution(agentId);

}
