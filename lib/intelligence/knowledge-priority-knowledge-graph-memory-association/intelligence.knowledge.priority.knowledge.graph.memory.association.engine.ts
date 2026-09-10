import {
saveKnowledgePriorityKnowledgeGraphMemoryAssociation,
getAgentKnowledgePriorityKnowledgeGraphMemoryAssociation
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.association.store";


export function associateKnowledgePriorityKnowledgeGraphMemory(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryAssociation({

id:crypto.randomUUID(),

createdAt:new Date(),

associationStatus:"completed",

metadata:null,

...data

});

}



export function evaluateKnowledgeGraphMemoryAssociation(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryAssociation(agentId);

}



export function generateKnowledgeGraphMemoryAssociationReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
