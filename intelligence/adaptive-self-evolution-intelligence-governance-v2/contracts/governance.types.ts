
export interface GovernanceDecision {


id:string;

decision:string;

confidence:number;

reason:string;

createdAt:Date;

}


export interface GovernanceMemory {


id:string;

pattern:string;

weight:number;

}

