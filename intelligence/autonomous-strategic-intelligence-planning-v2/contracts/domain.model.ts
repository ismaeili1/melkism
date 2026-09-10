
export interface MetaStrategicState {


id:string;


metaCognitionLevel:number;


strategyLevel:number;


reasoningLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface StrategicScenario {


id:string;


scenario:string;


probability:number;


impact:number;


}



export interface FuturePlan {


id:string;


objective:string;


priority:number;


timeHorizon:string;


}


