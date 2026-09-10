
import type {

IntelligenceRecoveryRecord

}
from "./intelligence.recovery.types";


const records:
IntelligenceRecoveryRecord[]
=
[];


export function saveRecoveryRecord(
record:IntelligenceRecoveryRecord
){

records.push(record);

return record;

}


export function getAgentRecovery(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearRecovery(){

records.length=0;

}

