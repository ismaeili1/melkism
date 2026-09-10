import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphStrategicIntelligence,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphStrategicIntelligence
}
from "./strategic.intelligence.store";


export function strategizeKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphStrategicIntelligence({

id:crypto.randomUUID(),

createdAt:new Date(),

impactScore:0,

confidenceScore:0,

metadata:null,

...data

});

}


export function evaluateStrategicIntelligence(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphStrategicIntelligence(agentId);

}
