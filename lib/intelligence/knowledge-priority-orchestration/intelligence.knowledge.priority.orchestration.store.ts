import type {
IntelligenceKnowledgePriorityOrchestrationRecord
}
from "./intelligence.knowledge.priority.orchestration.types";


const records:IntelligenceKnowledgePriorityOrchestrationRecord[]=[];


export function saveKnowledgePriorityOrchestration(
record:IntelligenceKnowledgePriorityOrchestrationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityOrchestration(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityOrchestration(){

records.length=0;

}
