import {
getFoundation,
registerFoundation
} from "./foundation.registry";


import type {
PlatformLifecycleStatus
} from "./foundation.types";



export function updatePlatformStatus(
status:PlatformLifecycleStatus
){


const current=getFoundation();


if(!current){

return null;

}



const updated={

...current,

status

};


registerFoundation(updated);


return updated;


}


