import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphState,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphState
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.state.store";


export function manageKnowledgePriorityKnowledgeGraphMemoryGraphState(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphState({

id:crypto.randomUUID(),

createdAt:new Date(),

stateStatus:"active",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphState(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphState(agentId);

}


export function generateKnowledgeGraphMemoryGraphStateReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
