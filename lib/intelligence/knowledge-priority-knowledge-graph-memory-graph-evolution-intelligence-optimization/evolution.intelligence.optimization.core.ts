import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionIntelligenceOptimization,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionIntelligenceOptimization

}
from "./evolution.intelligence.optimization.store";


export function optimizeEvolutionIntelligenceKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionIntelligenceOptimization({

id:crypto.randomUUID(),

createdAt:new Date(),

optimizationConfidence:0,

optimizationState:"initialized",

metadata:null,

...data

});

}


export function evaluateEvolutionIntelligenceOptimization(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionIntelligenceOptimization(agentId);

}
