import type {
PlatformFoundation
} from "./foundation.types";


let foundation:
PlatformFoundation | null = null;



export function registerFoundation(
data:PlatformFoundation
){

foundation=data;

}



export function getFoundation(){

return foundation;

}

