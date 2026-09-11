import {
distributeKnowledgePriority,
evaluatePriorityDistribution,
generatePriorityDistributionReport
}
from "./intelligence.knowledge.priority.distribution.engine";


export function runPriorityDistribution(
data:any
){

return distributeKnowledgePriority(data);

}


export function reviewPriorityDistribution(
agentId:string
){

return evaluatePriorityDistribution(agentId);

}


export function resetPriorityDistribution(){

return true;

}


export {
generatePriorityDistributionReport
};

