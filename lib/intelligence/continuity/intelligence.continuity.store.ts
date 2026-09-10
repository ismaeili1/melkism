
import type {

IntelligenceContinuityRecord

}
from "./intelligence.continuity.types";


const records:
IntelligenceContinuityRecord[]
=
[];


export function saveContinuityRecord(
record:IntelligenceContinuityRecord
){

records.push(record);

return record;

}


export function getAgentContinuity(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearContinuity(){

records.length=0;

}

