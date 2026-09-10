
import type {

IntelligenceKnowledgePriorityRecord

}
from "./intelligence.knowledge.priority.types";


const records:
IntelligenceKnowledgePriorityRecord[]
=
[];


export function saveKnowledgePriority(
record:IntelligenceKnowledgePriorityRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriority(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriority(){

records.length=0;

}

