import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionPolicyRecord

}
from "./autonomous.evolution.policy.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionPolicyRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionPolicy(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionPolicyRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionPolicy(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
