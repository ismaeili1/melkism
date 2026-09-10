import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphStrategicPlanning,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphStrategicPlanning
}
from "./strategic.planning.store";


export function planKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphStrategicPlanning({

id:crypto.randomUUID(),

createdAt:new Date(),

impactScore:0,

confidenceScore:0,

metadata:null,

...data

});

}


export function evaluateStrategicPlanning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphStrategicPlanning(agentId);

}
