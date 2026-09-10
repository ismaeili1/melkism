
export interface AutonomousGovernanceMultiAgentInput {

id:string;

agent:string;

knowledge:string;

}



export interface AutonomousGovernanceMultiAgentRecord {

id:string;

collectiveScore:number;

federationScore:number;

coordinationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


