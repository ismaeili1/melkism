
export interface CognitiveOperatingState {


id:string;


operatingLevel:number;


evolutionLevel:number;


adaptationLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface CognitiveAgentNode {


nodeId:string;


intelligenceDomain:string;


adaptationScore:number;


}



export interface CognitiveEvolutionLoop {


loopId:string;


previousState:string;


currentState:string;


}


