import {
generateKnowledgePriority,
evaluatePriorityGeneration,
generatePriorityGenerationReport
}
from "./intelligence.knowledge.priority.generation.engine";


export function runPriorityGeneration(
data:any
){

return generateKnowledgePriority(data);

}


export function reviewPriorityGeneration(
agentId:string
){

return evaluatePriorityGeneration(agentId);

}


export function resetPriorityGeneration(){

return true;

}


export {
generatePriorityGenerationReport
};

