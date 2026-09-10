import {
recoverKnowledgePriorityKnowledgeGraph,
evaluateKnowledgeGraphRecovery,
generateKnowledgeGraphRecoveryReport
}
from "./intelligence.knowledge.priority.knowledge.graph.recovery.engine";


export function runKnowledgeGraphRecovery(
data:any
){

return recoverKnowledgePriorityKnowledgeGraph(data);

}


export function reviewKnowledgeGraphRecovery(
agentId:string
){

return evaluateKnowledgeGraphRecovery(agentId);

}


export function resetKnowledgeGraphRecovery(){

return true;

}


export {
generateKnowledgeGraphRecoveryReport
};

