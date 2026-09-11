import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicy,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicy

}
from "./autonomous.policy.store";


export function createAutonomousPolicyKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicy({

id:crypto.randomUUID(),

createdAt:new Date(),

confidenceScore:0,

impactScore:0,

policyState:"initialized",

metadata:null,

...data

});

}



export function evaluateAutonomousPolicy(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicy(agentId);

}
