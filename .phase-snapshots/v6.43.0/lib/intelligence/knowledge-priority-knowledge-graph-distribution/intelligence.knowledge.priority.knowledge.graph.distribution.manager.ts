import {
distributeKnowledgePriorityKnowledgeGraph,
evaluateKnowledgeGraphDistribution,
generateKnowledgeGraphDistributionReport
}
from "./intelligence.knowledge.priority.knowledge.graph.distribution.engine";


export function runKnowledgeGraphDistribution(
data:any
){

return distributeKnowledgePriorityKnowledgeGraph(data);

}


export function reviewKnowledgeGraphDistribution(
agentId:string
){

return evaluateKnowledgeGraphDistribution(agentId);

}


export function resetKnowledgeGraphDistribution(){

return true;

}


export {
generateKnowledgeGraphDistributionReport
};

