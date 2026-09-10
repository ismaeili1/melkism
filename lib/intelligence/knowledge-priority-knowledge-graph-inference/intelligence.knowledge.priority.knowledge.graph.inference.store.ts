import type {
IntelligenceKnowledgePriorityKnowledgeGraphInferenceRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.inference.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphInferenceRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphInference(
record:IntelligenceKnowledgePriorityKnowledgeGraphInferenceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphInference(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphInference(){

records.length=0;

}
