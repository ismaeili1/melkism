import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionIntelligenceOptimizationRecord

}
from "./evolution.intelligence.optimization.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionIntelligenceOptimizationRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionIntelligenceOptimization(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionIntelligenceOptimizationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionIntelligenceOptimization(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
