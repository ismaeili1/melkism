import type {
IntelligenceKnowledgePriorityKnowledgeGraphDistributionRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.distribution.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphDistributionRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphDistribution(
record:IntelligenceKnowledgePriorityKnowledgeGraphDistributionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphDistribution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphDistribution(){

records.length=0;

}
