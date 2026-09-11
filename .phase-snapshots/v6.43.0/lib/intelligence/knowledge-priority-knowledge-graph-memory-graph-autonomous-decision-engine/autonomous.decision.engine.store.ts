import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousDecisionEngineRecord
}
from "./autonomous.decision.engine.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousDecisionEngineRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousDecisionEngine(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousDecisionEngineRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousDecisionEngine(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
