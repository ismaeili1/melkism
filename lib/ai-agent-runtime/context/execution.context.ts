export interface ExecutionContext {

requestId:string;

createdAt:string;

approved:boolean;

}


export function createExecutionContext():

ExecutionContext {


return {

requestId:
crypto.randomUUID(),

createdAt:
new Date().toISOString(),

approved:false

};


}


