/**
 * MELKISM Intelligence State Synchronization
 * v38.20.14
 */


export interface IntelligenceStateRecord {


service:string;

state:unknown;

createdAt:Date;

}



export class IntelligenceStateSynchronization {


private history:
IntelligenceStateRecord[] = [];



syncState(

service:string,

state:unknown

){


const record:
IntelligenceStateRecord = {


service,

state,

createdAt:new Date()


};


this.history.push(record);


return record;


}



updateState(

service:string,

state:unknown

){


return this.syncState(
service,
state
);


}



getStateHistory(){


return this.history;


}


}
