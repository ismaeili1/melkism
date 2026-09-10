import {
saveKnowledgePriorityKnowledgeGraphDistribution,
getAgentKnowledgePriorityKnowledgeGraphDistribution
}
from "./intelligence.knowledge.priority.knowledge.graph.distribution.store";


export function distributeKnowledgePriorityKnowledgeGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphDistribution({

id:crypto.randomUUID(),

createdAt:new Date(),

distributionStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphDistribution(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphDistribution(agentId);

}


export function generateKnowledgeGraphDistributionReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
