import {
retainKnowledgePriorityKnowledgeGraphMemory,
evaluateKnowledgeGraphMemoryRetention,
generateKnowledgeGraphMemoryRetentionReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.retention.engine";


export function runKnowledgeGraphMemoryRetention(
data:any
){

return retainKnowledgePriorityKnowledgeGraphMemory(data);

}



export function reviewKnowledgeGraphMemoryRetention(
agentId:string
){

return evaluateKnowledgeGraphMemoryRetention(agentId);

}



export function resetKnowledgeGraphMemoryRetention(){

return true;

}



export {
generateKnowledgeGraphMemoryRetentionReport
};

