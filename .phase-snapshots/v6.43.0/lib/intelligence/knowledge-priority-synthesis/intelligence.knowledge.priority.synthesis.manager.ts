import {
synthesizeKnowledgePriority,
evaluatePrioritySynthesis,
generatePrioritySynthesisReport
}
from "./intelligence.knowledge.priority.synthesis.engine";


export function runPrioritySynthesis(
data:any
){

return synthesizeKnowledgePriority(data);

}


export function reviewPrioritySynthesis(
agentId:string
){

return evaluatePrioritySynthesis(agentId);

}


export function resetPrioritySynthesis(){

return true;

}


export {
generatePrioritySynthesisReport
};

