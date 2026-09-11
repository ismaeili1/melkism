export interface EvaluationResult {

confidence:number;

evidence:string[];

}


export function evaluateDecision():

EvaluationResult {


return {

confidence:0,

evidence:[]

};


}

