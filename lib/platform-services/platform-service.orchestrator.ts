import {
 registerService,
 getServices,
} from "./platform-service.registry";


import {
 PLATFORM_SERVICES,
} from "./platform-service.constants";



export function initializePlatformServices(){


Object.values(
PLATFORM_SERVICES
)
.forEach(service=>{


registerService({

id:service,

name:service,

version:"1.0.0",

status:"running",

description:
"MELKISM Platform Service"

});


});


}



export function getPlatformServices(){

return getServices();

}


