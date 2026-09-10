import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedEvolutionIntelligenceRecord

}
from "./optimized.evolution.intelligence.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedEvolutionIntelligenceRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedEvolutionIntelligence(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedEvolutionIntelligenceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedEvolutionIntelligence(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
