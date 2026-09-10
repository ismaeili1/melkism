import {
orchestrateKnowledgePriority,
evaluatePriorityOrchestration,
generatePriorityOrchestrationReport
}
from "./intelligence.knowledge.priority.orchestration.engine";


export function runPriorityOrchestration(
data:any
){

return orchestrateKnowledgePriority(data);

}


export function reviewPriorityOrchestration(
agentId:string
){

return evaluatePriorityOrchestration(agentId);

}


export function resetPriorityOrchestration(){

return true;

}


export {
generatePriorityOrchestrationReport
};

