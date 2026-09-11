import {
monitorKnowledge,
trackKnowledgeMetric,
generateKnowledgeMonitoringReport
}
from "./intelligence.knowledge.monitoring.engine";


export function runKnowledgeMonitoring(
data:any
){

return monitorKnowledge(data);

}


export function reviewKnowledgeMonitoring(
agentId:string
){

return trackKnowledgeMetric(agentId);

}


export function resetKnowledgeMonitoring(){

return true;

}


export {
generateKnowledgeMonitoringReport
};

