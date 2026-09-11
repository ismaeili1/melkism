import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedEvolutionRecord

}
from "./optimized.evolution.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedEvolutionRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedEvolution(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedEvolutionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedEvolution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
