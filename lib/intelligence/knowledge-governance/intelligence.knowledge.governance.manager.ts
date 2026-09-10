import {
governKnowledge,
applyKnowledgePolicy,
generateKnowledgeGovernanceReport
}
from "./intelligence.knowledge.governance.engine";


export function runKnowledgeGovernance(
data:any
){

return governKnowledge(data);

}


export function reviewKnowledgeGovernance(
agentId:string
){

return applyKnowledgePolicy(agentId);

}


export function resetKnowledgeGovernance(){

return true;

}


export {
generateKnowledgeGovernanceReport
};

