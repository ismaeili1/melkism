
export interface ReflectiveLearningState {


id:string;


learningLevel:number;


evolutionLevel:number;


optimizationLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface EvolutionFeedbackCycle {


cycleId:string;


previousLearning:string;


newLearning:string;


}



export interface StrategicEvolutionState {


strategyId:string;


direction:string;


adaptationRate:number;


}


