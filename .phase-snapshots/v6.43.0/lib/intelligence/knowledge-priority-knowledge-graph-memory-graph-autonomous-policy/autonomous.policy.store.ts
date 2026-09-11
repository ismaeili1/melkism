import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicyRecord
}
from "./autonomous.policy.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicyRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicy(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicyRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicy(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
