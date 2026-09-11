
import type {

IntelligenceAuditRecord

}
from "./intelligence.audit.types";


const records:
IntelligenceAuditRecord[]
=
[];



export function saveAuditRecord(
record:IntelligenceAuditRecord
){

records.push(record);

return record;

}



export function getAgentAuditRecords(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}



export function clearAuditRecords(){

records.length=0;

}

