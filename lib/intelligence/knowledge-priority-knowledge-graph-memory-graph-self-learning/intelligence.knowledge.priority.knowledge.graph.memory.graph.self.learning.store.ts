import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphSelfLearningRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.self.learning.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphSelfLearningRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphSelfLearning(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphSelfLearningRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphSelfLearning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphSelfLearning(){

records.length=0;

}
