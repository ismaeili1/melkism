import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfImprovementRecord

}
from "./adaptive.self.improvement.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfImprovementRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfImprovement(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfImprovementRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfImprovement(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
