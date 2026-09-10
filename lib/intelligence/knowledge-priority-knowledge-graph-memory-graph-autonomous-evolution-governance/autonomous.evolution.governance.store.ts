import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionGovernanceRecord

}
from "./autonomous.evolution.governance.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionGovernanceRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionGovernance(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionGovernanceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionGovernance(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
