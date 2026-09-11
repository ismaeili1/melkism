import {
 registerModule,
 listModules,
} from "./module-registration.registry";


import {
 PLATFORM_MODULES,
} from "./module-registration.constants";



export function initializePlatformModules(){


Object.values(PLATFORM_MODULES)
.forEach(module=>{


registerModule({

id:module,

name:module,

version:"1.0.0",

status:"enabled",

description:
"MELKISM platform module"

});


});


}



export function getPlatformModuleList(){

return listModules();

}

