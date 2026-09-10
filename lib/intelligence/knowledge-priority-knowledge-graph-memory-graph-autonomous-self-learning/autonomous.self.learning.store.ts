import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfLearningRecord
}
from "./autonomous.self.learning.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfLearningRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfLearning(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfLearningRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfLearning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
