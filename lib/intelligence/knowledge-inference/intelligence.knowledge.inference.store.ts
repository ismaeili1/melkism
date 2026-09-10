
import type {

IntelligenceKnowledgeInferenceRecord

}
from "./intelligence.knowledge.inference.types";


const records:
IntelligenceKnowledgeInferenceRecord[]
=
[];


export function saveKnowledgeInference(
record:IntelligenceKnowledgeInferenceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeInference(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeInference(){

records.length=0;

}

