export interface ExecutionGate {

allowed:boolean;

reason:string;

}


export function checkExecutionGate():

ExecutionGate {


return {

allowed:false,

reason:
"Human approval required"

};


}


