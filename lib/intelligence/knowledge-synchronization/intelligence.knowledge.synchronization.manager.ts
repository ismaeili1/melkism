import {
synchronizeKnowledge,
alignKnowledgeState,
generateKnowledgeSynchronizationReport
}
from "./intelligence.knowledge.synchronization.engine";


export function runKnowledgeSynchronization(
data:any
){

return synchronizeKnowledge(data);

}


export function reviewKnowledgeSynchronization(
agentId:string
){

return alignKnowledgeState(agentId);

}


export function resetKnowledgeSynchronization(){

return true;

}


export {
generateKnowledgeSynchronizationReport
};

