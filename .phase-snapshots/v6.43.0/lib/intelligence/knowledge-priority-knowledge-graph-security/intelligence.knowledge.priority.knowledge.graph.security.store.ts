import type {
IntelligenceKnowledgePriorityKnowledgeGraphSecurityRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.security.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphSecurityRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphSecurity(
record:IntelligenceKnowledgePriorityKnowledgeGraphSecurityRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphSecurity(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphSecurity(){

records.length=0;

}
