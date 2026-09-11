import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionRecord

}
from "./autonomous.evolution.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolution(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionRecord
){

records.push(record);

return record;

}



export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
