import type {
IntelligenceKnowledgePriorityRecoveryRecord
}
from "./intelligence.knowledge.priority.recovery.types";


const records:IntelligenceKnowledgePriorityRecoveryRecord[]=[];


export function saveKnowledgePriorityRecovery(
record:IntelligenceKnowledgePriorityRecoveryRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityRecovery(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityRecovery(){

records.length=0;

}
