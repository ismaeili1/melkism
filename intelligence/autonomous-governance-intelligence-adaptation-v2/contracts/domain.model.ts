
export interface SelfRegulationState {


id:string;


adaptationLevel:number;


reflectionLevel:number;


evaluationLevel:number;


validationLevel:number;


confidence:number;


timestamp:Date;


}



export interface RegulationSignal {


source:string;


type:string;


value:number;


weight:number;


}



