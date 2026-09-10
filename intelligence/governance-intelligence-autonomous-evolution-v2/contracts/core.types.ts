
export interface AutonomousDecision {

id:string;

decision:string;

confidence:number;

reason:string;

createdAt:Date;

}



export interface AutonomousMemory {

id:string;

pattern:string;

weight:number;

}



export interface AutonomousCapability {

version:string;

capability:string;

level:number;

}


