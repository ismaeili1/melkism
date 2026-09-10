import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCognitiveCoreRecord

}
from "./general.intelligence.cognitive.core.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCognitiveCoreRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCognitiveCore(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCognitiveCoreRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCognitiveCore(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
