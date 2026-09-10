
export interface EvolutionInputContract {

    id: string;

    intelligenceState: string[];

    improvementHistory: string[];

}



export interface EvolutionRecordContract {

    id: string;

    evolutionAction: string;

    evolutionScore: number;

    confidence: number;

    createdAt: Date;

}



export interface EvolutionEvaluationContract {

    evolutionId: string;

    stabilityScore: number;

    feedback: string;

}


