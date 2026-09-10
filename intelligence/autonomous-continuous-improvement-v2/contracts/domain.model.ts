
export interface SelfEvolutionState {


id:string;


evolutionLevel:number;


capabilityLevel:number;


improvementLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface EvolutionSignal {


name:string;


weight:number;


priority:number;


}



export interface CapabilityExpansion {


id:string;


capability:string;


enabled:boolean;


priority:number;


}


