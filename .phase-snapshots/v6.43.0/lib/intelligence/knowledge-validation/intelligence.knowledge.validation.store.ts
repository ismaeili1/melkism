import type {
IntelligenceKnowledgeValidationRecord
}
from "./intelligence.knowledge.validation.types";


const records:IntelligenceKnowledgeValidationRecord[]=[];


export function saveKnowledgeValidation(
record:IntelligenceKnowledgeValidationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeValidation(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeValidation(){

records.length=0;

}
