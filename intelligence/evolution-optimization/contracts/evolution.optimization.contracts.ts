
export interface EvolutionOptimizationInputContract {

    id: string;

    evolutionHistory: string[];

    performanceData: string[];

}



export interface EvolutionOptimizationRecordContract {

    id: string;

    optimizationAction: string;

    optimizationScore: number;

    confidence: number;

    createdAt: Date;

}



export interface EvolutionOptimizationEvaluationContract {

    optimizationId: string;

    stabilityScore: number;

    improvementScore: number;

    feedback: string;

}


