import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphMetaLearningRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.meta.learning.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphMetaLearningRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphMetaLearning(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphMetaLearningRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphMetaLearning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphMetaLearning(){

records.length=0;

}
