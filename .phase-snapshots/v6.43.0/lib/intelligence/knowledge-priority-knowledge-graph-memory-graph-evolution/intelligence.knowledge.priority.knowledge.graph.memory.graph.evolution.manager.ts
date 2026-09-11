import {
evolveKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphEvolution,
generateKnowledgeGraphMemoryGraphEvolutionReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.evolution.engine";


export function runKnowledgeGraphMemoryGraphEvolution(
data:any
){

return evolveKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphEvolution(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphEvolution(agentId);

}



export function resetKnowledgeGraphMemoryGraphEvolution(){

return true;

}



export {
generateKnowledgeGraphMemoryGraphEvolutionReport
};
