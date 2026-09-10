import {
recoverKnowledge,
restoreKnowledgeState,
generateKnowledgeRecoveryReport
}
from "./intelligence.knowledge.recovery.engine";


export function runKnowledgeRecovery(
data:any
){

return recoverKnowledge(data);

}


export function reviewKnowledgeRecovery(
agentId:string
){

return restoreKnowledgeState(agentId);

}


export function resetKnowledgeRecovery(){

return true;

}


export {
generateKnowledgeRecoveryReport
};

