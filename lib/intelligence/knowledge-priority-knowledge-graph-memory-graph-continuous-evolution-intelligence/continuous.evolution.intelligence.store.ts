import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousEvolutionIntelligenceRecord

}
from "./continuous.evolution.intelligence.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousEvolutionIntelligenceRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphContinuousEvolutionIntelligence(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousEvolutionIntelligenceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContinuousEvolutionIntelligence(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
