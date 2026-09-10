
export interface AdaptiveEvolutionInputContract {

    id: string;

    environmentSignals: string[];

    evolutionState: string[];

}



export interface AdaptiveEvolutionRecordContract {

    id: string;

    adaptationAction: string;

    adaptationScore: number;

    confidence: number;

    createdAt: Date;

}



export interface AdaptiveEvolutionEvaluationContract {

    adaptationId: string;

    responseScore: number;

    stabilityScore: number;

    feedback: string;

}


