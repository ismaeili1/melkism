import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphStrategicPlanningRecord
}
from "./strategic.planning.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphStrategicPlanningRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphStrategicPlanning(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphStrategicPlanningRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphStrategicPlanning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
