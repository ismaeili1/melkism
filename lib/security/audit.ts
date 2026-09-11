
export interface AuditEvent {

event:string;

timestamp:string;

}



export function createAudit(
event:string
){

return {

event,

timestamp:
new Date().toISOString()

};

}


