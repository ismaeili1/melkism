import {
saveKnowledgePriorityKnowledgeGraphOrchestration,
getAgentKnowledgePriorityKnowledgeGraphOrchestration
}
from "./intelligence.knowledge.priority.knowledge.graph.orchestration.store";


export function orchestrateKnowledgePriorityKnowledgeGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphOrchestration({

id:crypto.randomUUID(),

createdAt:new Date(),

orchestrationStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphOrchestration(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphOrchestration(agentId);

}


export function generateKnowledgeGraphOrchestrationReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
