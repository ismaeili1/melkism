import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedAdaptiveEvolutionRecord

}
from "./optimized.adaptive.evolution.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedAdaptiveEvolutionRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedAdaptiveEvolution(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedAdaptiveEvolutionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedAdaptiveEvolution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
