import {
saveKnowledgeMonitoring,
getAgentKnowledgeMonitoring
}
from "./intelligence.knowledge.monitoring.store";


export function monitorKnowledge(
data:any
){

return saveKnowledgeMonitoring({

id:crypto.randomUUID(),

createdAt:new Date(),

monitoringStatus:"active",

metadata:null,

...data

});

}



export function trackKnowledgeMetric(
agentId:string
){

return getAgentKnowledgeMonitoring(agentId);

}



export function generateKnowledgeMonitoringReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
