import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfImprovement,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfImprovement

}
from "./autonomous.self.improvement.store";


export function improveAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfImprovement({

id:crypto.randomUUID(),

createdAt:new Date(),

improvementConfidence:0,

improvementState:"initialized",

metadata:null,

...data

});

}



export function evaluateAutonomousSelfImprovement(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousSelfImprovement(agentId);

}
