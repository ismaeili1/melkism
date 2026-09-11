import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveEvolutionIntelligenceRecord

}
from "./adaptive.evolution.intelligence.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveEvolutionIntelligenceRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveEvolutionIntelligence(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveEvolutionIntelligenceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveEvolutionIntelligence(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
