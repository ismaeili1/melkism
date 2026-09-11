import type {
IntelligenceKnowledgeGenerationRecord
}
from "./intelligence.knowledge.generation.types";


const records:IntelligenceKnowledgeGenerationRecord[]=[];


export function saveKnowledgeGeneration(
record:IntelligenceKnowledgeGenerationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeGeneration(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeGeneration(){

records.length=0;

}
