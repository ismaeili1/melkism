import type {
IntelligenceKnowledgePriorityKnowledgeGraphOrchestrationRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.orchestration.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphOrchestrationRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphOrchestration(
record:IntelligenceKnowledgePriorityKnowledgeGraphOrchestrationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphOrchestration(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphOrchestration(){

records.length=0;

}
