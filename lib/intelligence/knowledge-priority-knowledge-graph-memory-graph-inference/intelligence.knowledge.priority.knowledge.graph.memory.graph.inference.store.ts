import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphInferenceRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.inference.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphInferenceRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphInference(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphInferenceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphInference(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphInference(){

records.length=0;

}
