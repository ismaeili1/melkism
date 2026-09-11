import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedLearningRecord

}
from "./optimized.learning.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedLearningRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedLearning(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedLearningRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedLearning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
