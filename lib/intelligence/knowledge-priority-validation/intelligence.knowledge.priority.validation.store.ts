import type {
IntelligenceKnowledgePriorityValidationRecord
}
from "./intelligence.knowledge.priority.validation.types";


const records:IntelligenceKnowledgePriorityValidationRecord[]=[];


export function saveKnowledgePriorityValidation(
record:IntelligenceKnowledgePriorityValidationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityValidation(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityValidation(){

records.length=0;

}
