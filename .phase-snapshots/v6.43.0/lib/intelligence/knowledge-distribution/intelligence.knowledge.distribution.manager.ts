import {
distributeKnowledge,
shareKnowledge,
generateKnowledgeDistributionReport
}
from "./intelligence.knowledge.distribution.engine";


export function runKnowledgeDistribution(
data:any
){

return distributeKnowledge(data);

}



export function reviewKnowledgeDistribution(
agentId:string
){

return shareKnowledge(agentId);

}



export function resetKnowledgeDistribution(){

return true;

}



export {
generateKnowledgeDistributionReport
};

