import type {
 ApiServiceDefinition,
} from "./registry";


const services:
ApiServiceDefinition[] = [];



export function registerApiService(
 service:ApiServiceDefinition
){

 const exists =
 services.some(
 item =>
 item.name === service.name
 &&
 item.version === service.version
 );


 if(!exists){

  services.push(service);

 }

}



export function getApiServices(){

 return [...services];

}

