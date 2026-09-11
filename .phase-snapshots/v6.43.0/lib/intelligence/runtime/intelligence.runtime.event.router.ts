/**
 * MELKISM Intelligence Runtime Event Router
 */


export interface RuntimeEventRoute {


event:string;


target:string;


createdAt:string;


}



const routes:
RuntimeEventRoute[]=[];



export function registerRuntimeRoute(
event:string,
target:string
){


const route:RuntimeEventRoute={

event,

target,

createdAt:
new Date().toISOString()

};


routes.push(route);


return route;

}



export function routeRuntimeEvent(
event:string
){


return routes.filter(

route=>route.event===event

);

}



export function getRuntimeRoutes(){

return routes;

}



export function clearRuntimeRoutes(){

routes.length=0;

}

