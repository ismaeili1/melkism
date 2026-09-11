/**
 * MELKISM Intelligence Runtime Event Binding
 */


export interface RuntimeEventBinding {


component:string;


event:string;


createdAt:string;


}



const bindings:
RuntimeEventBinding[]=[];



export function bindRuntimeComponent(
component:string,
event:string
){


const binding:RuntimeEventBinding={

component,

event,

createdAt:
new Date().toISOString()

};


bindings.push(binding);


return binding;

}



export function emitRuntimeComponentEvent(
component:string,
event:string
){


return {

component,

event,

timestamp:
new Date().toISOString()

};


}



export function getRuntimeBindings(){

return bindings;

}



export function clearRuntimeBindings(){

bindings.length=0;

}

