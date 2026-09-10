export interface ApiGatewayContext {

  version:string;

  requestId:string;

  timestamp:string;

}



export function createApiContext():

ApiGatewayContext {


 return {

  version:"v1",

  requestId:
  crypto.randomUUID(),

  timestamp:
  new Date().toISOString(),

 };


}

