import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphSecurityRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.security.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphSecurityRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphSecurity(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphSecurityRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphSecurity(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphSecurity(){

records.length=0;

}
