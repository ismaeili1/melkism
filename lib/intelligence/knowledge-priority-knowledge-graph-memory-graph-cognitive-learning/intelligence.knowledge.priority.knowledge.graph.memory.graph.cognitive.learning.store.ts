import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveLearningRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.learning.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveLearningRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveLearning(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveLearningRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveLearning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveLearning(){

records.length=0;

}
