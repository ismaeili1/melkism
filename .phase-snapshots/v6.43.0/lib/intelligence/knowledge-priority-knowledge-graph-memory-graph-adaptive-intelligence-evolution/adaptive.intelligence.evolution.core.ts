import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligenceEvolution,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligenceEvolution

}
from "./adaptive.intelligence.evolution.store";


export function evolveAdaptiveKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligenceEvolution({

id:crypto.randomUUID(),

createdAt:new Date(),

adaptationConfidence:0,

adaptiveEvolutionState:"initialized",

metadata:null,

...data

});

}



export function evaluateAdaptiveIntelligenceEvolution(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligenceEvolution(agentId);

}
