import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousEvolutionRecord

}
from "./continuous.evolution.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousEvolutionRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphContinuousEvolution(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousEvolutionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContinuousEvolution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
