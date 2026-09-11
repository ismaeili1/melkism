import type {
 CoreModuleDefinition,
} from "./core.types";


const modules:
CoreModuleDefinition[]=[];



export function registerCoreModule(
 module:CoreModuleDefinition
){


const exists=
modules.some(
item=>item.name===module.name
);


if(!exists){

modules.push(module);

}


}



export function getCoreModules(){

return [...modules];

}

