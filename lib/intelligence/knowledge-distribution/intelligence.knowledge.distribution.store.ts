import type {
IntelligenceKnowledgeDistributionRecord
}
from "./intelligence.knowledge.distribution.types";


const records:IntelligenceKnowledgeDistributionRecord[]=[];


export function saveKnowledgeDistribution(
record:IntelligenceKnowledgeDistributionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeDistribution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeDistribution(){

records.length=0;

}
