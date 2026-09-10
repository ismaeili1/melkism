import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCoreRecord

}
from "./general.intelligence.reasoning.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCoreRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCoreRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
