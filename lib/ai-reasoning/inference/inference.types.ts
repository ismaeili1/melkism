export interface InferenceRule {

 id:string;

 condition:string;

 conclusion:string;

 weight:number;

}


export interface InferenceResult {

 matched:boolean;

 conclusion?:string;

 score:number;

}

