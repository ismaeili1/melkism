import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.evolution.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphEvolution(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphEvolutionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphEvolution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphEvolution(){

records.length=0;

}
