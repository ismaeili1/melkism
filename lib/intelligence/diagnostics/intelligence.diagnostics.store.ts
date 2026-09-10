
import type {

IntelligenceDiagnosticsRecord

}
from "./intelligence.diagnostics.types";


const records:
IntelligenceDiagnosticsRecord[]
=
[];



export function saveDiagnosticsRecord(
record:IntelligenceDiagnosticsRecord
){

records.push(record);

return record;

}



export function getAgentDiagnostics(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}



export function clearDiagnostics(){

records.length=0;

}

