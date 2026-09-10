
import type {

IntelligenceStateRecord

}
from "./intelligence.state.types";


const records:
IntelligenceStateRecord[]
=
[];


export function saveStateRecord(
record:IntelligenceStateRecord
){

records.push(record);

return record;

}


export function getAgentState(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearState(){

records.length=0;

}

