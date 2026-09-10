import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousLearningEngine,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousLearningEngine

}
from "./autonomous.learning.engine.store";


export function learnAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousLearningEngine({

id:crypto.randomUUID(),

createdAt:new Date(),

learningConfidence:0,

learningState:"initialized",

metadata:null,

...data

});

}



export function evaluateAutonomousLearningEngine(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousLearningEngine(agentId);

}
