import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionPolicy,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionPolicy

}
from "./autonomous.evolution.policy.store";


export function createAutonomousEvolutionPolicy(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionPolicy({

id:crypto.randomUUID(),

createdAt:new Date(),

policyConfidence:0,

policyState:"initialized",

metadata:null,

...data

});

}


export function evaluateAutonomousEvolutionPolicy(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionPolicy(agentId);

}
