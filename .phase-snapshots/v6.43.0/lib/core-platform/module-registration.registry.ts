import type {
 PlatformModule,
} from "./module-registration.types";


const modules:PlatformModule[]=[];



export function registerModule(
 module:PlatformModule
){

const exists =
modules.some(
item=>item.id===module.id
);


if(!exists){

modules.push(module);

}

}



export function listModules(){

return [...modules];

}

