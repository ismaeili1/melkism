import {
saveKnowledgePriorityMonitoring,
getAgentKnowledgePriorityMonitoring
}
from "./intelligence.knowledge.priority.monitoring.store";


export function monitorKnowledgePriority(
data:any
){

return saveKnowledgePriorityMonitoring({

id:crypto.randomUUID(),

createdAt:new Date(),

monitoringStatus:"completed",

metadata:null,

...data

});

}



export function evaluatePriorityMonitoring(
agentId:string
){

return getAgentKnowledgePriorityMonitoring(agentId);

}



export function generatePriorityMonitoringReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
