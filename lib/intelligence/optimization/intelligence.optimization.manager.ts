
import {

optimizeAgent,
analyzeOptimization,
generateStrategy

}
from "./intelligence.optimization.engine";



export function runOptimization(
data:any
){

return optimizeAgent(data);

}



export function reviewOptimization(
agentId:string
){

return analyzeOptimization(agentId);

}



export function resetOptimization(){

return true;

}



export {

generateStrategy

};

