import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphDistribution,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphDistribution
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.distribution.store";


export function distributeKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphDistribution({

id:crypto.randomUUID(),

createdAt:new Date(),

distributionStatus:"completed",

metadata:null,

...data

});

}



export function evaluateKnowledgeGraphMemoryGraphDistribution(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphDistribution(agentId);

}



export function generateKnowledgeGraphMemoryGraphDistributionReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
