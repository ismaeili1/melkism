import {
manageKnowledgePriorityKnowledgeGraphMemoryGraphLifecycle,
evaluateKnowledgeGraphMemoryGraphLifecycle,
generateKnowledgeGraphMemoryGraphLifecycleReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.lifecycle.engine";


export function runKnowledgeGraphMemoryGraphLifecycle(
data:any
){

return manageKnowledgePriorityKnowledgeGraphMemoryGraphLifecycle(data);

}



export function reviewKnowledgeGraphMemoryGraphLifecycle(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphLifecycle(agentId);

}



export function resetKnowledgeGraphMemoryGraphLifecycle(){

return true;

}



export {
generateKnowledgeGraphMemoryGraphLifecycleReport
};
