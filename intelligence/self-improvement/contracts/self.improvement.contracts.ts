
export interface SelfImprovementInputContract {

    id: string;

    capabilityState: string[];

    performanceHistory: string[];

}



export interface SelfImprovementRecordContract {

    id: string;

    improvementAction: string;

    improvementScore: number;

    createdAt: Date;

}



export interface SelfImprovementEvaluationContract {

    improvementId: string;

    resultScore: number;

    feedback: string;

}


