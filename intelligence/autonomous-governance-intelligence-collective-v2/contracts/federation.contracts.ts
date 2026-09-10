
export interface AutonomousGovernanceCollectiveInput {

id:string;

agent:string;

knowledge:string;

}



export interface AutonomousGovernanceCollectiveRecord {

id:string;

collectiveScore:number;

federationScore:number;

coordinationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


