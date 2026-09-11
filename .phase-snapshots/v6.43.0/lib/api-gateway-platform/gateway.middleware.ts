export interface GatewayContext {

authenticated:boolean;

requestId:string;

}



export function createGatewayContext():

GatewayContext {


return {

authenticated:false,

requestId:
crypto.randomUUID()

};


}


