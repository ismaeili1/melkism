import {
saveKnowledgePriorityDistribution,
getAgentKnowledgePriorityDistribution
}
from "./intelligence.knowledge.priority.distribution.store";


export function distributeKnowledgePriority(
data:any
){

return saveKnowledgePriorityDistribution({

id:crypto.randomUUID(),

createdAt:new Date(),

distributionStatus:"completed",

metadata:null,

...data

});

}



export function evaluatePriorityDistribution(
agentId:string
){

return getAgentKnowledgePriorityDistribution(agentId);

}



export function generatePriorityDistributionReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
