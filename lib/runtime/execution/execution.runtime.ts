import type {

ExecutionContext

} from "./execution.types";



export class ExecutionRuntime {



private executions:
ExecutionContext[] = [];



create(
workflowId:string
){


const execution:ExecutionContext={


id:
crypto.randomUUID(),


workflowId,


status:
"created"


};



this.executions.push(execution);


return execution;


}



start(
executionId:string
){


const execution =

this.executions.find(

item=>

item.id===executionId

);



if(!execution){

throw new Error(
"Execution not found"
);

}



execution.status="running";

execution.startedAt=new Date();


return execution;


}



pause(
executionId:string
){


const execution =

this.executions.find(

item=>

item.id===executionId

);



if(!execution){

throw new Error(
"Execution not found"
);

}



execution.status="paused";


return execution;


}



complete(
executionId:string
){


const execution =

this.executions.find(

item=>

item.id===executionId

);



if(!execution){

throw new Error(
"Execution not found"
);

}



execution.status="completed";

execution.completedAt=new Date();


return execution;


}



getExecutions(){


return this.executions;


}


}


