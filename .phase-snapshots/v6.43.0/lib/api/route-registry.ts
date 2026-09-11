export interface ApiRouteDefinition {

 path:string;

 method:string;

 service:string;

}



const routes:
ApiRouteDefinition[] = [];



export function registerApiRoute(
 route:ApiRouteDefinition
){

 routes.push(route);

}



export function getApiRoutes(){

 return [...routes];

}

