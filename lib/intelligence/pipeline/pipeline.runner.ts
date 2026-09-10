import type {

PipelineExecution

} from "./pipeline.types";


import type {

IntelligenceStage

} from "../orchestrator/orchestrator.types";



export class PipelineRunner {



private executions:PipelineExecution[]=[];



start(

stages:IntelligenceStage[]

){


const execution:PipelineExecution={


id:crypto.randomUUID(),


stages,


completed:false,


createdAt:new Date()


};



this.executions.push(execution);


return execution;

}



runStage(

execution:PipelineExecution,

stage:IntelligenceStage

){


execution.current=stage;


return execution;

}



complete(

execution:PipelineExecution

){


execution.completed=true;


return execution;

}



getAll(){

return this.executions;

}



}

