
import type {

IntelligenceSelfImprovementRecord

}
from "./intelligence.self-improvement.types";


const improvements:
IntelligenceSelfImprovementRecord[]
=
[];



export function saveSelfImprovement(
record:IntelligenceSelfImprovementRecord
){

improvements.push(record);

return record;

}



export function getAgentImprovements(
agentId:string
){

return improvements.filter(
item=>item.agentId===agentId
);

}



export function clearSelfImprovements(){

improvements.length=0;

}

