import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousDecisionEngine,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousDecisionEngine

}
from "./autonomous.decision.engine.store";


export function decideAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousDecisionEngine({

id:crypto.randomUUID(),

createdAt:new Date(),

decisionConfidence:0,

decisionState:"initialized",

metadata:null,

...data

});

}



export function evaluateAutonomousDecisionEngine(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousDecisionEngine(agentId);

}
