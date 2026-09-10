
export interface PerceptionEvolutionState {


id:string;


perceptionLevel:number;


contextLevel:number;


fusionLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface PerceptionSignal {


id:string;


type:string;


value:string;


}



export interface EnvironmentalContext {


location:string;


condition:string;


meaning:string;


}


