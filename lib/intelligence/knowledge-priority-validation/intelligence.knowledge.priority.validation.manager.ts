import {
validateKnowledgePriority,
evaluatePriorityValidation,
generatePriorityValidationReport
}
from "./intelligence.knowledge.priority.validation.engine";


export function runPriorityValidation(
data:any
){

return validateKnowledgePriority(data);

}


export function reviewPriorityValidation(
agentId:string
){

return evaluatePriorityValidation(agentId);

}


export function resetPriorityValidation(){

return true;

}


export {
generatePriorityValidationReport
};

