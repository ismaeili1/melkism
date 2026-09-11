
import type {

IntelligenceKnowledgeSynthesisRecord

}
from "./intelligence.knowledge.synthesis.types";


const records:
IntelligenceKnowledgeSynthesisRecord[]
=
[];


export function saveKnowledgeSynthesis(
record:IntelligenceKnowledgeSynthesisRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeSynthesis(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeSynthesis(){

records.length=0;

}

