import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCoreRecord

}
from "./general.inference.core.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCoreRecord[]
=[];


export function saveGeneralIntelligenceInferenceCore(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceInferenceCoreRecord
){

records.push(record);

return record;

}


export function getAgentGeneralIntelligenceInferenceCore(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
