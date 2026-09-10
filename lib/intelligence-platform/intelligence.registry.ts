import type {
 IntelligenceModule,
} from "./intelligence.types";


const registry:IntelligenceModule[] = [];



export function registerIntelligenceModule(
 module:IntelligenceModule
){


const exists =
registry.some(
item => item.id === module.id
);



if(!exists){

 registry.push(module);

}


}



export function getIntelligenceModules(){

 return [...registry];

}



export function getIntelligenceModule(
id:string
){

return (
 registry.find(
 item => item.id === id
 )
 ?? null
);

}

