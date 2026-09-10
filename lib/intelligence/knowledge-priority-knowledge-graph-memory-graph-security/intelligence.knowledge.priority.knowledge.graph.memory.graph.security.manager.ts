import {
secureKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphSecurity,
generateKnowledgeGraphMemoryGraphSecurityReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.security.engine";


export function runKnowledgeGraphMemoryGraphSecurity(
data:any
){

return secureKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphSecurity(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphSecurity(agentId);

}



export function resetKnowledgeGraphMemoryGraphSecurity(){

return true;

}



export {
generateKnowledgeGraphMemoryGraphSecurityReport
};
