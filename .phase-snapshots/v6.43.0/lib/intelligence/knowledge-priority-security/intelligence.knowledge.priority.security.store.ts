import type {
IntelligenceKnowledgePrioritySecurityRecord
}
from "./intelligence.knowledge.priority.security.types";


const records:IntelligenceKnowledgePrioritySecurityRecord[]=[];


export function saveKnowledgePrioritySecurity(
record:IntelligenceKnowledgePrioritySecurityRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePrioritySecurity(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePrioritySecurity(){

records.length=0;

}
