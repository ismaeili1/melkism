import {
prioritizeKnowledge,
evaluateKnowledgePriority,
generateKnowledgePriorityReport
}
from "./intelligence.knowledge.priority.engine";


export function runKnowledgePriority(
data:any
){

return prioritizeKnowledge(data);

}


export function reviewKnowledgePriority(
agentId:string
){

return evaluateKnowledgePriority(agentId);

}


export function resetKnowledgePriority(){

return true;

}


export {
generateKnowledgePriorityReport
};

