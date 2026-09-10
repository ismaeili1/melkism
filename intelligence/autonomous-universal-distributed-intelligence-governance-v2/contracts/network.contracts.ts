
export interface CognitiveNetworkDistributedIntelligenceGovernanceInput {

id:string;

networkContext:string;

intelligenceContext:string;

distributionContext:string;

objective:string;

}



export interface CognitiveNetworkDistributedIntelligenceGovernanceRecord {

id:string;

networkScore:number;

distributionScore:number;

expansionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


