import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionControlRecord

}
from "./autonomous.evolution.control.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionControlRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionControl(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionControlRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionControl(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
