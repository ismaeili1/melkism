import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfLearningRecord

}
from "./optimized.self.learning.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfLearningRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfLearning(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfLearningRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfLearning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
