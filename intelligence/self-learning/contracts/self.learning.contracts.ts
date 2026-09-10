
export interface SelfLearningInputContract {

    id: string;

    previousKnowledge: string[];

    learningExperience: string;

}



export interface SelfLearningRecordContract {

    id: string;

    adaptation: string;

    confidence: number;

    createdAt: Date;

}



export interface SelfLearningEvaluationContract {

    recordId: string;

    improvementScore: number;

    feedback: string;

}


