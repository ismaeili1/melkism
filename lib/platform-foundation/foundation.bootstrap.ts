import {
registerFoundation
} from "./foundation.registry";


import {
PLATFORM_FOUNDATION_NAME,
PLATFORM_FOUNDATION_VERSION
} from "./foundation.constants";



export function bootstrapPlatform(){


registerFoundation({

name:
PLATFORM_FOUNDATION_NAME,

version:
PLATFORM_FOUNDATION_VERSION,

status:"ready",

startedAt:
new Date().toISOString()

});


}


