import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAutonomousLearning,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAutonomousLearning
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.autonomous.learning.store";


export function learnKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAutonomousLearning({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphCognitiveAutonomousLearning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAutonomousLearning(agentId);

}
