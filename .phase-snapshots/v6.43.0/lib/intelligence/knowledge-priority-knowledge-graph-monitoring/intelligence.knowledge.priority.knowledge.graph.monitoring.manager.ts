import {
monitorKnowledgePriorityKnowledgeGraph,
evaluateKnowledgeGraphMonitoring,
generateKnowledgeGraphMonitoringReport
}
from "./intelligence.knowledge.priority.knowledge.graph.monitoring.engine";


export function runKnowledgeGraphMonitoring(
data:any
){

return monitorKnowledgePriorityKnowledgeGraph(data);

}


export function reviewKnowledgeGraphMonitoring(
agentId:string
){

return evaluateKnowledgeGraphMonitoring(agentId);

}


export function resetKnowledgeGraphMonitoring(){

return true;

}


export {
generateKnowledgeGraphMonitoringReport
};

