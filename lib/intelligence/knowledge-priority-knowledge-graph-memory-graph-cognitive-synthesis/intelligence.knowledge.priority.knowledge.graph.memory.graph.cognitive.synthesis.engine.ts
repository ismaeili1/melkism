import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSynthesis,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSynthesis
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.synthesis.store";


export function cognitiveSynthesizeKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSynthesis({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphCognitiveSynthesis(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSynthesis(agentId);

}

