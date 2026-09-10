
export interface DecisionState {


id:string;


decisionLevel:number;


planningLevel:number;


optimizationLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface StrategicAction {


objective:string;


priority:number;


impact:string;


}


