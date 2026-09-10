import {
maintainKnowledgePriorityKnowledgeGraphContinuity,
evaluateKnowledgeGraphContinuity,
generateKnowledgeGraphContinuityReport
}
from "./intelligence.knowledge.priority.knowledge.graph.continuity.engine";


export function runKnowledgeGraphContinuity(
data:any
){

return maintainKnowledgePriorityKnowledgeGraphContinuity(data);

}


export function reviewKnowledgeGraphContinuity(
agentId:string
){

return evaluateKnowledgeGraphContinuity(agentId);

}


export function resetKnowledgeGraphContinuity(){

return true;

}


export {
generateKnowledgeGraphContinuityReport
};

