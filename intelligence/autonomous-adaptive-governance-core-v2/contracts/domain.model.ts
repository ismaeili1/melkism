
export interface AdaptiveGovernanceState {


id:string;


governanceLevel:number;


policyLevel:number;


complianceLevel:number;


orchestrationLevel:number;


confidence:number;


timestamp:Date;


}



export interface GovernanceSignal {


name:string;


weight:number;


priority:number;


}



export interface PolicyRule {


id:string;


name:string;


active:boolean;


priority:number;


}


