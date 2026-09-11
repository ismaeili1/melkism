import type {
IntelligenceKnowledgePriorityKnowledgeGraphGenerationRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.generation.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphGenerationRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphGeneration(
record:IntelligenceKnowledgePriorityKnowledgeGraphGenerationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphGeneration(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphGeneration(){

records.length=0;

}
