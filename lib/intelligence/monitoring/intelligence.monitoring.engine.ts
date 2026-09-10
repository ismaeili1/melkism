
import {

saveMonitoringRecord,
getAgentMonitoring

}
from "./intelligence.monitoring.store";



export function recordMetric(
data:any
){

return saveMonitoringRecord({

id:crypto.randomUUID(),

createdAt:new Date(),

timestamp:new Date(),

status:"active",

...data

});

}



export function analyzeHealth(
agentId:string
){

return getAgentMonitoring(agentId);

}



export function generateMonitoringReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

