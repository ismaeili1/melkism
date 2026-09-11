import {
distributeKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphDistribution,
generateKnowledgeGraphMemoryGraphDistributionReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.distribution.engine";


export function runKnowledgeGraphMemoryGraphDistribution(
data:any
){

return distributeKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphDistribution(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphDistribution(agentId);

}



export function resetKnowledgeGraphMemoryGraphDistribution(){

return true;

}



export {
generateKnowledgeGraphMemoryGraphDistributionReport
};
