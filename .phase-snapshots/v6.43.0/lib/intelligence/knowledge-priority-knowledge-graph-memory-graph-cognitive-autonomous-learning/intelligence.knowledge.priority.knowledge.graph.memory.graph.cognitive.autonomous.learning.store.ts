import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAutonomousLearningRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.autonomous.learning.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAutonomousLearningRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAutonomousLearning(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAutonomousLearningRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAutonomousLearning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
