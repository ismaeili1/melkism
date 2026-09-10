export type GatewayStatus =
 | "active"
 | "inactive";


export interface GatewayEndpoint {

id:string;

path:string;

method:string;

service:string;

status:GatewayStatus;

}


export interface GatewayRequest {

path:string;

method:string;

payload:unknown;

}

