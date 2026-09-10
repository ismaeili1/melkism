import type {
IntelligenceKnowledgePriorityKnowledgeGraphMonitoringRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.monitoring.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMonitoringRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMonitoring(
record:IntelligenceKnowledgePriorityKnowledgeGraphMonitoringRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMonitoring(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMonitoring(){

records.length=0;

}
