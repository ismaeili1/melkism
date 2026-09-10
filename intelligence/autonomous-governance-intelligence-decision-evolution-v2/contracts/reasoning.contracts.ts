
export interface AutonomousGovernanceDecisionEvolutionInput {

id:string;

knowledgeContext:string;

reasoningContext:string;

}



export interface AutonomousGovernanceDecisionEvolutionRecord {

id:string;

adaptationScore:number;

inferenceScore:number;

decisionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


