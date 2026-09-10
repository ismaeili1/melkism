import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphDecisionIntelligence,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphDecisionIntelligence
}
from "./decision.intelligence.store";


export function decideKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphDecisionIntelligence({

id:crypto.randomUUID(),

createdAt:new Date(),

confidenceScore:0,

impactScore:0,

metadata:null,

...data

});

}


export function evaluateDecisionIntelligence(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphDecisionIntelligence(agentId);

}
