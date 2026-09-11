import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousOperation,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousOperation

}
from "./autonomous.operation.store";


export function operateAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousOperation({

id:crypto.randomUUID(),

createdAt:new Date(),

confidenceScore:0,

impactScore:0,

operationState:"initialized",

metadata:null,

...data

});

}



export function evaluateAutonomousOperation(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousOperation(agentId);

}
