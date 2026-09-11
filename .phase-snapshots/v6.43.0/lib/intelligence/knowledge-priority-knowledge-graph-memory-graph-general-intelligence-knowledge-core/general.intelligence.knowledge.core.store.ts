import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceKnowledgeCoreRecord

}
from "./general.intelligence.knowledge.core.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceKnowledgeCoreRecord[]
=[];


export function saveGeneralIntelligenceKnowledgeCore(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceKnowledgeCoreRecord
){

records.push(record);

return record;

}


export function getAgentGeneralIntelligenceKnowledgeCore(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
