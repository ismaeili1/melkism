
export interface GovernanceState {


id:string;


governanceLevel:number;


qualityLevel:number;


policyLevel:number;


complianceLevel:number;


confidence:number;


timestamp:Date;


}



export interface IntelligenceAudit {


module:string;


score:number;


result:string;


}


