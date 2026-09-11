import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfImprovementRecord

}
from "./optimized.self.improvement.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfImprovementRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfImprovement(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfImprovementRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfImprovement(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
