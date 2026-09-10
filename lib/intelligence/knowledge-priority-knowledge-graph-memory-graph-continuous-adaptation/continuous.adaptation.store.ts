import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptationRecord

}
from "./continuous.adaptation.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptationRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptation(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptation(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
