import {
balanceKnowledge,
optimizeKnowledgeBalance,
generateKnowledgeBalancingReport
}
from "./intelligence.knowledge.balancing.engine";


export function runKnowledgeBalancing(
data:any
){

return balanceKnowledge(data);

}


export function reviewKnowledgeBalancing(
agentId:string
){

return optimizeKnowledgeBalance(agentId);

}


export function resetKnowledgeBalancing(){

return true;

}


export {
generateKnowledgeBalancingReport
};

