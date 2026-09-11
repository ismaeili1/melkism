import type {
IntelligenceKnowledgeRecoveryRecord
}
from "./intelligence.knowledge.recovery.types";


const records:IntelligenceKnowledgeRecoveryRecord[]=[];


export function saveKnowledgeRecovery(
record:IntelligenceKnowledgeRecoveryRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeRecovery(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeRecovery(){

records.length=0;

}
