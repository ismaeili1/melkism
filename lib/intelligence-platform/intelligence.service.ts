import {
 registerIntelligenceModule,
 getIntelligenceModules,
} from "./intelligence.registry";


import {
 INTELLIGENCE_MODULES,
} from "./intelligence.constants";



export function initializeIntelligencePlatform(){


Object.values(
 INTELLIGENCE_MODULES
)
.forEach(
module => {


registerIntelligenceModule({

id:module,

name:module,

version:"1.0.0",

status:"active",

description:
"MELKISM Intelligence Module",

capabilities:[]

});


}

);


}



export function listIntelligenceModules(){

return getIntelligenceModules();

}

