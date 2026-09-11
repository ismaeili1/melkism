import type {
IntelligenceKnowledgeSynchronizationRecord
}
from "./intelligence.knowledge.synchronization.types";


const records:IntelligenceKnowledgeSynchronizationRecord[]=[];


export function saveKnowledgeSynchronization(
record:IntelligenceKnowledgeSynchronizationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeSynchronization(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeSynchronization(){

records.length=0;

}
