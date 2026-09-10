import {
monitorKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphMonitoring,
generateKnowledgeGraphMemoryGraphMonitoringReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.monitoring.engine";


export function runKnowledgeGraphMemoryGraphMonitoring(
data:any
){

return monitorKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphMonitoring(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphMonitoring(agentId);

}


export function resetKnowledgeGraphMemoryGraphMonitoring(){

return true;

}


export {
generateKnowledgeGraphMemoryGraphMonitoringReport
};
