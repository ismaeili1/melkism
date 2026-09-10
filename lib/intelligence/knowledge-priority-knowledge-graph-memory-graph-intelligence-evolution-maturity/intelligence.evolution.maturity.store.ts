import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionMaturityRecord

}
from "./intelligence.evolution.maturity.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionMaturityRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionMaturity(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionMaturityRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionMaturity(
agentId:string
){

return records.filter(
x=>x.agentId===agentId
);

}
