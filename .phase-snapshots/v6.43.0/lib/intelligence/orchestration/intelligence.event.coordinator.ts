/**
 * MELKISM Intelligence Event Coordinator
 * v38.20.14
 */


export interface IntelligenceEventRecord {


name:string;

payload:unknown;

createdAt:Date;

}



export class IntelligenceEventCoordinator {


private history:
IntelligenceEventRecord[] = [];



registerEvent(

name:string,

payload:unknown

){


const event:
IntelligenceEventRecord = {


name,

payload,

createdAt:new Date()


};


this.history.push(event);


return event;


}



dispatchEvent(

name:string

){


return this.history.find(

event =>
event.name===name

);


}



getEventHistory(){


return this.history;


}


}
