import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptiveEvolutionRecord

}
from "./continuous.adaptive.evolution.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptiveEvolutionRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptiveEvolution(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptiveEvolutionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptiveEvolution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
