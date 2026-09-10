import type {
IntelligenceKnowledgeGovernanceRecord
}
from "./intelligence.knowledge.governance.types";


const records:IntelligenceKnowledgeGovernanceRecord[]=[];


export function saveKnowledgeGovernance(
record:IntelligenceKnowledgeGovernanceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeGovernance(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeGovernance(){

records.length=0;

}
