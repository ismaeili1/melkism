import type {
IntelligenceKnowledgePriorityInferenceRecord
}
from "./intelligence.knowledge.priority.inference.types";


const records:IntelligenceKnowledgePriorityInferenceRecord[]=[];


export function saveKnowledgePriorityInference(
record:IntelligenceKnowledgePriorityInferenceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityInference(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityInference(){

records.length=0;

}
