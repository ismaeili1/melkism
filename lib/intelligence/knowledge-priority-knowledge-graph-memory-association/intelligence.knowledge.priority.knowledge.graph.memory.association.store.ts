import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryAssociationRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.association.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryAssociationRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryAssociation(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryAssociationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryAssociation(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryAssociation(){

records.length=0;

}
