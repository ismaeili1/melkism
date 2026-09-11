import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOrchestrationRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.orchestration.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOrchestrationRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphOrchestration(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOrchestrationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOrchestration(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphOrchestration(){

records.length=0;

}
