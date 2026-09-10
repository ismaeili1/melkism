import {
manageKnowledgePriorityState,
evaluatePriorityState,
generatePriorityStateReport
}
from "./intelligence.knowledge.priority.state.engine";


export function runPriorityState(
data:any
){

return manageKnowledgePriorityState(data);

}


export function reviewPriorityState(
agentId:string
){

return evaluatePriorityState(agentId);

}


export function resetPriorityState(){

return true;

}


export {
generatePriorityStateReport
};

