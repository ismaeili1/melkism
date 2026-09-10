
export interface AutonomousGovernanceInferenceEvolutionInput {

id:string;

knowledgeContext:string;

reasoningContext:string;

}



export interface AutonomousGovernanceInferenceEvolutionRecord {

id:string;

adaptationScore:number;

inferenceScore:number;

decisionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


