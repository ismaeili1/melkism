import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousRules,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousRules

}
from "./autonomous.rules.store";


export function createAutonomousRuleKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousRules({

id:crypto.randomUUID(),

createdAt:new Date(),

confidenceScore:0,

impactScore:0,

rulePriority:0,

ruleState:"initialized",

metadata:null,

...data

});

}



export function evaluateAutonomousRules(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousRules(agentId);

}
