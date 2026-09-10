import type {
 PlatformService,
} from "./platform-service.types";


const services:PlatformService[]=[];



export function registerService(
service:PlatformService
){


const exists =
services.some(
item=>item.id===service.id
);



if(!exists){

services.push(service);

}


}



export function getServices(){

return [...services];

}


