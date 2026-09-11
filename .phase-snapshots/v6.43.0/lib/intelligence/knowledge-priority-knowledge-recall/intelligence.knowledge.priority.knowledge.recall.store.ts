import type {
IntelligenceKnowledgePriorityKnowledgeRecallRecord
}
from "./intelligence.knowledge.priority.knowledge.recall.types";


const records:IntelligenceKnowledgePriorityKnowledgeRecallRecord[]=[];


export function saveKnowledgePriorityKnowledgeRecall(
record:IntelligenceKnowledgePriorityKnowledgeRecallRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeRecall(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeRecall(){

records.length=0;

}
