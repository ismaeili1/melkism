import type {
GatewayEndpoint
} from "./gateway.types";


const endpoints:GatewayEndpoint[]=[];



export function registerEndpoint(
endpoint:GatewayEndpoint
){

const exists =
endpoints.some(
item=>item.id===endpoint.id
);


if(!exists){

endpoints.push(endpoint);

}

}



export function getEndpoints(){

return [...endpoints];

}


