import type {
IntelligenceKnowledgeMonitoringRecord
}
from "./intelligence.knowledge.monitoring.types";


const records:IntelligenceKnowledgeMonitoringRecord[]=[];


export function saveKnowledgeMonitoring(
record:IntelligenceKnowledgeMonitoringRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeMonitoring(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeMonitoring(){

records.length=0;

}
