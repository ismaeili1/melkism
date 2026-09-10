import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfLearningRecord

}
from "./adaptive.self.learning.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfLearningRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfLearning(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfLearningRecord
){

records.push(record);

return record;

}



export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfLearning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
