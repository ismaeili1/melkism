import type {
IntelligenceKnowledgePriorityDistributionRecord
}
from "./intelligence.knowledge.priority.distribution.types";


const records:IntelligenceKnowledgePriorityDistributionRecord[]=[];


export function saveKnowledgePriorityDistribution(
record:IntelligenceKnowledgePriorityDistributionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityDistribution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityDistribution(){

records.length=0;

}
