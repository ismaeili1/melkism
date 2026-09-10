
export interface SelfAwareIntelligenceState {


id:string;


awarenessLevel:number;


evolutionLevel:number;


reflectionLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface CognitiveReflectionNode {


nodeId:string;


internalModel:string;


reflectionScore:number;


}



export interface EvolutionAwarenessCycle {


cycleId:string;


previousState:string;


improvedState:string;


}


