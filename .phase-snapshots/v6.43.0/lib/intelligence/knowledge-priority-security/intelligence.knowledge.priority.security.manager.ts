import {
secureKnowledgePriority,
evaluatePrioritySecurity,
generatePrioritySecurityReport
}
from "./intelligence.knowledge.priority.security.engine";


export function runPrioritySecurity(
data:any
){

return secureKnowledgePriority(data);

}


export function reviewPrioritySecurity(
agentId:string
){

return evaluatePrioritySecurity(agentId);

}


export function resetPrioritySecurity(){

return true;

}


export {
generatePrioritySecurityReport
};

