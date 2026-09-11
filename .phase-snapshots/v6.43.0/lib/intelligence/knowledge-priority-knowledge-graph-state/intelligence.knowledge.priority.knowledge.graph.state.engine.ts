import {
saveKnowledgePriorityKnowledgeGraphState,
getAgentKnowledgePriorityKnowledgeGraphState
}
from "./intelligence.knowledge.priority.knowledge.graph.state.store";


export function manageKnowledgePriorityKnowledgeGraphState(
data:any
){

return saveKnowledgePriorityKnowledgeGraphState({

id:crypto.randomUUID(),

createdAt:new Date(),

stateStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphState(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphState(agentId);

}


export function generateKnowledgeGraphStateReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
