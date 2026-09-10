import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGovernanceRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.governance.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGovernanceRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphGovernance(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGovernanceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGovernance(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphGovernance(){

records.length=0;

}
