import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphMonitoring,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphMonitoring
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.monitoring.store";


export function monitorKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphMonitoring({

id:crypto.randomUUID(),

createdAt:new Date(),

monitoringStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphMonitoring(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphMonitoring(agentId);

}


export function generateKnowledgeGraphMemoryGraphMonitoringReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
