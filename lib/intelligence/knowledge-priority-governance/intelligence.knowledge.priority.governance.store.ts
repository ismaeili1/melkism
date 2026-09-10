import type {
IntelligenceKnowledgePriorityGovernanceRecord
}
from "./intelligence.knowledge.priority.governance.types";


const records:IntelligenceKnowledgePriorityGovernanceRecord[]=[];


export function saveKnowledgePriorityGovernance(
record:IntelligenceKnowledgePriorityGovernanceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityGovernance(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityGovernance(){

records.length=0;

}
