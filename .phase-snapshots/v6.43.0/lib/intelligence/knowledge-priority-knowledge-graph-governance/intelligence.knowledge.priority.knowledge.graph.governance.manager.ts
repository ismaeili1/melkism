import {
governKnowledgePriorityKnowledgeGraph,
evaluateKnowledgeGraphGovernance,
generateKnowledgeGraphGovernanceReport
}
from "./intelligence.knowledge.priority.knowledge.graph.governance.engine";


export function runKnowledgeGraphGovernance(
data:any
){

return governKnowledgePriorityKnowledgeGraph(data);

}


export function reviewKnowledgeGraphGovernance(
agentId:string
){

return evaluateKnowledgeGraphGovernance(agentId);

}


export function resetKnowledgeGraphGovernance(){

return true;

}


export {
generateKnowledgeGraphGovernanceReport
};

