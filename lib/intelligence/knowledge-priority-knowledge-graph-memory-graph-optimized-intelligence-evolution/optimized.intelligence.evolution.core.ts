import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedIntelligenceEvolution,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedIntelligenceEvolution

}
from "./optimized.intelligence.evolution.store";


export function optimizeIntelligenceEvolutionKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedIntelligenceEvolution({

id:crypto.randomUUID(),

createdAt:new Date(),

optimizedEvolutionConfidence:0,

optimizedEvolutionState:"initialized",

metadata:null,

...data

});

}


export function evaluateOptimizedIntelligenceEvolution(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedIntelligenceEvolution(agentId);

}
