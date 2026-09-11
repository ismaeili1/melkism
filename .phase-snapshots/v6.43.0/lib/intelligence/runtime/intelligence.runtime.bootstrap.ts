
import {
 getRuntimeRegistry
}
from "./intelligence.runtime.registry";


import {
 executeRuntime
}
from "./intelligence.runtime.executor";


export interface RuntimeBootstrapResult {

 initialized:boolean;

 modules:number;

 timestamp:string;

}



export function initializeRuntime()
:RuntimeBootstrapResult {


const registry =
getRuntimeRegistry();



return {

initialized:true,

modules:
registry.length ?? 0,

timestamp:
new Date().toISOString()

};


}



export function startRuntime(){

return initializeRuntime();

}



export function shutdownRuntime(){

return {

shutdown:true,

timestamp:
new Date().toISOString()

};

}



export async function runRuntime(input:unknown){

return executeRuntime(input);

}

