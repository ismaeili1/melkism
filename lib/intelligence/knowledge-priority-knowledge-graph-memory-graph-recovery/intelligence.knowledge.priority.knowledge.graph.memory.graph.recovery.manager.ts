import {
recoverKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphRecovery,
generateKnowledgeGraphMemoryGraphRecoveryReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.recovery.engine";


export function runKnowledgeGraphMemoryGraphRecovery(
data:any
){

return recoverKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphRecovery(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphRecovery(agentId);

}



export function resetKnowledgeGraphMemoryGraphRecovery(){

return true;

}



export {
generateKnowledgeGraphMemoryGraphRecoveryReport
};
