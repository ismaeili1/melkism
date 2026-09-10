import type {
IntelligenceKnowledgePriorityGenerationRecord
}
from "./intelligence.knowledge.priority.generation.types";


const records:IntelligenceKnowledgePriorityGenerationRecord[]=[];


export function saveKnowledgePriorityGeneration(
record:IntelligenceKnowledgePriorityGenerationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityGeneration(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityGeneration(){

records.length=0;

}
