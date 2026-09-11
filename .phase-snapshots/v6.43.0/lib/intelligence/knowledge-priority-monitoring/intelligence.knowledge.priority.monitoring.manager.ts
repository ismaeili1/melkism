import {
monitorKnowledgePriority,
evaluatePriorityMonitoring,
generatePriorityMonitoringReport
}
from "./intelligence.knowledge.priority.monitoring.engine";


export function runPriorityMonitoring(
data:any
){

return monitorKnowledgePriority(data);

}


export function reviewPriorityMonitoring(
agentId:string
){

return evaluatePriorityMonitoring(agentId);

}


export function resetPriorityMonitoring(){

return true;

}


export {
generatePriorityMonitoringReport
};

