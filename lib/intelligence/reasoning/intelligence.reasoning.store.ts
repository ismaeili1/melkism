
import type {

IntelligenceReasoningRecord

}
from "./intelligence.reasoning.types";


const reasoningRecords:
IntelligenceReasoningRecord[]
=
[];



export function saveReasoning(
record:IntelligenceReasoningRecord
){

reasoningRecords.push(record);

return record;

}



export function getAgentReasoning(
agentId:string
){

return reasoningRecords.filter(
item=>item.agentId===agentId
);

}



export function clearReasoning(){

reasoningRecords.length=0;

}

