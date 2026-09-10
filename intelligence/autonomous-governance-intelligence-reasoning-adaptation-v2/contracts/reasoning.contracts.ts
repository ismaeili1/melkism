
export interface AutonomousGovernanceReasoningAdaptationInput {

id:string;

knowledgeContext:string;

reasoningContext:string;

}



export interface AutonomousGovernanceReasoningAdaptationRecord {

id:string;

adaptationScore:number;

inferenceScore:number;

decisionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


