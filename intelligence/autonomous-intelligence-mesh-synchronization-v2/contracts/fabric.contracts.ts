
export interface AutonomousFabricMeshSynchronizationInput {

id:string;

source:string;

target:string;

operation:string;

}



export interface AutonomousFabricMeshSynchronizationRecord {

id:string;

fabricScore:number;

meshScore:number;

routingScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


