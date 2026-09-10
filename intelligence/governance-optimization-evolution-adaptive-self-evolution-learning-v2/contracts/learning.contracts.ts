
export interface AdaptiveSelfEvolutionLearningInput {

id:string;

signals:string[];

patterns:string[];

}


export interface AdaptiveSelfEvolutionLearningRecord {

id:string;

learningScore:number;

memoryScore:number;

confidence:number;

status:string;

createdAt:Date;

}

