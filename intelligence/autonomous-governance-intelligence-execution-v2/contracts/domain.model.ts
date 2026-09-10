
export interface OperationalState {


id:string;


executionLevel:number;


workflowLevel:number;


monitoringLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface OperationalTrace {


action:string;


process:string;


result:string;


}


