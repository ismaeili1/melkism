const modules:unknown[]=[];


export function registerIntelligenceModule(
module:unknown
){

modules.push(module);

return module;

}


export function getIntelligenceModules(){

return modules;

}

