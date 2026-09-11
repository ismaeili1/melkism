
import {

analyzeEvolution,
generateEvolutionPath,
applyEvolution

}
from "./intelligence.evolution.engine";



export function runEvolution(
data:any
){

return analyzeEvolution(data);

}



export function reviewEvolution(
agentId:string
){

return applyEvolution(agentId);

}



export function resetEvolution(){

return true;

}



export {

generateEvolutionPath

};

