import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAction,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAction
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.action.store";


export function executeKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAction({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphCognitiveAction(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAction(agentId);

}
