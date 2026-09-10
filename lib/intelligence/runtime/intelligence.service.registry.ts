/**
 * MELKISM Intelligence Service Registry
 * v38.20.14
 */


export interface IntelligenceServiceRecord {


name:string;

version:string;

createdAt:Date;

}



export class IntelligenceServiceRegistry {


private services:
IntelligenceServiceRecord[] = [];



registerService(

name:string,

version:string

){


const service:
IntelligenceServiceRecord = {


name,

version,

createdAt:new Date()


};


this.services.push(service);


return service;


}



resolveService(

name:string

){


return this.services.find(

service =>
service.name === name

);


}



getRegisteredServices(){


return this.services;


}


}
