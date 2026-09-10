import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphDistributionRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.distribution.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphDistributionRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphDistribution(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphDistributionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphDistribution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphDistribution(){

records.length=0;

}
