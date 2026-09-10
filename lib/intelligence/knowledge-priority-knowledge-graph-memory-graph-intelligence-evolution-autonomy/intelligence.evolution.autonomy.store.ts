import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphIntelligenceEvolutionAutonomyRecord

}
from "./intelligence.evolution.autonomy.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphIntelligenceEvolutionAutonomyRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphIntelligenceEvolutionAutonomy(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphIntelligenceEvolutionAutonomyRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphIntelligenceEvolutionAutonomy(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
