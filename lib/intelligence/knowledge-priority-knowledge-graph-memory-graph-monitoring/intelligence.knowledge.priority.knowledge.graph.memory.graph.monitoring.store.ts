import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphMonitoringRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.monitoring.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphMonitoringRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphMonitoring(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphMonitoringRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphMonitoring(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphMonitoring(){

records.length=0;

}
