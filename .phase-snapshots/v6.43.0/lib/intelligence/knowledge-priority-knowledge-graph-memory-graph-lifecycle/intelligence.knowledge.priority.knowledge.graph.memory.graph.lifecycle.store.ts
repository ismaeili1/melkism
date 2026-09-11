import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphLifecycleRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.lifecycle.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphLifecycleRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphLifecycle(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphLifecycleRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphLifecycle(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphLifecycle(){

records.length=0;

}
