export interface ApiHealthStatus {

 status:
 "healthy"
 |
 "unhealthy";

 timestamp:string;

}



export function getApiHealth():

ApiHealthStatus {


 return {

 status:"healthy",

 timestamp:
 new Date().toISOString(),

 };


}


