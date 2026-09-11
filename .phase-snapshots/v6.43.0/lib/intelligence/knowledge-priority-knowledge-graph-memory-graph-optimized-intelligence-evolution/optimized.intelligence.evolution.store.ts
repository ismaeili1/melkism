import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedIntelligenceEvolutionRecord

}
from "./optimized.intelligence.evolution.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedIntelligenceEvolutionRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedIntelligenceEvolution(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedIntelligenceEvolutionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedIntelligenceEvolution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
