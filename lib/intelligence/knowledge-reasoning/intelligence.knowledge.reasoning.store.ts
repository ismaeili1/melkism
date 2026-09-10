
import type {

IntelligenceKnowledgeReasoningRecord

}
from "./intelligence.knowledge.reasoning.types";


const records:
IntelligenceKnowledgeReasoningRecord[]
=
[];


export function saveKnowledgeReasoning(
record:IntelligenceKnowledgeReasoningRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeReasoning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeReasoning(){

records.length=0;

}

