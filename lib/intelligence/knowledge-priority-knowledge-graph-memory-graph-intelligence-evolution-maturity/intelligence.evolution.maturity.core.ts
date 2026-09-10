import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionMaturity,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionMaturity

}
from "./intelligence.evolution.maturity.store";


export function evaluateIntelligenceEvolutionMaturity(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionMaturity({

id:crypto.randomUUID(),

createdAt:new Date(),

maturityConfidence:0,

maturityLevel:"initialized",

metadata:null,

...data

});

}


export function getIntelligenceEvolutionMaturity(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionMaturity(agentId);

}
