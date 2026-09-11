export interface DecisionEvaluation {

confidence:number;

risk:string[];

evidence:string[];

}


export function evaluateDecision(){

return {

confidence:0,

risk:[],

evidence:[]

};

}


