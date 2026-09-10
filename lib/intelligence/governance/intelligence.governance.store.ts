
import type {

IntelligenceGovernanceRecord

}
from "./intelligence.governance.types";


const governanceRecords:
IntelligenceGovernanceRecord[]
=
[];



export function saveGovernance(
record:IntelligenceGovernanceRecord
){

governanceRecords.push(record);

return record;

}



export function getAgentGovernance(
agentId:string
){

return governanceRecords.filter(
item=>item.agentId===agentId
);

}



export function clearGovernance(){

governanceRecords.length=0;

}

