import {
secureKnowledge,
applySecurityPolicy,
generateKnowledgeSecurityReport
}
from "./intelligence.knowledge.security.engine";


export function runKnowledgeSecurity(
data:any
){

return secureKnowledge(data);

}


export function reviewKnowledgeSecurity(
agentId:string
){

return applySecurityPolicy(agentId);

}


export function resetKnowledgeSecurity(){

return true;

}


export {
generateKnowledgeSecurityReport
};

