
import type {

IntelligenceAdaptationRecord

}
from "./intelligence.adaptation.types";


const adaptations:
IntelligenceAdaptationRecord[]
=
[];



export function saveAdaptation(
record:IntelligenceAdaptationRecord
){

adaptations.push(record);

return record;

}



export function getAgentAdaptations(
agentId:string
){

return adaptations.filter(
item=>item.agentId===agentId
);

}



export function clearAdaptations(){

adaptations.length=0;

}

