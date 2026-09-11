import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousLearningEngineRecord
}
from "./autonomous.learning.engine.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousLearningEngineRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousLearningEngine(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousLearningEngineRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousLearningEngine(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
