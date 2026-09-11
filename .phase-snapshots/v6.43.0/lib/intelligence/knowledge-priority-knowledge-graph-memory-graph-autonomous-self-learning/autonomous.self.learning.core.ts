import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfLearning,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfLearning

}
from "./autonomous.self.learning.store";


export function selfLearnAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfLearning({

id:crypto.randomUUID(),

createdAt:new Date(),

selfLearningConfidence:0,

selfLearningState:"initialized",

metadata:null,

...data

});

}



export function evaluateAutonomousSelfLearning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfLearning(agentId);

}
