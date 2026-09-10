import type {
IntelligenceKnowledgePriorityKnowledgeRetentionRecord
}
from "./intelligence.knowledge.priority.knowledge.retention.types";


const records:IntelligenceKnowledgePriorityKnowledgeRetentionRecord[]=[];


export function saveKnowledgePriorityKnowledgeRetention(
record:IntelligenceKnowledgePriorityKnowledgeRetentionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeRetention(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeRetention(){

records.length=0;

}
