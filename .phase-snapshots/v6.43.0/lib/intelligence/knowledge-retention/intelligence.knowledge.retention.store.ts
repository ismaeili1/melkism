
import type {

IntelligenceKnowledgeRetentionRecord

}
from "./intelligence.knowledge.retention.types";


const records:
IntelligenceKnowledgeRetentionRecord[]
=
[];


export function saveKnowledgeRetention(
record:IntelligenceKnowledgeRetentionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeRetention(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeRetention(){

records.length=0;

}

