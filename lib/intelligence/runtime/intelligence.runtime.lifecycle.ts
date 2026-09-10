/**
 * MELKISM Intelligence Runtime Lifecycle
 */


export type RuntimeLifecycleStatus =
"created"
|
"initialized"
|
"ready"
|
"running"
|
"shutdown";



let lifecycleStatus:
RuntimeLifecycleStatus =
"created";



export function initializeRuntime(){

lifecycleStatus="initialized";

return lifecycleStatus;

}



export function startRuntime(){

lifecycleStatus="ready";

return lifecycleStatus;

}



export function healthRuntime(){

return {

status:lifecycleStatus,

healthy:
lifecycleStatus !== "shutdown"

};

}



export function shutdownRuntime(){

lifecycleStatus="shutdown";

return lifecycleStatus;

}
