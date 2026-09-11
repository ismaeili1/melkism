export interface PlatformHealth {

status:
"healthy"
|
"unhealthy";

checkedAt:string;

}



export function checkPlatformHealth():

PlatformHealth {


return {

status:"healthy",

checkedAt:
new Date().toISOString(),

};


}


