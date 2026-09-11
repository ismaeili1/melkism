
import {

updateState,
restoreState,
generateStateReport

}
from "./intelligence.state.engine";


export function runStateUpdate(
data:any
){

return updateState(data);

}


export function reviewState(
agentId:string
){

return restoreState(agentId);

}


export function resetState(){

return true;

}


export {

generateStateReport

};

