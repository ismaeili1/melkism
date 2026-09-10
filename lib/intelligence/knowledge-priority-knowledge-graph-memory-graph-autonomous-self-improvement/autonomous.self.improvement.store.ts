import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfImprovementRecord

}
from "./autonomous.self.improvement.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfImprovementRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfImprovement(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfImprovementRecord
){

records.push(record);

return record;

}



export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfImprovement(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
