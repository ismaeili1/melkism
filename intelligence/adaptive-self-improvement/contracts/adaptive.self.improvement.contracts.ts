
export interface AdaptiveSelfImprovementInputContract {

    id: string;

    performanceHistory: string[];

    improvementFeedback: string[];

}



export interface AdaptiveSelfImprovementRecordContract {

    id: string;

    improvementAction: string;

    improvementScore: number;

    confidence: number;

    createdAt: Date;

}



export interface AdaptiveSelfImprovementEvaluationContract {

    recordId: string;

    optimizationScore: number;

    adaptationScore: number;

    feedback: string;

}


