import {
maintainKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphContinuity,
generateKnowledgeGraphMemoryGraphContinuityReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.continuity.engine";


export function runKnowledgeGraphMemoryGraphContinuity(
data:any
){

return maintainKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphContinuity(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphContinuity(agentId);

}



export function resetKnowledgeGraphMemoryGraphContinuity(){

return true;

}



export {
generateKnowledgeGraphMemoryGraphContinuityReport
};
