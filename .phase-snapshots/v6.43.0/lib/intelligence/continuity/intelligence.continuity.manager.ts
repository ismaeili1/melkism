
import {

createCheckpoint,
restoreCheckpoint,
generateContinuityReport

}
from "./intelligence.continuity.engine";


export function runContinuity(
data:any
){

return createCheckpoint(data);

}


export function reviewContinuity(
agentId:string
){

return restoreCheckpoint(agentId);

}


export function resetContinuity(){

return true;

}


export {

generateContinuityReport

};

