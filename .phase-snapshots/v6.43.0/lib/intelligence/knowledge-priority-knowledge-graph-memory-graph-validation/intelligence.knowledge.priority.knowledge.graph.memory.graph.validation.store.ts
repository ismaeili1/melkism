import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphValidationRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.validation.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphValidationRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphValidation(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphValidationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphValidation(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphValidation(){

records.length=0;

}
