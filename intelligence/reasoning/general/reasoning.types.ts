
export interface GeneralReasoningContext {

    id: string;

    knowledgeContext: string[];

    reasoningGoal: string;

}



export interface GeneralReasoningResult {

    id: string;

    conclusion: string;

    confidence: number;

    evidence: string[];

}



