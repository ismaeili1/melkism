import {
recoverKnowledgePriority,
evaluatePriorityRecovery,
generatePriorityRecoveryReport
}
from "./intelligence.knowledge.priority.recovery.engine";


export function runPriorityRecovery(
data:any
){

return recoverKnowledgePriority(data);

}


export function reviewPriorityRecovery(
agentId:string
){

return evaluatePriorityRecovery(agentId);

}


export function resetPriorityRecovery(){

return true;

}


export {
generatePriorityRecoveryReport
};

