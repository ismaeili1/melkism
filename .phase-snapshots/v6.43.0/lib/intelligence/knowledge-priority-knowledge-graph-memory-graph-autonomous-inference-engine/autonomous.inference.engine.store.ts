import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousInferenceEngineRecord
}
from "./autonomous.inference.engine.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousInferenceEngineRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousInferenceEngine(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousInferenceEngineRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousInferenceEngine(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
