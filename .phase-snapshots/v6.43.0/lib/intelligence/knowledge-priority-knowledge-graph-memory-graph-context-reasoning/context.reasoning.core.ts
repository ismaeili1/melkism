import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphContextReasoning,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContextReasoning
}
from "./context.reasoning.store";


export function reasonKnowledgePriorityKnowledgeGraphMemoryGraphContext(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphContextReasoning({

id:crypto.randomUUID(),

createdAt:new Date(),

confidenceScore:0,

metadata:null,

...data

});

}


export function evaluateContextReasoning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContextReasoning(agentId);

}
