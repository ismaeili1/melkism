import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveEvolutionIntelligence,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveEvolutionIntelligence

}
from "./adaptive.evolution.intelligence.store";


export function evolveAdaptiveEvolutionIntelligence(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveEvolutionIntelligence({

id:crypto.randomUUID(),

createdAt:new Date(),

evolutionConfidence:0,

evolutionState:"initialized",

metadata:null,

...data

});

}


export function evaluateAdaptiveEvolutionIntelligence(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveEvolutionIntelligence(agentId);

}
