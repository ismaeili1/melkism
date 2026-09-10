
import {

recordMetric,
analyzeHealth,
generateMonitoringReport

}
from "./intelligence.monitoring.engine";



export function runMonitoring(
data:any
){

return recordMetric(data);

}



export function reviewMonitoring(
agentId:string
){

return analyzeHealth(agentId);

}



export function resetMonitoring(){

return true;

}



export {

generateMonitoringReport

};

