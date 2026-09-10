
export interface IntelligenceGovernanceLearningInput {


id:string;


governanceSignals:string[];


policySignals:string[];


}



export interface IntelligenceGovernanceLearningRecord {


id:string;


governanceScore:number;


confidence:number;


status:string;


createdAt:Date;


}



