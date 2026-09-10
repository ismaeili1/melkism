import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionControl,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionControl

}
from "./autonomous.evolution.control.store";


export function controlAutonomousEvolutionKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionControl({

id:crypto.randomUUID(),

createdAt:new Date(),

controlConfidence:0,

controlStatus:"initialized",

metadata:null,

...data

});

}


export function evaluateAutonomousEvolutionControl(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousEvolutionControl(agentId);

}
