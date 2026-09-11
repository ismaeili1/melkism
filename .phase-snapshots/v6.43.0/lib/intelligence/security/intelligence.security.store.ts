
import type {

IntelligenceSecurityRecord

}
from "./intelligence.security.types";


const records:
IntelligenceSecurityRecord[]
=
[];



export function saveSecurityRecord(
record:IntelligenceSecurityRecord
){

records.push(record);

return record;

}



export function getAgentSecurityRecords(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}



export function clearSecurityRecords(){

records.length=0;

}

