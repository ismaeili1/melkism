import type {
IntelligenceKnowledgeBalancingRecord
}
from "./intelligence.knowledge.balancing.types";


const records:IntelligenceKnowledgeBalancingRecord[]=[];


export function saveKnowledgeBalancing(
record:IntelligenceKnowledgeBalancingRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeBalancing(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeBalancing(){

records.length=0;

}
