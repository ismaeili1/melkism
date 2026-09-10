import {
saveKnowledgeState,
getAgentKnowledgeState
}
from "./intelligence.knowledge.state.store";


export function updateKnowledgeState(
data:any
){

return saveKnowledgeState({

id:crypto.randomUUID(),

createdAt:new Date(),

stateStatus:"active",

metadata:null,

...data

});

}



export function captureKnowledgeSnapshot(
agentId:string
){

return getAgentKnowledgeState(agentId);

}



export function generateKnowledgeStateReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
