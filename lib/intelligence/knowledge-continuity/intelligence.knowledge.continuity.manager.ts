import {
maintainKnowledgeContinuity,
preserveKnowledgeState,
generateKnowledgeContinuityReport
}
from "./intelligence.knowledge.continuity.engine";


export function runKnowledgeContinuity(
data:any
){

return maintainKnowledgeContinuity(data);

}


export function reviewKnowledgeContinuity(
agentId:string
){

return preserveKnowledgeState(agentId);

}


export function resetKnowledgeContinuity(){

return true;

}


export {
generateKnowledgeContinuityReport
};

