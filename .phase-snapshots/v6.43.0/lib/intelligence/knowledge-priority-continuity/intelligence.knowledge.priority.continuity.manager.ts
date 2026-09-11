import {
maintainKnowledgePriorityContinuity,
evaluatePriorityContinuity,
generatePriorityContinuityReport
}
from "./intelligence.knowledge.priority.continuity.engine";


export function runPriorityContinuity(
data:any
){

return maintainKnowledgePriorityContinuity(data);

}


export function reviewPriorityContinuity(
agentId:string
){

return evaluatePriorityContinuity(agentId);

}


export function resetPriorityContinuity(){

return true;

}


export {
generatePriorityContinuityReport
};

