import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligenceEvolutionRecord

}
from "./adaptive.intelligence.evolution.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligenceEvolutionRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligenceEvolution(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligenceEvolutionRecord
){

records.push(record);

return record;

}



export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligenceEvolution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
