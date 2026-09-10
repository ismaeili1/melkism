
export interface StrategicState {


id:string;


reasoningLevel:number;


planningLevel:number;


simulationLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface FutureScenario {


id:string;


scenario:string;


probability:number;


impact:number;


}



export interface StrategicDecisionModel {


objective:string;


path:string;


result:string;


}


