
import type {

IntelligenceEvolutionRecord

}
from "./intelligence.evolution.types";


const evolutions:
IntelligenceEvolutionRecord[]
=
[];



export function saveEvolution(
record:IntelligenceEvolutionRecord
){

evolutions.push(record);

return record;

}



export function getAgentEvolution(
agentId:string
){

return evolutions.filter(
item=>item.agentId===agentId
);

}



export function clearEvolution(){

evolutions.length=0;

}

