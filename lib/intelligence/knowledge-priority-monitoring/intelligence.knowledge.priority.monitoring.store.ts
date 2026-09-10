import type {
IntelligenceKnowledgePriorityMonitoringRecord
}
from "./intelligence.knowledge.priority.monitoring.types";


const records:IntelligenceKnowledgePriorityMonitoringRecord[]=[];


export function saveKnowledgePriorityMonitoring(
record:IntelligenceKnowledgePriorityMonitoringRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityMonitoring(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityMonitoring(){

records.length=0;

}
