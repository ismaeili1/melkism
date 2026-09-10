
import type {

IntelligenceMonitoringRecord

}
from "./intelligence.monitoring.types";


const records:
IntelligenceMonitoringRecord[]
=
[];



export function saveMonitoringRecord(
record:IntelligenceMonitoringRecord
){

records.push(record);

return record;

}



export function getAgentMonitoring(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}



export function clearMonitoring(){

records.length=0;

}

