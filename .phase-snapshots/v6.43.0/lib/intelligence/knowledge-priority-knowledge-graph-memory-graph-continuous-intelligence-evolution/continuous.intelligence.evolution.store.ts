import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousIntelligenceEvolutionRecord

}
from "./continuous.intelligence.evolution.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousIntelligenceEvolutionRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphContinuousIntelligenceEvolution(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousIntelligenceEvolutionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContinuousIntelligenceEvolution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
