import {
secureKnowledgePriorityKnowledgeGraph,
evaluateKnowledgeGraphSecurity,
generateKnowledgeGraphSecurityReport
}
from "./intelligence.knowledge.priority.knowledge.graph.security.engine";


export function runKnowledgeGraphSecurity(
data:any
){

return secureKnowledgePriorityKnowledgeGraph(data);

}


export function reviewKnowledgeGraphSecurity(
agentId:string
){

return evaluateKnowledgeGraphSecurity(agentId);

}


export function resetKnowledgeGraphSecurity(){

return true;

}


export {
generateKnowledgeGraphSecurityReport
};

