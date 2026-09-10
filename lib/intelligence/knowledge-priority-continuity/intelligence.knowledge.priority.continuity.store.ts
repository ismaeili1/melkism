import type {
IntelligenceKnowledgePriorityContinuityRecord
}
from "./intelligence.knowledge.priority.continuity.types";


const records:IntelligenceKnowledgePriorityContinuityRecord[]=[];


export function saveKnowledgePriorityContinuity(
record:IntelligenceKnowledgePriorityContinuityRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityContinuity(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityContinuity(){

records.length=0;

}
