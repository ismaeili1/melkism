import {
updateKnowledgeState,
captureKnowledgeSnapshot,
generateKnowledgeStateReport
}
from "./intelligence.knowledge.state.engine";


export function runKnowledgeState(
data:any
){

return updateKnowledgeState(data);

}


export function reviewKnowledgeState(
agentId:string
){

return captureKnowledgeSnapshot(agentId);

}


export function resetKnowledgeState(){

return true;

}


export {
generateKnowledgeStateReport
};

