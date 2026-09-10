
import {

executeRecovery,
analyzeRecovery,
generateRecoveryReport

}
from "./intelligence.recovery.engine";


export function runRecovery(
data:any
){

return executeRecovery(data);

}



export function reviewRecovery(
agentId:string
){

return analyzeRecovery(agentId);

}



export function resetRecovery(){

return true;

}



export {

generateRecoveryReport

};

