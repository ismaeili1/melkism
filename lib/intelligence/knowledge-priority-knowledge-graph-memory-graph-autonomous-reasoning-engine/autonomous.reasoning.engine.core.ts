import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousReasoningEngine,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousReasoningEngine

}
from "./autonomous.reasoning.engine.store";


export function reasonAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousReasoningEngine({

id:crypto.randomUUID(),

createdAt:new Date(),

reasoningConfidence:0,

reasoningState:"initialized",

metadata:null,

...data

});

}



export function evaluateAutonomousReasoningEngine(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousReasoningEngine(agentId);

}
