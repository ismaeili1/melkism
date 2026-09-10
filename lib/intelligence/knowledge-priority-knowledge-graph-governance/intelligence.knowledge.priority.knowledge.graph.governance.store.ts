import type {
IntelligenceKnowledgePriorityKnowledgeGraphGovernanceRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.governance.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphGovernanceRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphGovernance(
record:IntelligenceKnowledgePriorityKnowledgeGraphGovernanceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphGovernance(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphGovernance(){

records.length=0;

}
