
export interface ContinuousLearningState {


id:string;


learningLevel:number;


evolutionLevel:number;


optimizationLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface LearningEvolutionNode {


nodeId:string;


domain:string;


learningScore:number;


}



export interface ContinuousEvolutionCycle {


cycleId:string;


previousState:string;


currentState:string;


}


