
export interface AutonomousGovernanceReasoningGovernanceInput {

id:string;

knowledgeContext:string;

reasoningContext:string;

}



export interface AutonomousGovernanceReasoningGovernanceRecord {

id:string;

adaptationScore:number;

inferenceScore:number;

decisionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


