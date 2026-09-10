
export interface AdaptiveSelfLearningInputContract {

    id: string;

    learningHistory: string[];

    environmentFeedback: string[];

}



export interface AdaptiveSelfLearningRecordContract {

    id: string;

    adaptationStrategy: string;

    learningScore: number;

    confidence: number;

    createdAt: Date;

}



export interface AdaptiveSelfLearningEvaluationContract {

    recordId: string;

    adaptationScore: number;

    improvementScore: number;

    feedback: string;

}


