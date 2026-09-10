
import type {

IntelligenceMemoryConsolidationRecord

}
from "./intelligence.memory.consolidation.types";


const records:
IntelligenceMemoryConsolidationRecord[]
=
[];


export function saveMemoryConsolidation(
record:IntelligenceMemoryConsolidationRecord
){

records.push(record);

return record;

}


export function getAgentMemoryConsolidation(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearMemoryConsolidation(){

records.length=0;

}

