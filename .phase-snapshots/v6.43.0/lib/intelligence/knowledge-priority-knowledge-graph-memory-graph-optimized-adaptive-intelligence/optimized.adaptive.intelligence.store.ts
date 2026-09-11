import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedAdaptiveIntelligenceRecord

}
from "./optimized.adaptive.intelligence.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedAdaptiveIntelligenceRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedAdaptiveIntelligence(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedAdaptiveIntelligenceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedAdaptiveIntelligence(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
