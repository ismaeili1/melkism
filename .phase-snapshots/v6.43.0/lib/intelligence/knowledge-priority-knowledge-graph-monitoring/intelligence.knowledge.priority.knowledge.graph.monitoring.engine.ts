import {
saveKnowledgePriorityKnowledgeGraphMonitoring,
getAgentKnowledgePriorityKnowledgeGraphMonitoring
}
from "./intelligence.knowledge.priority.knowledge.graph.monitoring.store";


export function monitorKnowledgePriorityKnowledgeGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMonitoring({

id:crypto.randomUUID(),

createdAt:new Date(),

monitoringStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMonitoring(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMonitoring(agentId);

}


export function generateKnowledgeGraphMonitoringReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
