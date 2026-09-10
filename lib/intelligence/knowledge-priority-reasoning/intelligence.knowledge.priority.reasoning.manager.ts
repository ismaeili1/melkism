import {
reasonPriorityKnowledge,
evaluatePriorityReasoning,
generatePriorityReasoningReport
}
from "./intelligence.knowledge.priority.reasoning.engine";


export function runPriorityReasoning(
data:any
){

return reasonPriorityKnowledge(data);

}


export function reviewPriorityReasoning(
agentId:string
){

return evaluatePriorityReasoning(agentId);

}


export function resetPriorityReasoning(){

return true;

}


export {
generatePriorityReasoningReport
};

