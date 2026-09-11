import {
inferKnowledgePriority,
evaluatePriorityInference,
generatePriorityInferenceReport
}
from "./intelligence.knowledge.priority.inference.engine";


export function runPriorityInference(
data:any
){

return inferKnowledgePriority(data);

}


export function reviewPriorityInference(
agentId:string
){

return evaluatePriorityInference(agentId);

}


export function resetPriorityInference(){

return true;

}


export {
generatePriorityInferenceReport
};

