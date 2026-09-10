import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCoreRecord

}
from "./general.intelligence.inference.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCoreRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCore(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCoreRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCore(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
