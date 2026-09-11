import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptationRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.adaptation.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptationRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptation(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptation(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphAdaptation(){

records.length=0;

}
