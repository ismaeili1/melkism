import {
associateKnowledgePriorityKnowledgeGraphMemory,
evaluateKnowledgeGraphMemoryAssociation,
generateKnowledgeGraphMemoryAssociationReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.association.engine";


export function runKnowledgeGraphMemoryAssociation(
data:any
){

return associateKnowledgePriorityKnowledgeGraphMemory(data);

}



export function reviewKnowledgeGraphMemoryAssociation(
agentId:string
){

return evaluateKnowledgeGraphMemoryAssociation(agentId);

}



export function resetKnowledgeGraphMemoryAssociation(){

return true;

}



export {
generateKnowledgeGraphMemoryAssociationReport
};

