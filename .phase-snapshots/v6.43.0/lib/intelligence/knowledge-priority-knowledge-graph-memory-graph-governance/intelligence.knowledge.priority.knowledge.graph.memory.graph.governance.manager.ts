import {
governKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphGovernance,
generateKnowledgeGraphMemoryGraphGovernanceReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.governance.engine";


export function runKnowledgeGraphMemoryGraphGovernance(
data:any
){

return governKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphGovernance(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphGovernance(agentId);

}



export function resetKnowledgeGraphMemoryGraphGovernance(){

return true;

}



export {
generateKnowledgeGraphMemoryGraphGovernanceReport
};
