
export interface InferenceInputContract {

    id: string;

    knowledgeContext: string[];

    evidence: string[];

}


export interface InferenceRuleContract {

    id: string;

    description: string;

    condition: string;

}


export interface InferenceOutputContract {

    id: string;

    derivedKnowledge: string;

    confidence: number;

}


