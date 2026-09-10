import type {
 ApiEndpointDocumentation,
} from "./api-doc.types";


const endpoints:
ApiEndpointDocumentation[] = [];



export function registerApiDocumentation(
 endpoint:ApiEndpointDocumentation
){

 const exists =
 endpoints.some(

 item =>
 item.path === endpoint.path
 &&
 item.method === endpoint.method

 );


 if(!exists){

 endpoints.push(endpoint);

 }

}



export function getApiDocumentation(){

 return [...endpoints];

}

