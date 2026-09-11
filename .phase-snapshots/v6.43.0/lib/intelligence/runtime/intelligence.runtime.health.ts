/**
 * MELKISM Intelligence Runtime Health Contract
 */


export type RuntimeHealthStatus =
"CREATED"
|
"INITIALIZED"
|
"READY"
|
"RUNNING"
|
"DEGRADED"
|
"FAILED"
|
"SHUTDOWN";



let runtimeHealthStatus:
RuntimeHealthStatus =
"CREATED";



export function setRuntimeHealthStatus(
status:RuntimeHealthStatus
){

runtimeHealthStatus=status;

}



export function getRuntimeStatus(){

return runtimeHealthStatus;

}



export function getRuntimeHealth(){

return {

status:runtimeHealthStatus,

healthy:
runtimeHealthStatus !== "FAILED"
&&
runtimeHealthStatus !== "SHUTDOWN",

timestamp:
new Date().toISOString()

};

}



export function isRuntimeHealthy(){

return getRuntimeHealth().healthy;

}

