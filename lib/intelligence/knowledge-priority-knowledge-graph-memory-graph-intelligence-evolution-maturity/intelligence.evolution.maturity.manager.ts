import {

evaluateIntelligenceEvolutionMaturity,

getIntelligenceEvolutionMaturity

}
from "./intelligence.evolution.maturity.core";


export function runKnowledgeGraphMemoryGraphIntelligenceEvolutionMaturity(
data:any
){

return evaluateIntelligenceEvolutionMaturity(data);

}


export function reviewKnowledgeGraphMemoryGraphIntelligenceEvolutionMaturity(
agentId:string
){

return getIntelligenceEvolutionMaturity(agentId);

}


export function resetKnowledgeGraphMemoryGraphIntelligenceEvolutionMaturity(){

return true;

}
