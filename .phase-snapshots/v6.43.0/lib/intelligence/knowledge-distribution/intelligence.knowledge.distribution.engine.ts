import {
saveKnowledgeDistribution,
getAgentKnowledgeDistribution
}
from "./intelligence.knowledge.distribution.store";


export function distributeKnowledge(
data:any
){

return saveKnowledgeDistribution({

id:crypto.randomUUID(),

createdAt:new Date(),

status:"distributed",

metadata:null,

...data

});

}



export function shareKnowledge(
agentId:string
){

return getAgentKnowledgeDistribution(agentId);

}



export function generateKnowledgeDistributionReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
