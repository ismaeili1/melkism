import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategyExecution,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategyExecution

}
from "./autonomous.strategy.execution.store";


export function executeAutonomousStrategyKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategyExecution({

id:crypto.randomUUID(),

createdAt:new Date(),

confidenceScore:0,

impactScore:0,

executionState:"initialized",

metadata:null,

...data

});

}



export function evaluateAutonomousStrategyExecution(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategyExecution(agentId);

}
