import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryRecallRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.recall.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryRecallRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryRecall(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryRecallRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryRecall(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryRecall(){

records.length=0;

}
