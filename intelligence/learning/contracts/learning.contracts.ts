
export interface LearningInputContract {

    id: string;

    sourceKnowledge: string[];

    inferenceResult: string;

}



export interface LearningRecordContract {

    id: string;

    lesson: string;

    confidence: number;

    createdAt: Date;

}



export interface LearningEvaluationContract {

    learningId: string;

    score: number;

    feedback: string;

}



