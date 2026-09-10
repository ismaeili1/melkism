import type {
IntelligenceKnowledgeContinuityRecord
}
from "./intelligence.knowledge.continuity.types";


const records:IntelligenceKnowledgeContinuityRecord[]=[];


export function saveKnowledgeContinuity(
record:IntelligenceKnowledgeContinuityRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeContinuity(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeContinuity(){

records.length=0;

}
