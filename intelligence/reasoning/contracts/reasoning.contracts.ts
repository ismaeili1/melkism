
export interface ReasoningInputContract {

    id: string;

    knowledgeContext: string[];

    objective: string;

}


export interface ReasoningOutputContract {

    id: string;

    conclusion: string;

    confidence: number;

    reasoningPath: string[];

}


export interface ReasoningEvaluationContract {

    reasoningId: string;

    score: number;

    evaluatedAt: Date;

}


