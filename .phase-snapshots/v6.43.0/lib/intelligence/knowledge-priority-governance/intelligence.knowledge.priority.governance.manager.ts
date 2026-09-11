import {
governKnowledgePriority,
evaluatePriorityGovernance,
generatePriorityGovernanceReport
}
from "./intelligence.knowledge.priority.governance.engine";


export function runPriorityGovernance(
data:any
){

return governKnowledgePriority(data);

}


export function reviewPriorityGovernance(
agentId:string
){

return evaluatePriorityGovernance(agentId);

}


export function resetPriorityGovernance(){

return true;

}


export {
generatePriorityGovernanceReport
};

