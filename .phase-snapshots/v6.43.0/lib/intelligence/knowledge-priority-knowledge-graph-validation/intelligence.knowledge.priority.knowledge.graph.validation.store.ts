import type {
IntelligenceKnowledgePriorityKnowledgeGraphValidationRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.validation.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphValidationRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphValidation(
record:IntelligenceKnowledgePriorityKnowledgeGraphValidationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphValidation(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphValidation(){

records.length=0;

}
